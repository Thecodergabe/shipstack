/**
 * UPS OAuth2 Token Manager
 * * Manages the lifecycle of UPS access tokens, including in-memory caching 
 * and automatic refresh before expiration.
 */

import { UpsAuthClient } from "./client";
import { UpsConfig } from "@/config";
import { getLogger } from "@/logger";

/**
 * Handles token storage, expiry calculations, and refresh logic.
 * This ensures we don't hit UPS rate limits by requesting a new token 
 * for every single API call.
 */
export class UpsTokenManager {
  private client: UpsAuthClient;
  private cachedToken: string | null = null;
  private expiresAt: number | null = null;

  /**
   * Initializes the Token Manager.
   * * @param {UpsConfig} config - The UPS-specific configuration.
   */
  constructor(config: UpsConfig) {
    this.client = new UpsAuthClient(config);
  }

  /**
   * Retrieves a valid access token. 
   * * Returns the cached token if valid; otherwise, requests a new one from UPS.
   * * @returns {Promise<string>} A valid OAuth2 bearer token.
   * @public
   */
  async getToken(): Promise<string> {
    const log = getLogger();
    const now = Date.now();

    /**
     * Check if the token exists and is not within 60 seconds of expiring.
     * We use a 60-second buffer to account for network latency and 
     * ensure the token doesn't die mid-request.
     */
    if (this.cachedToken && this.expiresAt && now < this.expiresAt - 60000) {
      log.debug("UPS Auth: Using cached bearer token.");
      return this.cachedToken;
    }

    log.debug("UPS Auth: Token expired or missing. Fetching new token...");
    
    // Call our AuthClient to perform the OAuth 'client_credentials' handshake
    const response = await this.client.generateToken();
    
    // UPS returns 'access_token' in the successful response body
    this.cachedToken = response.access_token ?? null;
    
    /**
     * UPS returns 'expires_in' in seconds (usually 3600).
     * We convert this to a millisecond timestamp for comparison.
     */
    const expiresInSeconds = parseInt(response.expires_in || "3600", 10);
    const expiresInMs = expiresInSeconds * 1000;
    this.expiresAt = now + expiresInMs;

    if (!this.cachedToken) {
      throw new Error("UPS Auth failed: Received empty access token from server.");
    }

    return this.cachedToken;
  }
}