import { NormalizedRate } from "../../types/index";
import type { RatcResponseVO } from "../../fedex/rates/generated/models/RatcResponseVO";

/**
 * Normalizes the FedEx RatcResponseVO into the Shipstack NormalizedRate format.
 * * Uses OperationalDetail.deliveryDate -> estimatedArrival
 * * Uses OperationalDetail.transitTime -> deliveryDays (via helper)
 */
export function convertFedexRateResponse(response: RatcResponseVO): NormalizedRate[] {
  const output: NormalizedRate[] = [];
  const rateQuotes = response?.output?.rateReplyDetails || [];

  for (const quote of rateQuotes) {
    const shipmentDetails = quote.ratedShipmentDetails?.[0];
    const rateDetail = shipmentDetails?.shipmentRateDetail;
    const opDetail = quote.operationalDetail;

    // Casting to any to access totalNetCharge which exists in the JSON 
    // but might be missing from your ShipmentRateDetail interface snippet.
    const amount = (shipmentDetails as any)?.totalNetCharge ?? 0;

    output.push({
      carrier: "fedex",
      serviceName: quote.serviceType?.replace(/_/g, " ") || "FedEx Service",
      serviceCode: quote.serviceType || "UNKNOWN",
      cost: {
        amount: typeof amount === 'number' ? amount : parseFloat(amount || "0"),
        currency: rateDetail?.currency || "USD"
      },
      // Matches NormalizedRate.estimatedArrival
      estimatedArrival: opDetail?.deliveryDate || undefined,
      // Matches NormalizedRate.deliveryDays (FedEx returns "THREE_DAYS", we need a number)
      deliveryDays: opDetail?.transitTime ? parseFedexTransitTime(opDetail.transitTime) : undefined,
      raw: quote
    });
  }

  return output;
}

/**
 * Helper to convert FedEx string-based transit times into numbers.
 * FedEx returns values like "ONE_DAY", "TWO_DAYS", etc.
 */
function parseFedexTransitTime(timeStr: string): number | undefined {
  const map: Record<string, number> = {
    'ONE_DAY': 1,
    'TWO_DAYS': 2,
    'THREE_DAYS': 3,
    'FOUR_DAYS': 4,
    'FIVE_DAYS': 5,
    'SIX_DAYS': 6,
    'SEVEN_DAYS': 7,
    'EIGHT_DAYS': 8,
    'NINE_DAYS': 9,
    'TEN_DAYS': 10
  };
  return map[timeStr.toUpperCase()] || undefined;
}