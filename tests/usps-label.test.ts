import { setConfig, createUspsLabelClient } from "../src";

describe("USPS Label Client", () => {
  beforeAll(() => {
    setConfig({
      USPS_API_KEY: process.env.USPS_API_KEY,
      USPS_BASE_URL: process.env.USPS_BASE_URL,
    });
  });

  it("should create a USPS shipping label", async () => {
    const usps = createUspsLabelClient();
    const token = `Bearer ${process.env.USPS_ACCESS_TOKEN}`;

    const response = await usps.createLabel({
      shipment: {
        from: {
          name: "Gabriel Smith",
          addressLine1: "123 Main St",
          city: "Bethany",
          state: "OR",
          postalCode: "97006",
          countryCode: "US",
        },
        to: {
          name: "Jane Doe",
          addressLine1: "456 Broadway",
          city: "New York",
          state: "NY",
          postalCode: "10001",
          countryCode: "US",
        },
        weight: {
          unit: "LB",
          value: 1.0,
        },
        serviceType: "PRIORITY",
      },
    }, token);

    expect(response.labelUrl).toMatch(/^https?:\/\//);
  });
});