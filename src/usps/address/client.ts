import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../clientFactory";
import { buildUspsAddressParams } from "./request";
import { getLogger } from "../../logger";
// Import the converter from our new standardized folder
import { UspsAddressConverter } from "../../converters/address/usps";
import type { NormalizedAddress } from "../../converters/address/usps";

/**
 * Client for interacting with the USPS Addresses v3 API.
 */
export class UspsAddressClient {
  private logger = getLogger();

  /**
   * Initializes the USPS Addresses client.
   */
  async init() {
    await configureUspsClient(OpenAPI, "address");
  }

  /**
   * Validates a physical address against the USPS database.
   * @returns A NormalizedAddress standardized for the Shipstack library.
   */
  async validateAddress(
    params: ReturnType<typeof buildUspsAddressParams>
  ): Promise<NormalizedAddress> {
    this.logger.debug("[USPS] Executing address validation request...");
    
    await this.init();
    
    const service = new ResourcesService(OpenAPI as any);
    
    const rawResponse = await service.getAddress(
      params.streetAddress,
      params.state,
      params.firm,
      params.secondaryAddress,
      params.city,
      params.urbanization,
      params.zipCode,
      params.zipPlus4
    );

    // Pass the raw SDK response through our agnostic converter
    return UspsAddressConverter.fromResponse(rawResponse);
  }
}

export const createUspsAddressClient = () => new UspsAddressClient();