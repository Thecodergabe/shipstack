import { UspsAddressSdk } from "./generated/index";
import { configureUspsClient } from "../clientFactory";
import { buildUspsAddressParams } from "./request";
import { normalizeUspsAddressResponse } from "@/converters/address/usps";
import { NormalizedAddress } from "@/types/address";
import { UspsConfig } from "@/config";

export class UspsAddressClient {
  private sdk: UspsAddressSdk;

  constructor(private config: UspsConfig) {
    this.sdk = new UspsAddressSdk();
  }

  async init(): Promise<void> {
    await configureUspsClient(this.sdk.request.config, "Address");
  }

  async verifyAddress(
    params: ReturnType<typeof buildUspsAddressParams>
  ): Promise<NormalizedAddress> {
    await this.init();
    
    const rawResponse = await this.sdk.resources.getAddress(
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