import type { SearchStatus } from "../types";

const messages: Record<SearchStatus, string> = {
  idle: "Start typing to find a playbook.",
  loading: "Searching the playbook library…",
  success: "Results updated.",
  empty: "No playbooks match this search.",
  error: "The playbook library could not be searched.",
};

export function StatusBanner({ status }: { status: SearchStatus }) {
  return <p className={`search-status search-status--${status}`} role="status">{messages[status]}</p>;
}
