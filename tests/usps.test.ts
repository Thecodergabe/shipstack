import { setConfig, createUspsClient } from "../src";
import { TokenRequest } from "../src/usps/generated/models/TokenRequest";

describe("USPS Client", () => {
  beforeAll(() => {
    setConfig({
      USPS_API_KEY: process.env.USPS_API_KEY,
      USPS_BASE_URL: process.env.USPS_BASE_URL
    });
  });

  it("should fetch OAuth2 token", async () => {
    const usps = createUspsClient();
  const client_id = process.env.USPS_CLIENT_ID;
  const client_secret = process.env.USPS_CLIENT_SECRET;

  if (!client_id || !client_secret) {
    throw new Error("Missing USPS credentials");
  }

  const token = await usps.postToken({
    grant_type:  TokenRequest.grant_type.CLIENT_CREDENTIALS,
    client_id,
    client_secret
  });

    expect(token.access_token).toBeDefined();
  });
});