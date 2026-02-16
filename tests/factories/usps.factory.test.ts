import { describe, it, expect } from "vitest";
import { createUspsAuthClient } from "../../src";

describe("USPS Client Factories", () => {
  it("creates an auth client", () => {
    const client = createUspsAuthClient();
    expect(client).toBeDefined();
    expect(typeof client.postToken).toBe("function");
  });
});