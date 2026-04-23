interface MetricBarProps {
  label: string;
  value: number;
}

export function MetricBar({ label, value }: MetricBarProps) {
  return (
    <div className="metric-bar">
      <div className="metric-bar__header">
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>
      <div className="metric-bar__track">
        <div className="metric-bar__fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
