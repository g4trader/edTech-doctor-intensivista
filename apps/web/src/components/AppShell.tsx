import { NavLink, Outlet } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const navigationItems = [
  { to: "/dashboard", label: "Dashboard", short: "DB" },
  { to: "/pathologies", label: "Patologias", short: "PT" },
  { to: "/account", label: "Conta", short: "CT" }
];

export function AppShell() {
  const { user } = useAuth();

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <span className="eyebrow">Curadoria Intensivista</span>
          <h1>Intensivista Pediátrico</h1>
        </div>
        <div className="user-chip">
          <strong>{user?.name?.split(" ")[0]}</strong>
          <span>{user?.hospital}</span>
        </div>
      </header>

      <main className="page-content">
        <Outlet />
      </main>

      <nav className="mobile-nav" aria-label="Navegação principal">
        {navigationItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `mobile-nav__item ${isActive ? "is-active" : ""}`}
          >
            <span>{item.short}</span>
            <small>{item.label}</small>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
