import type {
  DashboardOverview,
  PathologyDetail,
  PathologySummary,
  PlatformUser,
} from "@doctor-intensivista/shared";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3333";

class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {})
    },
    ...options
  });

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as { message?: string } | null;
    throw new ApiError(payload?.message ?? "Falha ao consultar a API.");
  }

  return response.json() as Promise<T>;
}

export interface LoginResponse {
  token: string;
  user: PlatformUser;
}

export function login(email: string, password: string) {
  return request<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password })
  });
}

export function getMe(token: string) {
  return request<{ user: PlatformUser }>("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export function getDashboard(token: string) {
  return request<DashboardOverview>("/dashboard/overview", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export function getPathologies(token: string) {
  return request<{ items: PathologySummary[] }>("/pathologies", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export function getPathology(token: string, slug: string) {
  return request<PathologyDetail>(`/pathologies/${slug}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export { ApiError };
