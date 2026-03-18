import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../clientFactory";
import { buildUspsAddressParams } from "./request";
import { normalizeUspsAddressResponse } from "../../converters/address/usps";
import { NormalizedAddress } from "../../types/address";

/**
 * Service Client for interacting with the USPS Addresses v3 API.
 * * Provides standardized access to USPS address validation and normalization services.
 * This client ensures all carrier-specific configurations are applied via the 
 * Shipstack initialization flow.
 */
export class UspsAddressClient {
  /**
   * Initializes the USPS client context.
   * Maps credentials and base URL to the OpenAPI singleton.
   */
  async init(): Promise<void> {
    await configureUspsClient(OpenAPI, "address");
  }

  /**
   * Validates a physical address and returns a normalized Shipstack result.
   * * @param params - Parameters generated via buildUspsAddressParams.
   * @returns {Promise<NormalizedAddress>} Standardized address object.
   */
  async validateAddress(
    params: ReturnType<typeof buildUspsAddressParams>
  ): Promise<NormalizedAddress> {
    await this.init();
    
    const service = new ResourcesService(OpenAPI as any);
    
    /**
     * The cast to 'any' is intentional. It bridges the gap between the 
     * generated SDK models and our internal library interfaces to bypass 
     * the "no properties in common" structural check.
     */
    const rawResponse = await service.getAddress(
      params.streetAddress,
      params.state,
      params.firm,
      params.secondaryAddress,
      params.city,
      params.urbanization,
      params.zipCode,
      params.zipPlus4
    ) as any;

    return normalizeUspsAddressResponse(rawResponse);
  }
}

/**
 * Factory function for creating a UspsAddressClient instance.
 */
export const createUspsAddressClient = (): UspsAddressClient => new UspsAddressClient();