/**
 * UPS Rate Response Converter
 * * Transforms complex, nested UPS Rating API responses (RATEResponseWrapper) 
 * into the standardized Shipstack 'NormalizedRate' format.
 */

import { NormalizedRate } from "@/types/index";
import { RATEResponseWrapper } from "@/ups/rating/generated/index";

/**
 * Converts a raw UPS RATEResponseWrapper into an array of NormalizedRates.
 * * This function handles:
 * 1. Normalizing the 'RatedShipment' object/array discrepancy.
 * 2. Prioritizing 'NegotiatedRates' (account-based) over 'TotalCharges' (published).
 * 3. Extracting delivery transit times if available in the response.
 * * @param {RATEResponseWrapper} raw - The JSON payload from the UPS Rating API.
 * @returns {NormalizedRate[]} A collection of standardized shipping options.
 * @category Converters
 * @public
 */
export function convertUpsRateResponse(raw: RATEResponseWrapper): NormalizedRate[] {
  const ratedShipments = raw?.RateResponse?.RatedShipment;
  
  if (!ratedShipments) {
    return [];
  }

  /**
   * UPS API quirk: If only one service is returned, it may return an object 
   * instead of an array. We normalize this to an array for consistent mapping.
   */
  const shipments = Array.isArray(ratedShipments) ? ratedShipments : [ratedShipments];

  return shipments.map((s: any): NormalizedRate => {
    /**
     * Rate Selection Logic:
     * UPS provides 'NegotiatedRateCharges' if a valid ShipperNumber was 
     * provided and the account has custom pricing. We fall back to 
     * 'TotalCharges' (Standard/Published) if negotiated rates are missing.
     */
    const charge = s.NegotiatedRateCharges?.TotalCharge || s.TotalCharges;

    return {
      carrier: "ups",
      
      /**
       * UPS Service Codes (e.g., '03' for Ground, '01' for Next Day Air).
       */
      serviceCode: s.Service?.Code ?? "UNKNOWN",
      
      /**
       * UPS Service Description (e.g., 'UPS Ground').
       */
      serviceName: s.Service?.Description || mapUpsServiceCode(s.Service?.Code),

      /**
       * Transit Time Extraction:
       * UPS returns transit days as 'BusinessDaysInTransit'.
       */
      deliveryDays: s.GuaranteedDelivery?.BusinessDaysInTransit 
        ? parseInt(s.GuaranteedDelivery.BusinessDaysInTransit, 10) 
        : undefined,

      /**
       * Monetary Mapping:
       * Maps the carrier-specific currency and value to the Shipstack Cost object.
       */
      cost: {
        amount: parseFloat(charge?.MonetaryValue ?? "0"),
        currency: charge?.CurrencyCode ?? "USD"
      },

      /**
       * Persists the raw carrier segment for this specific shipment 
       * to allow for advanced debugging or secondary parsing.
       */
      raw: s
    };
  });
}

/**
 * Helper to provide human-readable names for common UPS service codes 
 * if the API description field is omitted.
 * @private
 */
function mapUpsServiceCode(code?: string): string {
  const codes: Record<string, string> = {
    "01": "UPS Next Day Air",
    "02": "UPS 2nd Day Air",
    "03": "UPS Ground",
    "11": "UPS Standard",
    "12": "UPS 3 Day Select",
    "13": "UPS Next Day Air Saver",
    "14": "UPS Next Day Air Early",
    "59": "UPS 2nd Day Air A.M.",
    "65": "UPS Saver"
  };
  return code ? codes[code] || `UPS Service (${code})` : "UPS Shipping";
}