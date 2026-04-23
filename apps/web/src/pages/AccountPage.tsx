import { useAuth } from "../contexts/AuthContext";

export function AccountPage() {
  const { logout, user } = useAuth();

  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div>
          <span className="eyebrow">Perfil do assinante</span>
          <h2>{user?.name}</h2>
          <p>
            Área inicial para identidade do usuário, assinatura, instituição e futuro histórico de
            consumo clínico.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="profile-card">
          <div>
            <strong>{user?.specialty}</strong>
            <p>{user?.hospital}</p>
            <small>{user?.email}</small>
          </div>
          <button type="button" className="secondary-button" onClick={logout}>
            Sair da plataforma
          </button>
        </div>
      </section>
    </div>
  );
}
