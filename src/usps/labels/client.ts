/**
 * USPS Label Service Client
 * * A specialized wrapper for the USPS v3 Labels OpenAPI SDK.
 * This client manages the lifecycle of label generation, including 
 * OAuth2 authentication and payment authorization tokens.
 */

import { UspsLabelsSdk, LabelRequest } from "@/usps/labels/generated/index";
import { UspsConfig, getUspsConfig } from "@/config";
import { configureUspsClient } from "@/usps/clientFactory";
import { getUspsAccessToken } from "@/usps/auth/index";

/**
 * Client for generating USPS shipping labels.
 * @public
 */
export class UspsLabelClient {
  private sdk: UspsLabelsSdk;

  /**
   * Initializes the USPS Label Client.
   * @param {UspsConfig} config - USPS-specific configuration.
   * @param {() => Promise<string>} [tokenProvider] - Optional custom OAuth2 token provider.
   */
  constructor(config: UspsConfig, tokenProvider: () => Promise<string> = getUspsAccessToken) {
    this.sdk = new UspsLabelsSdk({
      TOKEN: tokenProvider,
      HEADERS: {
        'X-API-Key': config.apiKey || ''
      },
      BASE: config.baseUrl || 'https://api.usps.com/labels/v3'
    });
  }

  /**
   * Synchronizes the SDK instance with the global client factory.
   */
  async init(): Promise<void> {
    const instanceConfig = (this.sdk as any).request?.config || (this.sdk as any).config;
    await configureUspsClient(instanceConfig, "Labels");
  }

  /**
   * Generates a physical or digital shipping label via USPS v3.
   * 
   * * Important: USPS v3 requires a secondary Payment Authorization Token 
   * passed in the headers. This is separate from the Bearer OAuth token.
   * 
   * @param {LabelRequest} labelRequest - The standardized USPS label payload.
   * @param {string} [paymentToken=""] - The token derived from the USPS Payments API.
   * @returns {Promise<any>} The label image (PDF/ZPL) and tracking metadata.
   * @throws {Error} If the API request fails or payment is unauthorized.
   */
  async createLabel(labelRequest: LabelRequest, paymentToken: string = "") {
    /**
     * The generated postLabel method maps the paymentToken to 
     * the 'X-Payment-Authorization-Token' header automatically.
     */
    return this.sdk.resources.postLabel(
      paymentToken,
      labelRequest
    );
  }
}

/**
 * Factory function to create a new UspsLabelClient instance.
 */
export const createUspsLabelClient = (
  config: UspsConfig = getUspsConfig(),
  tokenProvider?: () => Promise<string>
) => {
  return new UspsLabelClient(config, tokenProvider);
};