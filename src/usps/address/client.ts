import { OpenAPI, ResourcesService } from "./generated/index";
import { configureUspsClient } from "../clientFactory";
import { buildUspsAddressParams } from "./request";
import { normalizeUspsAddressResponse } from "../../converters/address/usps";
import { NormalizedAddress } from "../../types/address";
import { UspsConfig } from "../../config"; // Import your config type

export class UspsAddressClient {
  constructor(private config: UspsConfig) {}

  async init(): Promise<void> {
    // We pass the stored config to the factory to set up OpenAPI
    await configureUspsClient(OpenAPI, this.config.clientId);
  }

  /**
   * Renamed to verifyAddress to match the high-level API call
   */
  async verifyAddress(
    params: ReturnType<typeof buildUspsAddressParams>
  ): Promise<NormalizedAddress> {
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
    ) as any;

    return normalizeUspsAddressResponse(rawResponse);
  }
}

/**
 * Updated Factory to accept config
 */
export const createUspsAddressClient = (config: UspsConfig): UspsAddressClient => 
  new UspsAddressClient(config);