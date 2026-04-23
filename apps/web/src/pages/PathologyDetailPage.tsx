import type { PathologyDetail } from "@doctor-intensivista/shared";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { VerticalVideoCard } from "../components/VerticalVideoCard";
import { useAuth } from "../contexts/AuthContext";
import { getPathology } from "../lib/api";

export function PathologyDetailPage() {
  const { slug } = useParams();
  const { token } = useAuth();
  const [item, setItem] = useState<PathologyDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token || !slug) {
      return;
    }

    const authToken = token;
    const pathologySlug = slug;

    async function loadPathology() {
      try {
        const response = await getPathology(authToken, pathologySlug);
        setItem(response);
      } catch (loadError) {
        const message =
          loadError instanceof Error ? loadError.message : "Falha ao carregar a patologia.";
        setError(message);
      }
    }

    void loadPathology();
  }, [slug, token]);

  if (error) {
    return <div className="empty-state">{error}</div>;
  }

  if (!item) {
    return <div className="empty-state">Carregando conteúdo clínico...</div>;
  }

  const videos = item.contents.filter((content) => content.format === "video");
  const supports = item.contents.filter((content) => content.format !== "video");

  return (
    <div className="page-stack">
      <Link to="/pathologies" className="back-link">
        Voltar para patologias
      </Link>

      <section className="detail-hero">
        <div>
          <span className="eyebrow">Patologia prioritária</span>
          <h2>{item.name}</h2>
          <p>{item.overview}</p>
        </div>
        <div className="detail-hero__stats">
          <strong>{item.successRate}%</strong>
          <span>sucesso médio dos protocolos</span>
          <small>{item.averageTimeToProtocolMinutes} min até início do fluxo</small>
        </div>
      </section>

      <section className="section-block split-layout">
        <div className="panel">
          <div className="section-heading">
            <h3>Como diagnosticar</h3>
            <span>Passos críticos</span>
          </div>
          <ul className="check-list">
            {item.diagnosticSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <div className="section-heading">
            <h3>Como tratar</h3>
            <span>Fluxo assistencial</span>
          </div>
          <ul className="check-list">
            {item.treatmentProtocol.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h3>Vídeos verticais</h3>
          <span>Consumo rápido em mobile</span>
        </div>
        <div className="video-strip">
          {videos.map((video) => (
            <VerticalVideoCard key={video.id} item={video} />
          ))}
        </div>
      </section>

      <section className="section-block split-layout">
        <div className="panel">
          <div className="section-heading">
            <h3>Checklist de monitorização</h3>
            <span>À beira leito</span>
          </div>
          <ul className="check-list">
            {item.monitoringChecklist.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <div className="section-heading">
            <h3>Materiais de apoio</h3>
            <span>Texto e imagem</span>
          </div>
          <div className="support-list">
            {supports.map((support) => (
              <article key={support.id} className="support-card">
                <span>{support.format.toUpperCase()}</span>
                <strong>{support.title}</strong>
                <p>{support.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="curator-note">
        <span className="eyebrow">Nota de curadoria</span>
        <p>{item.curatorNote}</p>
      </section>
    </div>
  );
}
