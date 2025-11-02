import { setConfig, createFedexAddressClient } from "../src";

describe("FedEx Address Client", () => {
  beforeAll(() => {
    setConfig({
      FEDEX_API_KEY: process.env.FEDEX_API_KEY,
      FEDEX_BASE_URL: process.env.FEDEX_BASE_URL,
    });
  });

  it("should validate an address", async () => {
    const fedex = createFedexAddressClient();
    const token = `Bearer ${process.env.FEDEX_API_KEY}`;

    const response = await fedex.validateAddress(
      "application/json",
      token,
      "txn-123",
      "en_US",
      {
        address: {
          streetLines: ["123 Main St"],
          city: "Bethany",
          stateOrProvinceCode: "OR",
          postalCode: "97006",
          countryCode: "US",
        },
      }
    );

    expect(response.output?.resolvedAddresses?.[0]?.parsedPostalCode?.base).toBe("97006");
  });
});