// src/converters/rates/fedex.ts
import { NormalizedRate } from "../../types/index";

export function convertFedexRateResponse(raw: any): NormalizedRate[] {
  const details = raw?.output?.rateReplyDetails;
  if (!Array.isArray(details)) return [];

  return details.map((detail: any) => {
    const rated = detail?.ratedShipmentDetails?.[0];

    const amount =
      rated?.totalNetCharge?.amount ??
      rated?.totalBaseCharge?.amount ??
      0;

    const currency =
      rated?.totalNetCharge?.currency ??
      rated?.totalBaseCharge?.currency ??
      "USD";

    // Delivery estimate can come from commit or transitTime
    const deliveryDays =
      detail?.commit?.commitDays ??
      detail?.transitTime ??
      undefined;

    return {
      carrier: "fedex",
      serviceCode: detail?.serviceType ?? "",
      serviceName: detail?.serviceName ?? "",
      deliveryDays: typeof deliveryDays === "number" ? deliveryDays : undefined,
      cost: {
        amount: Number(amount),
        currency
      },
      raw: detail
    };
  });
}