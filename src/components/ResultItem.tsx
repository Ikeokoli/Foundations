import type { Playbook } from "../types";

export function ResultItem({ playbook, selected, onSelect }: {
  playbook: Playbook;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <li>
      <button className="result-item" type="button" aria-pressed={selected} onClick={onSelect}>
        <span className="result-heading"><strong>{playbook.title}</strong><span>{playbook.category}</span></span>
        <span className="result-summary">{playbook.summary}</span>
        <span className="result-meta">{playbook.steps} steps · {playbook.coverage}% coverage · {playbook.owner}</span>
      </button>
    </li>
  );
}
