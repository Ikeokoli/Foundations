import { playbooks } from "../data/playbooks";
import { normalizeQuery } from "../lib/normalizeQuery";
import { rankPlaybooks } from "../lib/rankPlaybooks";
import type { Playbook } from "../types";

export function searchPlaybooks(query: string): Promise<Playbook[]> {
  const normalized = normalizeQuery(query);
  const delay = normalized.length > 4 ? 30 : normalized.length > 0 ? 110 : 45;
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(rankPlaybooks(playbooks, query)), delay);
  });
}
