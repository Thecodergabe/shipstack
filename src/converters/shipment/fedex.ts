// src/converters/shipment/fedex.ts
import { NormalizedShipment } from "../../types/index";

export function convertFedexShipmentResponse(raw: any): NormalizedShipment {
  const shipment = raw?.output?.transactionShipments?.[0];

  if (!shipment) {
    return {
      carrier: "fedex",
      trackingNumber: "",
      serviceCode: "",
      serviceName: "",
      label: {
        format: "PDF",
        base64: ""
      },
      raw
    };
  }

  const trackingNumber =
    shipment.masterTrackingNumber?.trackingNumber ?? "";

  const serviceCode = shipment.serviceType ?? "";
  const serviceName = shipment.serviceName ?? "";

  const doc = shipment.packageDocuments?.[0];

  const labelFormat =
    doc?.contentType?.toUpperCase() ??
    doc?.type?.toUpperCase() ??
    "PDF";

  const labelBase64 = doc?.encodedLabel ?? "";

  const charges = shipment?.shipmentCharges?.totalNetCharge;

  return {
    carrier: "fedex",
    trackingNumber,
    serviceCode,
    serviceName,
    label: {
      format: labelFormat as "PDF" | "PNG" | "ZPL" | "GIF",
      base64: labelBase64
    },
    charges: charges
      ? {
          amount: Number(charges.amount ?? 0),
          currency: charges.currency ?? "USD"
        }
      : undefined,
    raw
  };
}