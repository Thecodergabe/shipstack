import { ShipmentRequest, NormalizedShipment } from "../types/index";

/**
 * USPS Service Layer
 * Includes the v3 Label Client, Request Builder, and Response Converter.
 */
import { createUspsLabelClient } from "../usps/labels/client";
import { buildUspsLabelRequest } from "../usps/labels/request"; 
import { convertUspsShipmentResponse } from "../converters/shipment/usps";

/**
 * FedEx Service Layer
 * Includes the v1 Ship Client, Request Builder, and Response Converter.
 */
import { createFedexShipClient } from "../fedex/ship/client";
import { buildFedexShipRequest } from "../fedex/ship/request"; 
import { normalizeFedexShipResponse } from "../converters/shipment/fedex"; 

/**
 * Configuration Layer
 * Environment-agnostic getters for carrier-specific credential slices.
 */
import { getUspsConfig, getFedexConfig, getEnabledCarriers } from "../config";

/**
 * Orchestrates the creation of shipping labels across all supported carriers.
 * * This aggregator acts as a unified facade, abstracting the underlying 
 * complexities of different carrier APIs (USPS v3, FedEx v1). It handles 
 * authentication initialization, request transformation, and response 
 * normalization into a consistent Shipstack format.
 * * @param {ShipmentRequest} request - The agnostic shipment payload containing 
 * addresses, parcel dimensions, and the selected carrier/service.
 * * @returns {Promise<NormalizedShipment>} A standardized shipment object 
 * containing the tracking number, label image, and final charges.
 * * @throws {Error} If the carrier is disabled, unsupported, or if the 
 * upstream carrier API returns a terminal error.
 * * @category Aggregators
 * @public
 */
export async function createShipment(request: ShipmentRequest): Promise<NormalizedShipment> {
  const carrier = request.carrier.toLowerCase();
  const enabledCarriers = getEnabledCarriers();

  /**
   * Guard: Ensure the carrier is explicitly enabled in the library config
   * to prevent unauthorized or misconfigured API attempts.
   */
  if (!enabledCarriers.includes(carrier)) {
    throw new Error(`Shipstack Configuration Error: Carrier '${carrier}' is not enabled.`);
  }

  switch (carrier) {
    case "usps":
      return handleUspsShipment(request);

    case "fedex":
      return handleFedexShipment(request);

    default:
      throw new Error(`Shipstack Support Error: Carrier '${carrier}' is not yet supported for shipments.`);
  }
}

/**
 * Internal handler for USPS Label v3 generation.
 * * Orchestrates the USPS-specific workflow including OAuth2 token 
 * negotiation via the client.init() method.
 * * @private
 */
async function handleUspsShipment(request: ShipmentRequest): Promise<NormalizedShipment> {
  const config = getUspsConfig();
  const client = createUspsLabelClient(config);
  
  // Negotiate OAuth2 Token and set Base URL
  await client.init();

  // Map agnostic request to USPS v3 Schema
  const uspsRequest = buildUspsLabelRequest(request);

  // Execute Label Generation
  const rawResponse = await client.createLabel(uspsRequest);
  
  // Standardize the response
  return convertUspsShipmentResponse(rawResponse);
}

/**
 * Internal handler for FedEx Ship v1 generation.
 * * Orchestrates the FedEx-specific workflow, ensuring the instance-specific 
 * SDK is authorized before the shipment payload is submitted.
 * * @private
 */
async function handleFedexShipment(request: ShipmentRequest): Promise<NormalizedShipment> {
  const config = getFedexConfig();
  const client = createFedexShipClient(config);
  
  // Authenticate and configure the internal FedexShipSdk
  await client.init();

  // Map agnostic request to FedEx v1 'Full_Schema_Shipment'
  const fedexRequest = buildFedexShipRequest(request);

  // Execute Shipment Creation and Label Retrieval
  const rawResponse = await client.createLabel(fedexRequest);

  // Flatten the response and map the service code to a human-readable name
  return normalizeFedexShipResponse(rawResponse, request.serviceCode);
}