import type { Playbook } from "../types";
import { normalizeQuery } from "./normalizeQuery";

export function rankPlaybooks(items: Playbook[], query: string): Playbook[] {
  const normalized = normalizeQuery(query);
  if (!normalized) return items;

  return items
    .map((item) => {
      const title = item.title.toLocaleLowerCase();
      const haystack = [item.title, item.summary, item.category, ...item.keywords].join(" ").toLocaleLowerCase();
      const score = title.startsWith(normalized) ? 3 : title.includes(normalized) ? 2 : haystack.includes(normalized) ? 1 : 0;
      return { item, score };
    })
    .filter((result) => result.score > 0)
    .sort((left, right) => right.score - left.score || right.item.coverage - left.item.coverage)
    .map((result) => result.item);
}
