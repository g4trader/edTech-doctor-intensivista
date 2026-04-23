import type { ContentAsset } from "@doctor-intensivista/shared";

export function VerticalVideoCard({ item }: { item: ContentAsset }) {
  return (
    <article className="vertical-card">
      <div className="vertical-card__cover">
        <span className="vertical-card__tag">{item.coverTag}</span>
        <div className="vertical-card__play">PLAY</div>
      </div>
      <div className="vertical-card__body">
        <strong>{item.title}</strong>
        <p>{item.summary}</p>
        <small>{item.durationMinutes} min • vídeo vertical</small>
      </div>
    </article>
  );
}
