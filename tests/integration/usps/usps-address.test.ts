import { setConfig, createUspsAuthClient } from "../../../src";
import { TokenRequest } from "../../../src/usps/generated/models/TokenRequest";
import { describe, it, expect, beforeAll } from "vitest";

// Only run this suite if USPS keys exist
const hasUspsKeys =
  !!process.env.USPS_API_KEY &&
  !!process.env.USPS_BASE_URL &&
  !!process.env.USPS_CLIENT_ID &&
  !!process.env.USPS_CLIENT_SECRET;

(hasUspsKeys ? describe : describe.skip)("USPS Auth Client", () => {
  beforeAll(() => {
    setConfig({
      USPS_API_KEY: process.env.USPS_API_KEY,
      USPS_BASE_URL: process.env.USPS_BASE_URL,
      USPS_CLIENT_ID: process.env.USPS_CLIENT_ID,
      USPS_CLIENT_SECRET: process.env.USPS_CLIENT_SECRET,
    });
  });

  it("should fetch OAuth2 token", async () => {
    const usps = createUspsAuthClient();

    const client_id = process.env.USPS_CLIENT_ID;
    const client_secret = process.env.USPS_CLIENT_SECRET;

    // This check is redundant now but still safe
    if (!client_id || !client_secret) {
      throw new Error("Missing USPS credentials");
    }

    const token = await usps.postToken({
      grant_type: TokenRequest.grant_type.CLIENT_CREDENTIALS,
      client_id,
      client_secret,
    });

    expect(token.access_token).toBeDefined();
    expect(typeof token.access_token).toBe("string");
    expect(token.token_type).toBe("Bearer");
    expect(token.expires_in).toBeGreaterThan(0);
  });
});