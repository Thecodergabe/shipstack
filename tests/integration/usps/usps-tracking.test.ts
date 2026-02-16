import { setConfig, createUspsTrackingClient } from "../../../src";
import { describe, it, expect, beforeAll } from "vitest";

// Only run when USPS keys exist
const hasUspsKeys =
  !!process.env.USPS_API_KEY &&
  !!process.env.USPS_BASE_URL;

(hasUspsKeys ? describe : describe.skip)("USPS Tracking Client", () => {
  beforeAll(() => {
    setConfig({
      USPS_API_KEY: process.env.USPS_API_KEY,
      USPS_BASE_URL: process.env.USPS_BASE_URL,
    });
  });

  it("should track a USPS package", async () => {
    const usps = createUspsTrackingClient();

    const response = await usps.getPackageTracking([
      {
        trackingNumber: "9400111899223856928499",
      }
    ]);

    // Response is TrackingDetails = TrackingDetail[]
    expect(Array.isArray(response)).toBe(true);
    expect(response.length).toBeGreaterThan(0);

    // Check first event structure
    expect(response[0]).toBeDefined();
    expect(typeof response[0]).toBe("object");
  });
});