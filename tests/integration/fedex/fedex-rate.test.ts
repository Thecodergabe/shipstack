import { setConfig, createFedexRatesClient } from "../../../src";
import { describe, it, expect, beforeAll } from "vitest";

// Only run this suite if FedEx keys exist
const hasFedexKeys =
  !!process.env.FEDEX_API_KEY &&
  !!process.env.FEDEX_BASE_URL;

(hasFedexKeys ? describe : describe.skip)("FedEx Rate Client", () => {
  beforeAll(() => {
    setConfig({
      FEDEX_API_KEY: process.env.FEDEX_API_KEY,
      FEDEX_BASE_URL: process.env.FEDEX_BASE_URL,
    });
  });

  it("should return rate quotes for a package", async () => {
    const fedex = createFedexRatesClient();
    const token = `Bearer ${process.env.FEDEX_API_KEY}`;

    const response = await fedex.rateAndTransitTimes(
      "application/json",
      token,
      "txn-001",
      "en_US",
      {
        requestedShipment: {
          shipper: {
            address: { postalCode: "94105" },
          },
          recipient: {
            address: { postalCode: "10001" },
          },
          packagingType: "YOUR_PACKAGING",
          pickupType: "DROPOFF_AT_FEDEX_LOCATION",
          rateRequestType: ["LIST"],
          requestedPackageLineItems: [
            {
              weight: { units: "OZ", value: 16 },
              dimensions: {
                length: 10,
                width: 6,
                height: 4,
                units: "IN",
              },
            },
          ],
        },
      }
    );

    expect(response.output?.rateReplyDetails?.length).toBeGreaterThan(0);
  });
});