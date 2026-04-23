import { useState, type FormEvent } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

export function LoginPage() {
  const { login, token } = useAuth();
  const [email, setEmail] = useState("ana@demo.com");
  const [password, setPassword] = useState("demo123");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await login(email, password);
    } catch (submissionError) {
      const message =
        submissionError instanceof Error ? submissionError.message : "Não foi possível autenticar.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="auth-layout">
      <section className="auth-hero">
        <span className="eyebrow">Plataforma por assinatura</span>
        <h1>Conteúdo curado para UTI pediátrica, pronto para uso em mobile.</h1>
        <p>
          Base inicial com autenticação, benchmark de uso, patologias prioritárias e biblioteca em
          vídeo vertical, texto e imagem.
        </p>
        <div className="hero-pills">
          <span>10 patologias prioritárias</span>
          <span>Benchmark da comunidade</span>
          <span>Curadoria médica especializada</span>
        </div>
      </section>

      <section className="auth-card">
        <div>
          <span className="eyebrow">Acesso</span>
          <h2>Entrar na plataforma</h2>
          <p>Use uma das credenciais de demonstração para navegar no MVP.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            E-mail
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="voce@hospital.com"
            />
          </label>

          <label>
            Senha
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Sua senha"
            />
          </label>

          {error ? <div className="error-banner">{error}</div> : null}

          <button type="submit" disabled={submitting}>
            {submitting ? "Entrando..." : "Acessar dashboard"}
          </button>
        </form>

        <div className="demo-access">
          <strong>Demo</strong>
          <span>ana@demo.com / demo123</span>
          <span>carlos@demo.com / demo123</span>
        </div>
      </section>
    </div>
  );
}
