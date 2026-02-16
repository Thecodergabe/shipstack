import { describe, it, expect } from "vitest";

describe("USPS Tracking Snapshot", () => {
  it("matches tracking event structure", () => {
    const sample = [
      { status: "In Transit", date: "2024-01-01", location: "Portland, OR" },
    ];

    expect(sample).toMatchSnapshot();
  });
});