import { useEffect, useState } from "react";
import { searchPlaybooks } from "../api/searchPlaybooks";
import type { Playbook, SearchStatus } from "../types";

export function usePlaybookSearch(query: string) {
  const [results, setResults] = useState<Playbook[]>([]);
  const [status, setStatus] = useState<SearchStatus>("idle");

  useEffect(() => {
    let active = true;
    setStatus("loading");
    searchPlaybooks(query)
      .then((nextResults) => {
        if (!active) return;
        setResults(nextResults);
        setStatus(nextResults.length > 0 ? "success" : "empty");
      })
      .catch(() => {
        if (active) setStatus("error");
      });

    return () => {
      active = false;
    };
  }, [query]);

  return { results, status };
}
