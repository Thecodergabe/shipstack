/**
 * UPS OAuth2 Authentication Client
 * * Responsible for obtaining bearer tokens from the UPS Security API.
 * This client uses the 'client_credentials' grant type.
 */

import { UpsAuthSdk, tokenSuccessResponse } from "./generated/index";
import { UpsConfig } from "@/config";
import { getLogger } from "@/logger";
import { ShipstackError } from "@/errors";

export class UpsAuthClient {
  private sdk: UpsAuthSdk;

  /**
   * Initializes the UPS Auth Client.
   * * @param {UpsConfig} config - The UPS-specific configuration slice.
   */
  constructor(private config: UpsConfig) {
    /**
     * We pass the credentials directly into the generated SDK constructor.
     * The SDK handles the mapping to USERNAME (Client ID) and PASSWORD (Client Secret).
     */
    this.sdk = new UpsAuthSdk({
      BASE: config.baseUrl ?? "https://onlinetools.ups.com",
      USERNAME: config.clientId,
      PASSWORD: config.clientSecret,
    });
  }

  /**
   * Generates a new OAuth2 bearer token.
   * * * Implementation Details:
   * 1. Uses the 'createToken' method from the generated OAuth service.
   * 2. Passes 'client_credentials' as form data.
   * 3. Optionally includes 'x-merchant-id' if provided in config.
   * * @returns {Promise<tokenSuccessResponse>} The UPS token response object.
   * @throws {ShipstackError} If authentication fails or credentials are missing.
   * @public
   */
  async generateToken(): Promise<tokenSuccessResponse> {
    const log = getLogger();
    const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";

    if (isBrowser) {
      throw new ShipstackError(
        "UPS OAuth cannot be performed directly from the browser. Use a server-side or edge proxy for authentication.",
        "ups"
      );
    }

    if (!this.config.clientId || !this.config.clientSecret) {
      throw new ShipstackError(
        "UPS OAuth failed: clientId or clientSecret is missing.", 
        "ups"
      );
    }

    try {
      /**
       * Note: The generated method name is 'createToken'.
       * It expects an object with 'grant_type' and an optional merchant ID.
       */
      const response = await this.sdk.oAuthClientCredentials.createToken(
        { grant_type: "client_credentials" },
        this.config.accountNumber // Maps to xMerchantId if you have it in your config
      );

      log.debug("UPS OAuth2 token refreshed successfully.");
      return response;
    } catch (error: any) {
      log.error(`UPS Authentication Error: ${error.message}`);
      throw new ShipstackError(
        `UPS Auth Failed: ${error.message}`,
        "ups",
        error.status
      );
    }
  }
}

/**
 * Factory for creating a UpsAuthClient.
 * * @param {UpsConfig} config - The UPS configuration block.
 * @returns {UpsAuthClient}
 */
export const createUpsAuthClient = (config: UpsConfig): UpsAuthClient => 
  new UpsAuthClient(config);