export type PlaybookCategory = "Incident" | "Reliability" | "Delivery" | "Data";
export type SearchStatus = "idle" | "loading" | "success" | "empty" | "error";

export interface Playbook {
  id: string;
  title: string;
  category: PlaybookCategory;
  summary: string;
  owner: string;
  lastReviewed: string;
  steps: number;
  coverage: number;
  keywords: string[];
}
