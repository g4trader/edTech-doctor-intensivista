import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { AppShell } from "./components/AppShell";
import { useAuth } from "./contexts/AuthContext";
import { AccountPage } from "./pages/AccountPage";
import { DashboardPage } from "./pages/DashboardPage";
import { LoginPage } from "./pages/LoginPage";
import { PathologiesPage } from "./pages/PathologiesPage";
import { PathologyDetailPage } from "./pages/PathologyDetailPage";

function RequireAuth() {
  const { loading, token } = useAuth();

  if (loading) {
    return <div className="screen-center">Carregando plataforma...</div>;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<RequireAuth />}>
        <Route element={<AppShell />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/pathologies" element={<PathologiesPage />} />
          <Route path="/pathologies/:slug" element={<PathologyDetailPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
