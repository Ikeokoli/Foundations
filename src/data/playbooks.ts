import type { Playbook } from "../types";

export const playbooks: Playbook[] = [
  { id: "PB-101", title: "API latency incident", category: "Incident", summary: "Triage elevated latency, isolate dependencies, and coordinate recovery.", owner: "SRE", lastReviewed: "12 Aug 2026", steps: 8, coverage: 92, keywords: ["latency", "api", "incident", "recovery"] },
  { id: "PB-102", title: "Database failover", category: "Data", summary: "Validate replicas and move traffic during a primary database failure.", owner: "Data Platform", lastReviewed: "9 Aug 2026", steps: 11, coverage: 86, keywords: ["database", "failover", "replica"] },
  { id: "PB-103", title: "Rollback a release", category: "Delivery", summary: "Reverse a production deployment while preserving evidence and ownership.", owner: "Release Engineering", lastReviewed: "7 Aug 2026", steps: 7, coverage: 95, keywords: ["rollback", "release", "deployment"] },
  { id: "PB-104", title: "Queue saturation", category: "Reliability", summary: "Reduce backlog safely and protect downstream consumers.", owner: "Core Services", lastReviewed: "3 Aug 2026", steps: 9, coverage: 78, keywords: ["queue", "backlog", "consumer"] },
  { id: "PB-105", title: "Credential exposure", category: "Incident", summary: "Contain, rotate, and verify credentials after suspected exposure.", owner: "Security", lastReviewed: "29 Jul 2026", steps: 10, coverage: 89, keywords: ["credential", "secret", "security"] },
  { id: "PB-106", title: "Capacity readiness review", category: "Reliability", summary: "Check load assumptions and scaling protections before a major event.", owner: "Platform", lastReviewed: "24 Jul 2026", steps: 6, coverage: 83, keywords: ["capacity", "readiness", "scaling"] },
];
