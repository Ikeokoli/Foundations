export function CoverageSummary({ value }: { value: number }) {
  return (
    <div className="coverage-summary">
      <div><span>Operational coverage</span><strong>{value}%</strong></div>
      <div className="coverage-track" role="img" aria-label={`${value}% operational coverage`}>
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
