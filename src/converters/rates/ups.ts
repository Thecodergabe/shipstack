import { NormalizedRate } from "../../types/index";

export function convertUpsRateResponse(raw: any): NormalizedRate[] {
  // UPS returns multiple services if RequestOption was 'Shop' 
  // or a single service if 'Rate' was used.
  const ratedShipments = raw?.RateResponse?.RatedShipment;
  
  if (!ratedShipments) return [];

  // UPS can return a single object or an array; normalize to array
  const shipments = Array.isArray(ratedShipments) ? ratedShipments : [ratedShipments];

  return shipments.map((s: any): NormalizedRate => {
    // Determine cost: use NegotiatedRates if available, otherwise TotalCharges
    const charge = s.NegotiatedRateCharges?.TotalCharge || s.TotalCharges;

    return {
      carrier: "ups",
      serviceCode: s.Service?.Code ?? "UNKNOWN",
      serviceName: s.Service?.Description ?? "UPS Shipping",
      deliveryDays: s.GuaranteedDelivery?.BusinessDaysInTransit 
        ? parseInt(s.GuaranteedDelivery.BusinessDaysInTransit) 
        : undefined,
      cost: {
        amount: parseFloat(charge?.MonetaryValue ?? "0"),
        currency: charge?.CurrencyCode ?? "USD"
      },
      raw: s
    };
  });
}