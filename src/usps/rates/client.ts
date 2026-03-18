import { UspsRatesSdk, OpenAPI } from "./generated/index";
import { configureUspsClient } from "../clientFactory";
import { UspsConfig } from "../../config";

/**
 * Service Client for the USPS Domestic Prices v3 API.
 * Uses the UspsRatesSdk and its internal ResourcesService.
 */
export class UspsRatesClient {
  private config: UspsConfig;

  constructor(config: UspsConfig) {
    this.config = config;
  }

  /**
   * Configures the OpenAPI singleton with the correct base URL and credentials.
   */
  async init(): Promise<void> {
    await configureUspsClient(OpenAPI, "rates");
  }

  /**
   * Fetches rates using the 'postBaseRatesSearch' method identified in ResourcesService.
   * @param requestBody - The search parameters for the query (BaseRatesQuery).
   */
  async getRates(requestBody: any): Promise<any> {
    await this.init();
    
    // Create the SDK instance using the global OpenAPI config
    const sdk = new UspsRatesSdk(OpenAPI);
    
    /**
     * FIX: Based on your ResourcesService source code:
     * method 'postBaseRatesSearch' is the correct endpoint for /base-rates/search
     */
    return await sdk.resources.postBaseRatesSearch(requestBody);
  }
}

export const createUspsRatesClient = (config: UspsConfig): UspsRatesClient => {
  return new UspsRatesClient(config);
};