import { describe, it, expect } from "vitest";
import { buildUspsRateRequest } from "../../src/usps/rates/request";
import { mailClassOutboundOnly } from "../../src/usps/rates/generated/models/mailClassOutboundOnly";
import { BaseRatesQuery } from "../../src/usps/rates/generated/models/BaseRatesQuery";

describe("USPS Rate Request Builder", () => {
  it("should map agnostic request to USPS TotalRatesQuery and exclude invalid fields", () => {
    const internalReq = {
      carrier: "usps",
      originZip: "90210",
      destZip: "97229",
      weightOz: 16, // 1 pound
      lengthInches: 10,
      widthInches: 5,
      heightInches: 5,
    };

    const uspsReq = buildUspsRateRequest(internalReq as any);

    // Verify correct mapping
    expect(uspsReq.originZIPCode).toBe("90210");
    expect(uspsReq.destinationZIPCode).toBe("97229");
    expect(uspsReq.weight).toBe(1);
    expect(uspsReq.length).toBe(10);
    expect(uspsReq.width).toBe(5);
    expect(uspsReq.height).toBe(5);

    // Verify defaults
    expect(uspsReq.mailClass).toBe(mailClassOutboundOnly.ALL);
    
    // Verify it does NOT have properties from BaseRatesQuery that cause 400 Bad Request
    // in the TotalRatesQuery (postTotalRatesSearch) endpoint. Wait, actually, buildUspsRateRequest
    // NO LONGER returns processingCategory! Let's assert they are undefined.
    expect((uspsReq as any).processingCategory).toBeUndefined();
    expect((uspsReq as any).rateIndicator).toBeUndefined();
    expect((uspsReq as any).destinationEntryFacilityType).toBeUndefined();
  });
});
