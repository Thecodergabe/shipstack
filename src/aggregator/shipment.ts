import { ShipmentRequest, NormalizedShipment } from "@/types/index";

/**
 * USPS Service Layer
 */
import { createUspsLabelClient } from "../usps/labels/client";
import { buildUspsLabelRequest } from "../usps/labels/request"; 
import { convertUspsShipmentResponse } from "@/converters/shipment/usps";

/**
 * FedEx Service Layer
 */
import { createFedexShipClient } from "@/fedex/ship/client";
import { buildFedexShipRequest } from "@/fedex/ship/request"; 
import { normalizeFedexShipResponse } from "@/converters/shipment/fedex"; 

/**
 * UPS Service Layer
 * * Includes the v2409 Shipping Client, Request Builder, and Response Converter.
 */
import { createUpsShipClient } from "@/ups/shipping/client";
import { buildUpsShipRequest } from "@/ups/shipping/request";
import { normalizeUpsShipResponse } from "@/converters/shipment/ups";

/**
 * Configuration Layer
 */
import { 
  getUspsConfig, 
  getFedexConfig, 
  getUpsConfig, 
  getEnabledCarriers 
} from "../config";

/**
 * Orchestrates the creation of shipping labels across all supported carriers.
 * * This aggregator acts as a unified facade, abstracting the underlying 
 * complexities of different carrier APIs (USPS v3, FedEx v1, UPS v2409).
 * * @param {ShipmentRequest} request - The agnostic shipment payload.
 * @returns {Promise<NormalizedShipment>} A standardized shipment object.
 */
export async function createShipment(request: ShipmentRequest): Promise<NormalizedShipment> {
  const carrier = request.carrier.toLowerCase();
  const enabledCarriers = getEnabledCarriers();

  if (!enabledCarriers.includes(carrier)) {
    throw new Error(`Shipstack Configuration Error: Carrier '${carrier}' is not enabled.`);
  }

  switch (carrier) {
    case "usps":
      return handleUspsShipment(request);

    case "fedex":
      return handleFedexShipment(request);

    case "ups":
      return handleUpsShipment(request);

    default:
      throw new Error(`Shipstack Support Error: Carrier '${carrier}' is not yet supported for shipments.`);
  }
}

/**
 * Internal handler for USPS Label v3 generation.
 * @private
 */
async function handleUspsShipment(request: ShipmentRequest): Promise<NormalizedShipment> {
  const config = getUspsConfig();
  const client = createUspsLabelClient(config);
  await client.init();
  const uspsRequest = buildUspsLabelRequest(request);
  const rawResponse = await client.createLabel(uspsRequest);
  return convertUspsShipmentResponse(rawResponse);
}

/**
 * Internal handler for FedEx Ship v1 generation.
 * @private
 */
async function handleFedexShipment(request: ShipmentRequest): Promise<NormalizedShipment> {
  const config = getFedexConfig();
  const client = createFedexShipClient(config);
  await client.init();
  const fedexRequest = buildFedexShipRequest(request);
  const rawResponse = await client.createLabel(fedexRequest);
  return normalizeFedexShipResponse(rawResponse, request.serviceCode);
}

/**
 * Internal handler for UPS Shipping v2409 generation.
 * * Utilizes the internal OAuth2 manager for token lifecycle handling
 * and maps the agnostic request to the UPS SHIPRequestWrapper.
 * @private
 */
async function handleUpsShipment(request: ShipmentRequest): Promise<NormalizedShipment> {
  const config = getUpsConfig();
  const client = createUpsShipClient(config);

  /**
   * UPS Request Transformation
   * * Uses 'accountNumber' from the UpsConfig interface to satisfy
   * the UPS ShipperNumber requirement.
   */
  const upsRequest = buildUpsShipRequest(request, config.accountNumber);

  /**
   * Execute Shipment Creation
   * * The client automatically manages OAuth2 token retrieval and injection.
   */
  const rawResponse = await client.createShipment(upsRequest);

  /**
   * Standardize the UPS response into the Shipstack NormalizedShipment format.
   */
  return normalizeUpsShipResponse(rawResponse);
}