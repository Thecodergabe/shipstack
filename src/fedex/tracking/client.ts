import { FedexConfig } from "@/config";
import { configureFedexClient } from "../clientFactory";
import { FedexTrackingSdk } from "./generated/index";

/**
 * High-level client for the FedEx Track API v1.
 * 
 * This class wraps the generated FedEx SDK to provide a standardized interface 
 * for tracking operations. It manages instance-specific authentication and 
 * handles the complex nested request structures required by FedEx.
 * 
 * @example
 * ```typescript
 * const fedexClient = createFedexTrackingClient(config);
 * await fedexClient.init();
 * const tracking = await fedexClient.getStatus("123456789012");
 * ```
 */
export class FedexTrackingClient {
  /** 
   * Internal instance of the generated FedEx SDK.
   * Holds the specific request configuration and service methods.
   */
  private sdk: FedexTrackingSdk;

  /**
   * Initializes a new instance of the FedexTrackingClient.
   * 
   * @param config - FedEx configuration containing credentials and base URL.
   */
  constructor(private config: FedexConfig) {
    /**
     * We initialize the SDK with the provided base URL.
     * Note: The SDK defaults to sandbox if no BASE is provided.
     */
    this.sdk = new FedexTrackingSdk({
      BASE: config.baseUrl || "https://apis.fedex.com",
    });
  }

  /**
   * Performs the OAuth2 handshake and configures the client session.
   * 
   * This method must be called once before any API requests. It retrieves 
   * a fresh Bearer token and injects it into this specific SDK instance's 
   * request configuration to prevent cross-request credential leakage.
   * 
   * @throws {ShipstackError} If authentication fails or credentials are invalid.
   * @returns {Promise<void>}
   */
  async init(): Promise<void> {
    /**
     * We pass the SDK's internal request configuration to the factory.
     * This ensures only THIS instance is updated with the new token.
     */
    await configureFedexClient(this.sdk.request.config, "Tracking");
  }

  /**
   * Retrieves status and scan history for a specific FedEx tracking number.
   * 
   * This method maps the simplified tracking number input to the FedEx 
   * 'trackByTrackingNumber' endpoint, requesting full scan details by default.
   * 
   * @param trackingNumber - The 12-15 digit FedEx identifier.
   * @returns {Promise<any>} The raw FedEx 'TrkcResponseVO_TrackingNumber' payload.
   */
  async getStatus(trackingNumber: string): Promise<any> {
    /**
     * The generated SDK method requires manual passing of headers.
     * We pull the TOKEN directly from this instance's config.
     */
    const token = this.sdk.request.config.TOKEN;

    return this.sdk.default.trackByTrackingNumber(
      "application/json",        // contentType
      `Bearer ${token}`,         // authorization
      undefined,                 // xCustomerTransactionId
      undefined,                 // xLocale
      {
        includeDetailedScans: true,
        trackingInfo: [
          {
            trackingNumberInfo: {
              trackingNumber: trackingNumber,
            },
          },
        ],
      }
    );
  }
}

/**
 * Factory function to create a new FedexTrackingClient.
 * 
 * @param config - The validated FedEx configuration object.
 * @returns An initialized instance of FedexTrackingClient.
 */
export const createFedexTrackingClient = (config: FedexConfig): FedexTrackingClient =>
  new FedexTrackingClient(config);