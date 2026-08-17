import { useMemo, useState } from "react";
import "./App.css";
import { DetailPanel } from "./components/DetailPanel";
import { EmptyState } from "./components/EmptyState";
import { ResultList } from "./components/ResultList";
import { SearchBar } from "./components/SearchBar";
import { StatusBanner } from "./components/StatusBanner";
import { usePlaybookSearch } from "./hooks/usePlaybookSearch";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { results, status } = usePlaybookSearch(query);
  const selectedPlaybook = useMemo(
    () => results.find((playbook) => playbook.id === selectedId) ?? null,
    [results, selectedId],
  );

  return (
    <div className="app-shell">
      <header className="topbar">
        <a href="#main-content" className="brand"><span aria-hidden="true">F</span>Foundations</a>
        <nav aria-label="Primary"><a href="#library" aria-current="page">Library</a><a href="#coverage">Coverage</a></nav>
      </header>
      <main id="main-content">
        <section className="hero">
          <p className="eyebrow">Operational knowledge</p>
          <h1>Find the right response before pressure finds you.</h1>
          <p>Search reviewed playbooks for incidents, delivery, data, and reliability.</p>
          <SearchBar value={query} onChange={setQuery} />
          <StatusBanner status={status} />
        </section>
        <section className="library" id="library" aria-labelledby="results-title">
          <div className="results-panel">
            <div className="results-heading"><div><p className="eyebrow">Knowledge library</p><h2 id="results-title">Playbooks</h2></div><span>{results.length} results</span></div>
            {status === "empty" ? <EmptyState /> : <ResultList results={results} selectedId={selectedId} onSelect={setSelectedId} />}
          </div>
          <DetailPanel playbook={selectedPlaybook} />
        </section>
      </main>
    </div>
  );
}
