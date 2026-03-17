// src/converters/tracking/fedex.ts
import { NormalizedTracking, NormalizedTrackingEvent } from "../../types/index";

export function convertFedexTrackingResponse(raw: any): NormalizedTracking {
  const result =
    raw?.output?.completeTrackResults?.[0]?.trackResults?.[0];

  if (!result) {
    return {
      carrier: "fedex",
      trackingNumber: "",
      status: "",
      events: [],
      raw
    };
  }

  const trackingNumber = result.trackingNumber ?? "";

  const status =
    result.latestStatusDetail?.statusByLocale ??
    result.latestStatusDetail?.description ??
    "";

  const estimatedDelivery =
    result.latestStatusDetail?.derivedEstimatedDeliveryTimestamp ??
    result.estimatedDeliveryTimestamp ??
    undefined;

  const events: NormalizedTrackingEvent[] =
    result.scanEvents?.map((e: any) => ({
      description: e.eventDescription ?? "",
      dateTime: e.date ?? "",
      city: e.arrivalLocation?.city ?? undefined,
      stateOrProvinceCode: e.arrivalLocation?.stateOrProvinceCode ?? undefined,
      postalCode: e.arrivalLocation?.postalCode ?? undefined,
      countryCode: e.arrivalLocation?.countryCode ?? undefined
    })) ?? [];

  return {
    carrier: "fedex",
    trackingNumber,
    status,
    estimatedDelivery,
    events,
    raw
  };
}