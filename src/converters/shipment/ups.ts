/**
 * UPS Shipping Response Converter
 * * Transforms the raw 'SHIPResponseWrapper' from the UPS v2409 API into the
 * library-standard 'NormalizedShipment' format. This ensures a consistent
 * interface for consumers regardless of the carrier used.
 */

import { SHIPResponseWrapper } from "@/ups/shipping/generated/index";
import { NormalizedShipment } from "@/types/index";

/**
 * Normalizes a UPS shipment response.
 * * This function extracts the tracking number, label image (Base64), and
 * financial charges from the deeply nested UPS response structure.
 * * @param {SHIPResponseWrapper} raw - The raw response from the UPS Shipping Service.
 * @returns {NormalizedShipment} The standardized shipment object for the Shipstack library.
 * @throws {Error} If the response structure is missing critical shipment results.
 */
export function normalizeUpsShipResponse(raw: SHIPResponseWrapper): NormalizedShipment {
  const shipmentResults = raw.ShipmentResponse?.ShipmentResults;

  if (!shipmentResults) {
    throw new Error("Shipstack Error: UPS Response did not contain shipment results.");
  }

  /**
   * UPS provides labels per package. Since the current implementation
   * handles a single package request, we extract the first package's label.
   */
  const packageResult = shipmentResults.PackageResults?.[0];
  const labelImage = packageResult?.ShippingLabel?.GraphicImage;

  if (!labelImage) {
    throw new Error("Shipstack Error: UPS Response did not contain a valid shipping label.");
  }

  return {
    carrier: "ups",
    trackingNumber: shipmentResults.ShipmentIdentificationNumber || "PENDING",
    serviceCode: "UPS_SERVICE",
    serviceName: "UPS® Shipping Service",
    
    label: {
      format: "PNG",
      base64: labelImage,
    },

    /**
     * Extracts financial details. 
     * UPS returns TotalCharges which includes transportation and taxes.
     */
    charges: shipmentResults.ShipmentCharges?.TotalCharges ? {
      amount: parseFloat(shipmentResults.ShipmentCharges.TotalCharges.MonetaryValue),
      currency: shipmentResults.ShipmentCharges.TotalCharges.CurrencyCode,
    } : undefined,

    /**
     * Attach the original raw response for auditing or advanced metadata retrieval.
     */
    raw: raw
  };
}