import { describe, it, expect } from "vitest";
import { setConfig, getConfig } from "../../src/config";

describe("Config System", () => {
  it("stores and retrieves config values", () => {
    setConfig({ USPS_API_KEY: "123" });
    expect(getConfig().USPS_API_KEY).toBe("123");
  });

  it("merges config updates", () => {
    setConfig({ USPS_BASE_URL: "https://example.com" });
    const cfg = getConfig();
    expect(cfg.USPS_API_KEY).toBe("123");
    expect(cfg.USPS_BASE_URL).toBe("https://example.com");
  });
});