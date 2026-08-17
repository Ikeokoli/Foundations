import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";
import "./test/setup";

describe("Foundation Playbook Finder", () => {
  it("loads the local playbook library", async () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /Find the right response/i })).toBeInTheDocument();
    expect(await screen.findByRole("button", { name: /API latency incident/i })).toBeInTheDocument();
  });
  it("narrows results from the search field", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByRole("textbox", { name: "Search playbooks" }), "database");
    expect(await screen.findByRole("button", { name: /Database failover/i })).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByRole("button", { name: /Queue saturation/i })).not.toBeInTheDocument();
    });
  });
  it("opens a playbook detail panel", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(await screen.findByRole("button", { name: /Rollback a release/i }));
    const panel = screen.getByRole("complementary");
    expect(within(panel).getByRole("heading", { name: "Rollback a release" })).toBeInTheDocument();
    expect(within(panel).getByText("Release Engineering")).toBeInTheDocument();
  });
});
