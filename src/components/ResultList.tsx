import type { Playbook } from "../types";
import { ResultItem } from "./ResultItem";

export function ResultList({ results, selectedId, onSelect }: {
  results: Playbook[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <ul className="result-list" aria-label="Playbook results">
      {results.map((playbook) => (
        <ResultItem key={playbook.id} playbook={playbook} selected={playbook.id === selectedId} onSelect={() => onSelect(playbook.id)} />
      ))}
    </ul>
  );
}
