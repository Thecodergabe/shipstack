import { setConfig, createUspsTrackingClient } from "../src";

describe("USPS Tracking Client", () => {
  beforeAll(() => {
    setConfig({
      USPS_API_KEY: process.env.USPS_API_KEY,
      USPS_BASE_URL: process.env.USPS_BASE_URL,
    });
  });

  it("should track a USPS package", async () => {
    const usps = createUspsTrackingClient();
    const token = `Bearer ${process.env.USPS_ACCESS_TOKEN}`;

    const response = await usps.trackPackage({
      trackingNumber: "9400111899223856928499", // test number
    }, token);

    expect(response.status).toBeDefined();
    expect(response.events?.length).toBeGreaterThan(0);
  });
});