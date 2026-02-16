import { describe, it, expect, vi, beforeEach } from "vitest";
import { TokenRequest } from "../../../src/usps/generated/models/TokenRequest";
import type { OpenAPIConfig } from "../../../src/usps/generated/core/OpenAPI";

// 1. Mock the request function explicitly
vi.mock("../../../src/usps/generated/core/request", () => ({
  request: vi.fn(),
}));

import { request as httpRequest } from "../../../src/usps/generated/core/request";

// 2. Mock the client factory so it doesn't load real credentials
vi.mock("../../../src/usps/auth/client", () => {
  const mockOpenAPIConfig: OpenAPIConfig = {
    BASE: "",
    VERSION: "1.0",
    WITH_CREDENTIALS: false,
    CREDENTIALS: "omit",
  };

  return {
    createUspsAuthClient: () => ({
      postToken: (body: any) =>
        httpRequest(mockOpenAPIConfig, {
          method: "POST",
          url: "/oauth2/token",
          body,
        }),
    }),
  };
});

import { createUspsAuthClient } from "../../../src/usps/auth/client";

describe("USPS Auth Client – Unit", () => {
  beforeEach(() => vi.resetAllMocks());

  it("sends correct request body for token", async () => {
    const usps = createUspsAuthClient();

    (httpRequest as any).mockResolvedValue({
      access_token: "mock-token",
      token_type: "Bearer",
      expires_in: 3600,
    });

    const result = await usps.postToken({
      grant_type: TokenRequest.grant_type.CLIENT_CREDENTIALS,
      client_id: "abc",
      client_secret: "xyz",
    });

    expect(httpRequest).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        method: "POST",
        url: "/oauth2/token",
        body: {
          grant_type: TokenRequest.grant_type.CLIENT_CREDENTIALS,
          client_id: "abc",
          client_secret: "xyz",
        },
      })
    );

    expect(result.access_token).toBe("mock-token");
  });
});