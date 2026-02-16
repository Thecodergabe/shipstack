import { describe, it, expect } from "vitest";
import { BaseRatesQuery } from "../../../src/usps/rates/generated/models/BaseRatesQuery";

describe("USPS Rates Contract", () => {
  it("BaseRatesQuery has required enums", () => {
    expect(BaseRatesQuery.processingCategory).toBeDefined();
    expect(BaseRatesQuery.rateIndicator).toBeDefined();
    expect(BaseRatesQuery.destinationEntryFacilityType).toBeDefined();
  });

  it("processingCategory enum matches USPS spec", () => {
    expect(BaseRatesQuery.processingCategory.MACHINABLE).toBe("MACHINABLE");
    expect(BaseRatesQuery.processingCategory.NONSTANDARD).toBe("NONSTANDARD");
  });
});