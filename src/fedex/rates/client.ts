import { FedexRatesSdk, OpenAPI } from "./generated/index";
import { configureFedexClient } from "../clientFactory";
import { FedexConfig } from "@/config";

/**
 * Service Client for the FedEx Rates and Transit Times API v1.
 * * This client abstracts the complexity of the FedEx OAuth2 flow and the 
 * deeply nested request structures required by the 'rateAndTransitTimes' endpoint.
 * It ensures that every request is authenticated with a fresh Bearer token 
 * scoped to the provided credentials.
 * * @example
 * ```typescript
 * const client = new FedexRatesClient(config);
 * await client.init();
 * const rates = await client.getRates(fedexPayload);
 * ```
 */
export class FedexRatesClient {
  /**
   * Initializes the FedEx Rates client.
   * @param config - Validated FedEx configuration including clientId and clientSecret.
   */
  constructor(private config: FedexConfig) {}

  /**
   * Performs the OAuth2 handshake and configures the global OpenAPI state.
   * * This method must be called before executing any rate requests. it injects
   * the retrieved Bearer token into the OpenAPI singleton used by the generated SDK.
   * * @returns {Promise<void>}
   * @throws {ShipstackError} If authentication fails or credentials are invalid.
   */
  async init(): Promise<void> {
    /**
     * We pass the specific FedEx configuration to the factory to ensure the 
     * correct token is negotiated for this session.
     */
    await configureFedexClient(OpenAPI, this.config, "Rates");
  }

  /**
   * Retrieves real-time rates and transit times from FedEx.
   * * Maps to the 'POST /rate/v1/rates/quotes' endpoint. This method ensures 
   * a fresh token is present before dispatching the request.
   * * @param requestBody - The raw FedEx 'RateAndTransitTimesRequest' payload.
   * @returns {Promise<any>} The raw FedEx 'RateAndTransitTimesResponse' object.
   * @throws {Error} If the API returns a terminal error or network failure occurs.
   */
  async getRates(requestBody: any): Promise<any> {
    // Ensure the session is authorized
    await this.init();
    
    const sdk = new FedexRatesSdk(OpenAPI);
    
    /**
     * The generated SDK expects the Authorization header to be manually 
     * passed as a string. We retrieve the token set during init().
     */
    const authHeader = `Bearer ${OpenAPI.TOKEN || ''}`;

    return await sdk.default.rateAndTransitTimes(
      "application/json", // contentType
      authHeader,         // authorization
      undefined,          // xCustomerTransactionId
      "en_US",            // locale
      requestBody         // The transformed rate request
    );
  }
}

/**
 * Factory function to instantiate a new FedexRatesClient.
 * @param config - The FedEx configuration slice.
 * @returns An instance of FedexRatesClient.
 */
export const createFedexRatesClient = (config: FedexConfig): FedexRatesClient => 
  new FedexRatesClient(config);