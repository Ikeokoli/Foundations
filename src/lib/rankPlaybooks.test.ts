import { describe, expect, it } from "vitest";
import { playbooks } from "../data/playbooks";
import { rankPlaybooks } from "./rankPlaybooks";

describe("rankPlaybooks", () => {
  it("returns the full library for a blank query", () => {
    expect(rankPlaybooks(playbooks, " ")).toEqual(playbooks);
  });
  it("ranks title matches before keyword matches", () => {
    expect(rankPlaybooks(playbooks, "database")[0].title).toBe("Database failover");
  });
});
