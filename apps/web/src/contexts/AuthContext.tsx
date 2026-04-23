import type { PlatformUser } from "@doctor-intensivista/shared";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { getMe, login as loginRequest } from "../lib/api";

interface AuthContextValue {
  loading: boolean;
  token: string | null;
  user: PlatformUser | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const storageKey = "doctor-intensivista-token";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(storageKey));
  const [user, setUser] = useState<PlatformUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function bootstrap() {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await getMe(token);
        setUser(response.user);
      } catch {
        localStorage.removeItem(storageKey);
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    void bootstrap();
  }, [token]);

  const value: AuthContextValue = {
    loading,
    token,
    user,
    async login(email: string, password: string) {
      const response = await loginRequest(email, password);
      localStorage.setItem(storageKey, response.token);
      setToken(response.token);
      setUser(response.user);
    },
    logout() {
      localStorage.removeItem(storageKey);
      setToken(null);
      setUser(null);
    }
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth precisa ser usado dentro de AuthProvider.");
  }

  return context;
}
