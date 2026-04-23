import type { PathologySummary } from "@doctor-intensivista/shared";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MetricBar } from "../components/MetricBar";
import { useAuth } from "../contexts/AuthContext";
import { getPathologies } from "../lib/api";

export function PathologiesPage() {
  const { token } = useAuth();
  const [items, setItems] = useState<PathologySummary[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    const authToken = token;

    async function loadPathologies() {
      try {
        const response = await getPathologies(authToken);
        setItems(response.items);
      } catch (loadError) {
        const message = loadError instanceof Error ? loadError.message : "Falha ao carregar catálogo.";
        setError(message);
      }
    }

    void loadPathologies();
  }, [token]);

  if (error) {
    return <div className="empty-state">{error}</div>;
  }

  if (!items.length) {
    return <div className="empty-state">Carregando patologias prioritárias...</div>;
  }

  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div>
          <span className="eyebrow">Biblioteca clínica</span>
          <h2>Top 10 patologias prioritárias</h2>
          <p>
            Diagnóstico, abordagem terapêutica, vídeos verticais e materiais visuais estruturados
            para consulta rápida no plantão.
          </p>
        </div>
      </section>

      <section className="catalog-grid">
        {items.map((item) => (
          <Link key={item.id} to={`/pathologies/${item.slug}`} className="catalog-card">
            <div className="catalog-card__topline">
              <span>#{item.frequencyRank}</span>
              <strong>{item.successRate}%</strong>
            </div>
            <h3>{item.name}</h3>
            <p>{item.clinicalFocus}</p>
            <MetricBar label="Sucesso médio dos protocolos" value={item.successRate} />
            <div className="catalog-card__tags">
              <span>{item.contentCounts.videos} vídeos</span>
              <span>{item.contentCounts.texts} textos</span>
              <span>{item.contentCounts.images} imagens</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
