import { setConfig } from "../../../src";
import {
  priceType,
  ResourcesService,
  RateDetails,
} from "../../../src/usps/rates/generated/index";

import { BaseRatesQuery } from "../../../src/usps/rates/generated/models/BaseRatesQuery";
import { ExtraServiceRateQuery } from "../../../src/usps/rates/generated/models/ExtraServiceRateQuery";
import { RateListQuery } from "../../../src/usps/rates/generated/models/RateListQuery";
import { TotalRatesQuery } from "../../../src/usps/rates/generated/models/TotalRatesQuery";
import { LetterRatesQuery } from "../../../src/usps/rates/generated/models/LetterRatesQuery";

import { mailClass } from "../../../src/usps/rates/generated/models/mailClass";
import { mailClassOutboundOnly } from "../../../src/usps/rates/generated/models/mailClassOutboundOnly";
import { ExtraService } from "../../../src/usps/rates/generated/models/ExtraService";
import { ExtraServiceRateQuery as ExtraServiceRateQueryNS } from "../../../src/usps/rates/generated/models/ExtraServiceRateQuery";

import { describe, it, expect, beforeAll } from "vitest";

// Only run this suite if USPS keys exist
const hasUspsKeys =
  !!process.env.USPS_API_KEY &&
  !!process.env.USPS_BASE_URL;

(hasUspsKeys ? describe : describe.skip)("USPS Rates Suite", () => {
  beforeAll(() => {
    setConfig({
      USPS_API_KEY: process.env.USPS_API_KEY,
      USPS_BASE_URL: process.env.USPS_BASE_URL,
    });
  });

  it("should return a base rate for a package", async () => {
    const payload: BaseRatesQuery = {
      originZIPCode: "97006",
      destinationZIPCode: "10001",
      weight: 2.0,
      length: 10,
      width: 6,
      height: 4,
      processingCategory: BaseRatesQuery.processingCategory.MACHINABLE,
      mailClass: mailClass.PRIORITY_MAIL,

      // REQUIRED FIELDS YOU WERE MISSING:
      rateIndicator: BaseRatesQuery.rateIndicator.SP, // Single Piece
      destinationEntryFacilityType: BaseRatesQuery.destinationEntryFacilityType.NONE,
      priceType: priceType.RETAIL,
    };

    const response = await ResourcesService.postBaseRatesSearch(payload);

    expect(response.price).toBeDefined();
    expect(response.mailClass).toBe(mailClass.PRIORITY_MAIL);
  });

  it("should return extra service pricing", async () => {
    const payload: ExtraServiceRateQuery = {
      originZIPCode: "97006",
      destinationZIPCode: "10001",
      weight: 1.0,
      priceType: priceType.COMMERCIAL,
      mailClass: mailClass.PRIORITY_MAIL,
      extraServices: [ExtraService._921],
      accountType: ExtraServiceRateQueryNS.accountType.EPS,
    };

    const response = await ResourcesService.postExtraServiceRatesSearch(payload);

    expect(response.extraServices?.length).toBeGreaterThan(0);
    expect(response.extraServices?.[0]?.price).toBeDefined();
  });

  it("should return a list of eligible rates", async () => {
    const payload: RateListQuery = {
      originZIPCode: "97006",
      destinationZIPCode: "10001",
      weight: 3.0,
      length: 12,
      width: 8,
      height: 6,
      mailClass: mailClassOutboundOnly.PRIORITY_MAIL,
    };

    const response = await ResourcesService.postRateList(payload);

    expect(response.rates?.length).toBeGreaterThan(0);
    expect(response.rates?.[0]?.price).toBeDefined();
  });

  it("should return total rates including extra services", async () => {
    const payload: TotalRatesQuery = {
      originZIPCode: "97006",
      destinationZIPCode: "10001",
      weight: 2.5,
      length: 10,
      width: 6,
      height: 4,
      extraServices: [ExtraService._930, ExtraService._921],
    };

    const response = await ResourcesService.postTotalRatesSearch(payload);

    expect(response.totalPrice).toBeDefined();
    expect(response.breakdown?.baseRate).toBeDefined();
    expect(response.breakdown?.extraServices?.length).toBeGreaterThan(0);
  });

  it("should return First-Class Mail letter pricing", async () => {
    const payload: LetterRatesQuery = {
      weight: 1.0,
      length: 6,
      thickness: 0.007,
      height: 0.25,
      processingCategory: LetterRatesQuery.processingCategory.LETTERS,
    };

    const response = await ResourcesService.postLetterRatesSearch(payload);

    expect(response.price).toBeDefined();
    expect(response.mailClass).toBe(mailClass.USPS_GROUND_ADVANTAGE);
  });
});