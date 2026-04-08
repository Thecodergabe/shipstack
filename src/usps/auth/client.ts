import { OpenAPI, UspsAuthSdk } from "./generated/index";
import { configureUspsClient } from "../clientFactory";
import { getUspsConfig } from "@/config";
import { getLogger } from "@/logger";

/**
 * Client for handling USPS OAuth2 Authentication.
 * * Exchanges user-provided credentials for a temporary Bearer token.
 */
export class UspsAuthClient {
  private logger = getLogger();

  /**
   * Requests a new OAuth2 Access Token from USPS.
   * * * Uses the 'postToken' method with 'client_credentials'.
   * * This token is typically valid for 8 hours per 2026 USPS v3 specs.
   */
  async getAccessToken() {
    const config = getUspsConfig();
    
    // Configure OpenAPI for the Auth module (skips token attachment)
    await configureUspsClient(OpenAPI, "auth");
    
    // Use the user-provided auth URL
    OpenAPI.BASE = config.authUrl || "https://apis.usps.com/oauth2/v3";

    const sdk = new UspsAuthSdk(OpenAPI);

    this.logger.debug("[USPS] Requesting new OAuth token...");

    return sdk.resources.postToken({
      grant_type: "client_credentials" as any,
      client_id: config.clientId,
      client_secret: config.clientSecret
    });
  }
}

export const createUspsAuthClient = () => new UspsAuthClient();