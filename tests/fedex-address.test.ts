import { setConfig, createFedexAddressClient } from "../src";

describe("FedEx Address Client", () => {
  beforeAll(() => {
    setConfig({
      FEDEX_API_KEY: process.env.FEDEX_API_KEY,
      FEDEX_BASE_URL: process.env.FEDEX_BASE_URL
    });
  });

  it("should validate an address", async () => {
    const fedex = createFedexAddressClient();
    const token = "Bearer your-fedex-token";
    const response = await fedex.validateAddress(
      "application/json",
      token,
      "txn-123", // optional transaction ID
      "en_US",   // optional locale
      {
        // address payload here
        address: {
          streetLines: ["123 Main St"],
          city: "Bethany",
          stateOrProvinceCode: "OR",
          postalCode: "97006",
          countryCode: "US"
        }
      }
    );

    expect(response).toBeDefined();
  });
});