import { NormalizedShipment } from "@/types/index";

/**
 * Converts a raw USPS v3 Label response into a standardized Shipstack NormalizedShipment.
 * * USPS v3 returns a complex structure where metadata and images are often separated.
 * This converter extracts the tracking identifier, service details, and the 
 * Base64-encoded label image into a flat, carrier-agnostic format.
 *
 * @param raw - The raw response from the USPS Labels v3 API (LabelMetadata or MultiPart).
 * @returns A NormalizedShipment object containing tracking and label data.
 */
export function convertUspsShipmentResponse(raw: any): NormalizedShipment {
  /**
   * USPS v3 labels can return tracking numbers in the root or within 
   * a metadata object depending on the specific endpoint (Outbound vs Return).
   */
  const trackingNumber = raw.trackingNumber || raw.labelMetadata?.trackingNumber || "";

  /**
   * MailClass mapping: USPS uses strings like 'Priority Mail Express' or 'Ground Advantage'.
   */
  const mailClass = raw.packageDescription?.mailClass || raw.labelMetadata?.packageDescription?.mailClass;

  return {
    carrier: "usps",
    trackingNumber: trackingNumber,
    serviceCode: mailClass || "USPS_SERVICE",
    serviceName: mailClass ? `USPS ${mailClass}` : "USPS Shipping",
    label: {
      /**
       * In 'Library Mode', we assume the user has requested a standard PDF/ZPL.
       * USPS label images are provided as Base64 strings in the 'labelImage' field.
       */
      format: raw.imageInfo?.imageType || "PDF",
      base64: raw.labelImage || "", 
    },
    /**
     * Financial data is only present if the user has permission to view 
     * postage prices (e.g., non-suppressed postage).
     */
    charges: raw.totalBasePrice ? {
      amount: Number(raw.totalBasePrice),
      currency: "USD"
    } : undefined,
    /**
     * Storing the raw response allows library consumers to access 
     * USPS-specific fields like 'routingInformation' or 'postageHash'.
     */
    raw: raw 
  };
}