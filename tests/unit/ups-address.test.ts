import { describe, it, expect, vi, beforeEach } from "vitest";
import { UpsAddressClient } from "../../src/ups/address/client";

// Mock the TokenManager to intercept getToken calls
vi.mock("../../src/ups/oauth/manager", () => {
  return {
    UpsTokenManager: class {
      async getToken() {
        return "fake-oauth-token-123";
      }
    }
  };
});

describe("UPS Address Client", () => {
  it("should fetch and attach OAuth2 token before calling validation API", async () => {
    const config = {
      enabled: true,
      clientId: "my-client-id",
      clientSecret: "my-client-secret",
      accountNumber: "12345X"
    };

    const client = new UpsAddressClient(config);

    // Mock the inner SDK addressValidation function to just return the attached token
    const mockSdkMethod = vi.fn().mockResolvedValue({
      AddressClassification: { Description: "Residential" },
      Candidate: [{ AddressKeyFormat: {} }]
    });

    (client as any).sdk = {
      request: {
        config: {}
      },
      addressValidation: {
        addressValidation: mockSdkMethod
      }
    };

    await client.validateAddress({
      XAVRequest: {
        AddressKeyFormat: {
          ConsigneeName: "Test",
          AddressLine: ["123 Main"],
          PoliticalDivision2: "City",
          PoliticalDivision1: "ST",
          PostcodePrimaryLow: "12345",
          CountryCode: "US"
        }
      }
    });

    // Verify token was injected into the request config
    expect((client as any).sdk.request.config.TOKEN).toBe("fake-oauth-token-123");

    // Verify the addressValidation endpoint was called with correct parameters
    expect(mockSdkMethod).toHaveBeenCalledWith(
      3,
      expect.any(Object),
      "False",
      1,
      "v2"
    );
  });
});
