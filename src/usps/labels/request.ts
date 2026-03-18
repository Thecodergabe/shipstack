import { ShipmentRequest } from "@/types/index";
import { LabelRequest } from "./generated/index";

/**
 * Transforms a generic internal ShipmentRequest into a USPS-specific LabelRequest.
 * * This builder performs critical data transformations required by the USPS v3 API:
 * 1. Name Parsing: Splits full names into First/Last name components.
 * 2. Weight Conversion: Splits total ounces into a Pounds + Ounces structure.
 * 3. Dimension Mapping: Maps agnostic package measurements to USPS fields.
 * * @param req - The normalized internal shipment request from the aggregator.
 * @returns {LabelRequest} A typed object ready for the USPS Labels v3 SDK.
 */
export function buildUspsLabelRequest(req: ShipmentRequest): LabelRequest {
  return {
    /** * Label Image Configuration
     * Standardizes on 4x6 thermal labels in PDF format for broad compatibility.
     */
    imageInfo: { 
      imageType: "PDF", 
      labelSize: "4X6"
    },

    /** * Recipient Address Mapping
     * Extracts the first word as firstName and the remainder as lastName.
     */
    toAddress: {
      firstName: req.toAddress.name.split(' ')[0],
      lastName: req.toAddress.name.split(' ').slice(1).join(' ') || 'Resident',
      streetAddress: req.toAddress.streetLines[0],
      secondaryAddress: req.toAddress.streetLines[1] || "",
      city: req.toAddress.city,
      state: req.toAddress.stateOrProvinceCode,
      ZIPCode: req.toAddress.postalCode,
    },

    /** * Sender Address Mapping
     * Extracts name components and maps standardized street/city fields.
     */
    fromAddress: {
      firstName: req.fromAddress.name.split(' ')[0],
      lastName: req.fromAddress.name.split(' ').slice(1).join(' ') || 'Sender',
      streetAddress: req.fromAddress.streetLines[0],
      secondaryAddress: req.fromAddress.streetLines[1] || "",
      city: req.fromAddress.city,
      state: req.fromAddress.stateOrProvinceCode,
      ZIPCode: req.fromAddress.postalCode,
    },

    /** * Package and Service Details
     * Converts generic weightOz into the Pounds/Ounces integer split required by USPS.
     */
    packageDescription: {
      /** Full pounds portion of the weight. */
      weight: Math.floor(req.package.weightOz / 16),
      /** Remaining ounces portion, rounded to the nearest integer. */
      ounces: Math.round(req.package.weightOz % 16), 
      /** The mailClass identifies the specific USPS service (e.g., USPS_GROUND_ADVANTAGE). */
      mailClass: req.serviceCode as any,
      length: req.package.lengthInches,
      width: req.package.widthInches,
      height: req.package.heightInches,
    }
  };
}