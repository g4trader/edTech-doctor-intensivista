import cors from "cors";
import express from "express";
import helmet from "helmet";
import jwt from "jsonwebtoken";
import { z } from "zod";

import {
  authenticateUser,
  getDashboardOverview,
  getPathologyBySlug,
  getUserById,
  listPathologies
} from "./data/mockData.js";

const app = express();
const jwtSecret = process.env.JWT_SECRET ?? "troque-esta-chave-em-producao";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false
  })
);
app.use(express.json());

app.get("/health", (_request, response) => {
  response.json({
    status: "ok",
    service: "doctor-intensivista-api"
  });
});

app.post("/auth/login", (request, response) => {
  const parsed = loginSchema.safeParse(request.body);

  if (!parsed.success) {
    response.status(400).json({
      message: "Credenciais inválidas.",
      issues: parsed.error.flatten()
    });
    return;
  }

  const user = authenticateUser(parsed.data.email, parsed.data.password);

  if (!user) {
    response.status(401).json({ message: "E-mail ou senha incorretos." });
    return;
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role
    },
    jwtSecret,
    { expiresIn: "12h" }
  );

  response.json({
    token,
    user
  });
});

app.use((request, response, next) => {
  if (request.path === "/health" || request.path === "/auth/login") {
    next();
    return;
  }

  const authorization = request.headers.authorization;

  if (!authorization?.startsWith("Bearer ")) {
    response.status(401).json({ message: "Token ausente." });
    return;
  }

  const token = authorization.slice("Bearer ".length);

  try {
    const payload = jwt.verify(token, jwtSecret);
    request.user = payload;
    next();
  } catch {
    response.status(401).json({ message: "Token inválido." });
  }
});

app.get("/auth/me", (request, response) => {
  const user = request.user ? getUserById(request.user.id) : null;

  if (!user) {
    response.status(404).json({ message: "Usuário não encontrado." });
    return;
  }

  response.json({ user });
});

app.get("/dashboard/overview", (request, response) => {
  const overview = request.user ? getDashboardOverview(request.user.id) : null;

  if (!overview) {
    response.status(404).json({ message: "Dashboard não encontrado." });
    return;
  }

  response.json(overview);
});

app.get("/pathologies", (_request, response) => {
  response.json({
    items: listPathologies()
  });
});

app.get("/pathologies/:slug", (request, response) => {
  const pathology = getPathologyBySlug(request.params.slug);

  if (!pathology) {
    response.status(404).json({ message: "Patologia não encontrada." });
    return;
  }

  response.json(pathology);
});

const port = Number(process.env.PORT ?? process.env.API_PORT ?? 3333);

app.listen(port, () => {
  console.log(`API disponível em http://0.0.0.0:${port}`);
});
