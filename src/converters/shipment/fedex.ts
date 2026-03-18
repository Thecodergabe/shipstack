import { NormalizedShipment } from "@/types/shipment";

/**
 * Normalizes a raw FedEx Shipment creation response.
 * * Digs into the 'transactionShipments' array to extract the master 
 * tracking number and the Base64 encoded label image.
 * * @param raw - The raw response from the FedEx Ship SDK.
 * @param serviceCode - The service code used for this shipment.
 * @returns {NormalizedShipment} A clean, actionable shipment object.
 */
export function normalizeFedexShipResponse(raw: any, serviceCode: string): NormalizedShipment {
  const transaction = raw?.output?.transactionShipments?.[0];
  const piece = transaction?.pieceResponses?.[0];
  const document = piece?.packageDocuments?.[0];

  if (!transaction || !document) {
    throw new Error("FedEx response did not contain shipment or label data.");
  }

  return {
    carrier: "fedex",
    trackingNumber: transaction.masterTrackingNumber,
    serviceCode: serviceCode,
    serviceName: serviceCode.replace(/_/g, " "), // Simple fallback
    label: {
      format: (document.contentType || "PDF") as "PDF" | "PNG" | "ZPL",
      base64: document.encodedLabel || "",
    },
    charges: {
      amount: transaction.shipmentAdvisoryDetails?.netEstimatedReceivableAmount || 0,
      currency: "USD",
    },
    raw
  };
}