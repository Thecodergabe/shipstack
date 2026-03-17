import { NormalizedRate } from "../../types/index";
import type { TotalRatesQueryResult } from "../../usps/rates/generated/models/TotalRatesQueryResult";

/**
 * Standardizes a USPS v3 Domestic Prices response into a Shipstack NormalizedRate array.
 * * Logic Overview:
 * * USPS v3 returns a hierarchical structure: `rateOptions` (service groups) containing 
 * a `rates` array (specific service details and pricing).
 * * This converter flattens that hierarchy, prioritizing `totalPrice` as the 
 * final checkout cost including surcharges.
 *
 * @param raw - The raw response from the USPS v3 Domestic Prices API.
 * @returns A collection of NormalizedRate objects for comparison across carriers.
 */
export function convertUspsRateResponse(raw: TotalRatesQueryResult): NormalizedRate[] {
  const normalizedRates: NormalizedRate[] = [];

  // Iterate through high-level rate options (e.g., Service Tiers)
  const options = raw.rateOptions || [];

  for (const option of options) {
    /** * Each option contains a 'rates' array. In v3, these usually 
     * represent the line-item details for the chosen service.
     */
    const rateDetailsList = option.rates || [];

    for (const detail of rateDetailsList) {
      normalizedRates.push({
        carrier: "usps",

        /** * Service identifier used for subsequent label generation (e.g., 'PRIORITY_MAIL').
         */
        serviceCode: detail.mailClass || "UNKNOWN_USPS_SERVICE",

        /** * Human-readable service name. Falls back to description or formatted mail class.
         */
        serviceName: detail.productName || detail.description || `USPS ${detail.mailClass}`,

        /** * USPS v3 does not always return an explicit 'days' integer.
         * For NPM package consistency, we map common processing categories to estimates.
         */
        deliveryDays: detail.processingCategory === 'MACHINABLE' ? 3 : undefined,

        /** * Pricing Logic:
         * * We prioritize 'totalPrice' from the parent option as it includes 
         * applicable surcharges and fees required for checkout.
         */
        cost: {
          amount: Number(option.totalPrice || option.totalBasePrice || detail.price || 0),
          currency: "USD"
        },

        /** * Provides the underlying carrier detail for edge-case attributes 
         * like 'zone' or specific 'fees' arrays.
         */
        raw: { ...detail, ...option } 
      });
    }
  }

  return normalizedRates;
}