import type { Playbook } from "../types";
import { CoverageSummary } from "./CoverageSummary";

export function DetailPanel({ playbook }: { playbook: Playbook | null }) {
  if (!playbook) {
    return <aside className="detail-panel detail-panel--empty"><p>Select a playbook to inspect its readiness details.</p></aside>;
  }
  return (
    <aside className="detail-panel" aria-labelledby="detail-title">
      <p className="eyebrow">{playbook.category} playbook</p>
      <h2 id="detail-title">{playbook.title}</h2>
      <p className="detail-summary">{playbook.summary}</p>
      <CoverageSummary value={playbook.coverage} />
      <dl>
        <div><dt>Owner</dt><dd>{playbook.owner}</dd></div>
        <div><dt>Response steps</dt><dd>{playbook.steps}</dd></div>
        <div><dt>Last reviewed</dt><dd>{playbook.lastReviewed}</dd></div>
      </dl>
      <button className="open-button" type="button">Open playbook</button>
    </aside>
  );
}
