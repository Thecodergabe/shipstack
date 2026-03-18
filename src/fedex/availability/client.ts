import { FedexConfig } from "../../config";
import { configureFedexClient } from "../clientFactory";
import { FedexAvailabilitySdk } from "./generated/index";

/**
 * Client for the FedEx Service Availability and Transit Times API v1.
 * 
 * This class isolates the generated FedEx Availability SDK, providing 
 * methods to query estimated transit times and available service options 
 * between origin and destination pairs.
 * 
 * @example
 * ```typescript
 * const client = createFedexAvailabilityClient(config);
 * await client.init();
 * const transitDetails = await client.getTransitTimes(availabilityRequestBody);
 * ```
 */
export class FedexAvailabilityClient {
  /** 
   * Internal instance of the generated FedEx Availability SDK.
   * Maintains isolated request configuration and token state.
   */
  private sdk: FedexAvailabilitySdk;

  /**
   * Initializes a new instance of the FedexAvailabilityClient.
   * 
   * @param config - FedEx configuration containing credentials and base URL.
   */
  constructor(private config: FedexConfig) {
    this.sdk = new FedexAvailabilitySdk({
      BASE: config.baseUrl || "https://apis.fedex.com",
    });
  }

  /**
   * Performs the OAuth2 handshake to authorize the session.
   * 
   * Fetches a fresh Bearer token and injects it into this specific SDK 
   * instance's request configuration to ensure thread-safety.
   * 
   * @throws {ShipstackError} If authentication fails or credentials are missing.
   * @returns {Promise<void>}
   */
  async init(): Promise<void> {
    await configureFedexClient(this.sdk.request.config, "Availability");
  }

  /**
   * Retrieves estimated transit times for a specific shipment route.
   * 
   * Maps to the 'POST /availability/v1/transittimes' endpoint via the 
   * generated `retrieveServicesAndTransitTimes` method.
   * 
   * @param requestBody - The formatted FedEx transit time request payload.
   * @returns {Promise<any>} The raw 'TransitTimeOutputVO' payload.
   */
  async getTransitTimes(requestBody: any): Promise<any> {
    const token = this.sdk.request.config.TOKEN;

    return this.sdk.default.retrieveServicesAndTransitTimes(
      "application/json",        // contentType
      `Bearer ${token}`,         // authorization
      undefined,                 // xCustomerTransactionId
      undefined,                 // xLocale
      requestBody
    );
  }

  /**
   * Retrieves a list of available FedEx services and packaging types.
   * 
   * Maps to the 'POST /availability/v1/packageandserviceoptions' endpoint.
   * 
   * @param requestBody - The formatted FedEx package options request payload.
   * @returns {Promise<any>} The raw 'CmdcResponseVO' payload.
   */
  async getPackageOptions(requestBody: any): Promise<any> {
    const token = this.sdk.request.config.TOKEN;

    return this.sdk.default.getPackageAndServiceOptions(
      "application/json",
      `Bearer ${token}`,
      undefined,
      undefined,
      requestBody
    );
  }
}

/**
 * Factory function to create a new FedexAvailabilityClient.
 * 
 * @param config - The validated FedEx configuration object.
 * @returns An initialized instance of FedexAvailabilityClient.
 */
export const createFedexAvailabilityClient = (config: FedexConfig): FedexAvailabilityClient =>
  new FedexAvailabilityClient(config);