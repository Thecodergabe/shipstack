import { describe, it, expect, vi } from "vitest";
import { TokenRequest } from "../../../src/usps/generated/models/TokenRequest";
import type { OpenAPIConfig } from "../../../src/usps/generated/core/OpenAPI";

// 1. Mock the request function explicitly so it's a real mock
vi.mock("../../../src/usps/generated/core/request", () => ({
  request: vi.fn(),
}));

import { request as httpRequest } from "../../../src/usps/generated/core/request";

// 2. Mock the client factory so it does NOT load real USPS credentials
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

describe("USPS Auth – Error Handling", () => {
  it("throws on 400 Bad Request", async () => {
    const usps = createUspsAuthClient();

    // Mock USPS returning an error
    (httpRequest as any).mockRejectedValue({
      status: 400,
      message: "Bad Request",
    });

    await expect(
      usps.postToken({
        grant_type: TokenRequest.grant_type.CLIENT_CREDENTIALS,
        client_id: "bad",
        client_secret: "bad",
      })
    ).rejects.toThrow();
  });
});