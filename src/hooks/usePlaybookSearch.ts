import { useEffect, useState } from "react";
import { searchPlaybooks } from "../api/searchPlaybooks";
import type { Playbook, SearchStatus } from "../types";

export function usePlaybookSearch(query: string) {
  const [results, setResults] = useState<Playbook[]>([]);
  const [status, setStatus] = useState<SearchStatus>("idle");

  useEffect(() => {
    setStatus("loading");
    searchPlaybooks(query)
      .then((nextResults) => {
        setResults(nextResults);
        setStatus(nextResults.length > 0 ? "success" : "empty");
      })
      .catch(() => setStatus("error"));
  }, [query]);

  return { results, status };
}
