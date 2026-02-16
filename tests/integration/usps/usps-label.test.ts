import { setConfig, createUspsLabelsClient } from "../../../src";
import { describe, it, expect, beforeAll } from "vitest";
import { LabelRequest } from "../../../src/usps/labels/generated/models/LabelRequest";

// Only run this suite if USPS keys AND payment token exist
const hasUspsLabelKeys =
  !!process.env.USPS_API_KEY &&
  !!process.env.USPS_BASE_URL &&
  !!process.env.USPS_ACCESS_TOKEN;

(hasUspsLabelKeys ? describe : describe.skip)("USPS Label Client", () => {
  beforeAll(() => {
    setConfig({
      USPS_API_KEY: process.env.USPS_API_KEY,
      USPS_BASE_URL: process.env.USPS_BASE_URL,
    });
  });

  it("should create a USPS shipping label", async () => {
    const usps = createUspsLabelsClient();
    const token = process.env.USPS_ACCESS_TOKEN; // Payment Authorization Token

    const requestBody: LabelRequest = {
      toAddress: {
        name: "Jane Doe",
        addressLine1: "456 Broadway",
        city: "New York",
        state: "NY",
        postalCode: "10001",
        countryCode: "US",
      },
      fromAddress: {
        name: "Gabriel Smith",
        addressLine1: "123 Main St",
        city: "Bethany",
        state: "OR",
        postalCode: "97006",
        countryCode: "US",
      },
      packageDescription: {
        mailClass: "PRIORITY",
        weight: {
          unitOfMeasurement: "LB",
          value: 1.0,
        },
      },
      imageInfo: {
        format: "PDF",
      },
    };

    const response = await usps.postLabel(
      `Bearer ${token}`,
      requestBody
    );

    // Multipart response: metadata + label + receipt
    expect(response).toBeDefined();
    expect(response.metadata).toBeDefined();
    expect(response.metadata.trackingNumber).toBeDefined();
  });
});