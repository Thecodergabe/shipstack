import { UspsLabelsSdk } from "./generated/UspsLabelsSdk";
import { UspsConfig, getUspsConfig } from "../../config";
import type { LabelRequest } from "./generated/index";
import { configureUspsClient } from "../clientFactory";
import { getUspsAccessToken } from "../auth/index";

export class UspsLabelClient {
  private sdk: UspsLabelsSdk;

  constructor(config: UspsConfig, tokenProvider: () => Promise<string> = getUspsAccessToken) {
    this.sdk = new UspsLabelsSdk({
      TOKEN: tokenProvider,
      HEADERS: {
        'X-API-Key': config.apiKey || ''
      },
      BASE: config.baseUrl || 'https://api.usps.com/labels/v3'
    });
  }

  async init() {
    const instanceConfig = (this.sdk as any).request?.config || (this.sdk as any).config;
    await configureUspsClient(instanceConfig, "Labels");
  }

  /**
   * Generates a shipping label.
   * Note: USPS v3 requires a Payment Token. If you are using Pay-on-Use 
   * returns/standard EPS, this token usually comes from their /payments/v3 API.
   */
  async createLabel(labelRequest: LabelRequest, paymentToken: string = "") {
    /**
     * FIX: postLabel expects TWO arguments.
     * 1. The Payment Token (Header: X-Payment-Authorization-Token)
     * 2. The Body (requestBody)
     */
    return this.sdk.resources.postLabel(
      paymentToken, // Argument 1
      labelRequest  // Argument 2
    );
  }
}

export const createUspsLabelClient = (
  config: UspsConfig = getUspsConfig(),
  tokenProvider?: () => Promise<string>
) => {
  return new UspsLabelClient(config, tokenProvider);
};