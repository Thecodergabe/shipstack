import { ShipmentRequest, NormalizedShipment } from "../types/index";
import { createUspsLabelClient } from "../usps/labels/client";
import { buildUspsLabelRequest } from "../usps/labels/request"; 
import { convertUspsShipmentResponse } from "../converters/shipment/usps";
import { getUspsConfig, getFedexConfig, getUpsConfig, getEnabledCarriers } from "../config";

/**
 * Orchestrates the creation of shipping labels across supported carriers.
 * * This aggregator acts as the unified interface for generating postage, 
 * abstracting carrier-specific labeling requirements, authentication, 
 * and response formatting.
 * * @param request - The agnostic ShipmentRequest containing parcel details and carrier selection.
 * @returns A promise resolving to a NormalizedShipment containing the tracking number and label data.
 * @throws {Error} If the carrier is disabled, misconfigured, or not yet implemented.
 */
export async function createShipment(request: ShipmentRequest): Promise<NormalizedShipment> {
  const carrier = request.carrier.toLowerCase();
  const enabledCarriers = getEnabledCarriers();

  // Validate that the requested carrier is currently enabled in the library config
  if (!enabledCarriers.includes(carrier)) {
    throw new Error(`Shipstack: Carrier '${carrier}' is not enabled in the current configuration.`);
  }

  switch (carrier) {
    case "usps":
      return handleUspsShipment(request);

    case "fedex":
      // Implementation pending: src/fedex/labels/client.ts
      throw new Error("FedEx shipment creation is not yet implemented.");

    case "ups":
      // Implementation pending: src/ups/labels/client.ts
      throw new Error("UPS shipment creation is not yet implemented.");

    default:
      throw new Error(`Shipstack: Carrier '${carrier}' is not supported for shipment creation.`);
  }
}

/**
 * Internal handler for USPS Label v3 generation.
 * * @param request - Agnostic shipment data.
 */
async function handleUspsShipment(request: ShipmentRequest): Promise<NormalizedShipment> {
  /**
   * 1. Retrieve the isolated USPS configuration slice.
   * 2. Initialize the dedicated Label Client.
   */
  const config = getUspsConfig();
  const client = createUspsLabelClient(config);
  
  /**
   * 3. Initialize the client (handles OAuth2 token negotiation).
   */
  await client.init();

  /**
   * 4. Transform the agnostic request into the USPS 'LabelRequest' schema.
   */
  const uspsRequest = buildUspsLabelRequest(request);
  
  /**
   * 5. Execute the label generation request.
   */
  const rawResponse = await client.createLabel(uspsRequest);
  
  /**
   * 6. Normalize the raw response (metadata and Base64 image) into a 
   * standardized Shipstack NormalizedShipment object.
   */
  return convertUspsShipmentResponse(rawResponse);
}