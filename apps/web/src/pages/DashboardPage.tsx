import type { DashboardOverview } from "@doctor-intensivista/shared";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MetricBar } from "../components/MetricBar";
import { StatCard } from "../components/StatCard";
import { useAuth } from "../contexts/AuthContext";
import { getDashboard } from "../lib/api";

export function DashboardPage() {
  const { token } = useAuth();
  const [data, setData] = useState<DashboardOverview | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    const authToken = token;

    async function loadDashboard() {
      try {
        const response = await getDashboard(authToken);
        setData(response);
      } catch (loadError) {
        const message = loadError instanceof Error ? loadError.message : "Falha ao carregar dashboard.";
        setError(message);
      }
    }

    void loadDashboard();
  }, [token]);

  if (error) {
    return <div className="empty-state">{error}</div>;
  }

  if (!data) {
    return <div className="empty-state">Carregando indicadores clínicos e benchmark...</div>;
  }

  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div>
          <span className="eyebrow">Visão consolidada</span>
          <h2>{data.user.name}</h2>
          <p>
            Acompanhamento individual, benchmark da comunidade e foco nas patologias com maior
            volume de estudo na plataforma.
          </p>
        </div>
        <div className="hero-panel__badge">
          <strong>{data.userStats.subscriptionPlan}</strong>
          <span>{data.user.specialty}</span>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h3>Seu desempenho</h3>
          <span>Uso individual</span>
        </div>
        <div className="stats-grid">
          <StatCard
            label="Minutos nesta semana"
            value={`${data.userStats.weeklyMinutes} min`}
            helper="Tempo dedicado a conteúdos curados e checklists."
          />
          <StatCard
            label="Módulos concluídos"
            value={`${data.userStats.completionRate}%`}
            helper="Percentual dos conteúdos prioritários já finalizados."
          />
          <StatCard
            label="Casos revisados"
            value={`${data.userStats.casesReviewed}`}
            helper="Casos estudados com apoio de protocolos e materiais visuais."
          />
          <StatCard
            label="Ranking comparativo"
            value={`Top ${100 - data.userStats.rankingPercentile}%`}
            helper="Posição aproximada frente à comunidade assinante."
          />
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h3>Benchmark da plataforma</h3>
          <span>Dados agregados</span>
        </div>
        <div className="stats-grid">
          <StatCard
            label="Usuários totais"
            value={`${data.platformStats.totalUsers}`}
            helper="Base ativa com acesso ao conteúdo por assinatura."
          />
          <StatCard
            label="Ativos nos últimos 30 dias"
            value={`${data.platformStats.activeUsers30d}`}
            helper="Médicos com estudo recorrente no período."
          />
          <StatCard
            label="Sessões no mês"
            value={`${data.platformStats.totalSessions30d}`}
            helper="Volume consolidado de navegação e consumo de conteúdo."
          />
          <StatCard
            label="Sessão média"
            value={`${data.platformStats.averageSessionMinutes} min`}
            helper="Tempo médio por acesso em dispositivos móveis."
          />
        </div>
      </section>

      <section className="section-block split-layout">
        <div className="panel">
          <div className="section-heading">
            <h3>Patologias mais frequentes</h3>
            <span>Estudo e consulta</span>
          </div>
          <div className="rank-list">
            {data.mostFrequentPathologies.map((item) => (
              <Link key={item.id} to={`/pathologies/${item.slug}`} className="rank-item">
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.clinicalFocus}</p>
                </div>
                <span>#{item.frequencyRank}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="section-heading">
            <h3>Tratamentos com melhor desfecho</h3>
            <span>Benchmark</span>
          </div>
          <div className="benchmark-list">
            {data.topTreatmentBenchmarks.map((item) => (
              <article key={item.pathologySlug} className="benchmark-item">
                <strong>{item.pathologyName}</strong>
                <p>{item.treatmentName}</p>
                <MetricBar label="Taxa de sucesso" value={item.successRate} />
                <small>{item.supportingSignal}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h3>Destaques da curadoria</h3>
          <span>Comece por aqui</span>
        </div>
        <div className="pathology-grid">
          {data.featuredPathologies.map((item) => (
            <Link key={item.id} to={`/pathologies/${item.slug}`} className="pathology-card">
              <span className="pathology-card__rank">Top {item.frequencyRank}</span>
              <h4>{item.name}</h4>
              <p>{item.clinicalFocus}</p>
              <div className="pathology-card__footer">
                <span>{item.successRate}% sucesso</span>
                <span>{item.contentCounts.videos} vídeos</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
