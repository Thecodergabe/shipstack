import {
  setConfig,
  createFedexAvailabilityClient,
} from "../../../src";

import { DefaultService } from "../../../src/fedex/availability/generated";
import { body } from "../../../src/fedex/availability/generated/models/body";
import { TransitTimeOutputVO } from "../../../src/fedex/availability/generated/models/TransitTimeOutputVO";

import { describe, it, expect, beforeAll } from "vitest";

// Only run this suite if FedEx keys exist
const hasFedexKeys =
  !!process.env.FEDEX_API_KEY &&
  !!process.env.FEDEX_BASE_URL;

(hasFedexKeys ? describe : describe.skip)("FedEx Availability Client", () => {
  beforeAll(() => {
    setConfig({
      FEDEX_API_KEY: process.env.FEDEX_API_KEY,
      FEDEX_BASE_URL: process.env.FEDEX_BASE_URL,
    });
  });

  it("should retrieve services and transit times with commit details", async () => {
    const token = `Bearer ${process.env.FEDEX_API_KEY}`;

    const requestBody: body = {
      originAddress: {
        streetLines: ["123 Main St"],
        city: "Bethany",
        stateOrProvinceCode: "OR",
        postalCode: "97006",
        countryCode: "US",
      },
      destinationAddress: {
        streetLines: ["456 Broadway"],
        city: "New York",
        stateOrProvinceCode: "NY",
        postalCode: "10001",
        countryCode: "US",
      },
      shipmentDate: new Date().toISOString().split("T")[0],
      packagingType: "YOUR_PACKAGING",
      totalWeight: {
        units: "LB",
        value: 1.0,
      },
    };

    const response: TransitTimeOutputVO =
      await DefaultService.retrieveServicesAndTransitTimes(
        "application/json",
        token,
        "txn-availability-001",
        "en_US",
        requestBody
      );

    const transitDetails =
      response.output?.transitTimes?.[0]?.transitTimeDetails?.[0];
    const commit = transitDetails?.commit;

    expect(response.transactionId).toBeDefined();
    expect(transitDetails?.serviceType).toBeDefined();
    expect(transitDetails?.serviceName).toBeDefined();
    expect(commit?.dateDetail?.day).toMatch(/\d{2}-\d{2}-\d{4}/);
    expect(commit?.dateDetail?.dayOfWeek).toMatch(/MON|TUE|WED|THU|FRI|SAT|SUN/);
    expect(commit?.dateDetail?.time).toMatch(/\d{2}:\d{2}:\d{2}/);
    expect(commit?.transitDays?.minimumTransitTime).toBeDefined();
    expect(commit?.derivedDestinationDetail?.postalCode).toBe("10001");
  });
});