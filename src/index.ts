import { RateRequest, NormalizedRate } from "./types/index";
import { ShippingConfig } from "./config";

// Import your actual logic functions
import { getRates as getCarrierRates } from "./api/getRates";
import { validateAddress as validateCarrierAddress } from "./aggregator/address";
import { createShipment as createCarrierShipment } from "./aggregator/shipment";

export class ShippingClient {
  private config: ShippingConfig;

  constructor(config: ShippingConfig) {
    this.config = config;
  }

  /**
   * Get rates for a specific carrier or across all enabled carriers.
   * We pass 'this.config' so the underlying clients don't rely on process.env
   */
  async getRates(request: RateRequest): Promise<NormalizedRate[]> {
    // In a fully agnostic version, we pass the config down
    return getCarrierRates(request, this.config);
  }

  async validateAddress(request: any) {
    return validateCarrierAddress(request, this.config);
  }

  async createShipment(request: any) {
    return createCarrierShipment(request, this.config);
  }
}

// Re-export everything for builders/converters users
export * from "./types/index";
export * from "./config";
export { buildUspsLabelRequest } from "./usps/labels/request";
export { convertUspsShipmentResponse } from "./converters/shipment/usps";