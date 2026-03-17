import { ShipmentRequest } from "../../types/index";
import { LabelRequest } from "./generated/index";

/**
 * Transforms a generic internal ShipmentRequest into a USPS-specific LabelRequest.
 * * This builder performs several critical mappings:
 * 1. Name Parsing: Splits full names into First/Last name components required by USPS.
 * 2. Unit Conversion: Converts total ounces into a Pounds/Ounces split for the package description.
 * 3. Standardization: Ensures image types and label sizes conform to USPS v3 uppercase requirements.
 * * @param req - The normalized internal shipment request.
 * @returns A LabelRequest object formatted for the USPS v3 Labels API.
 */
export function buildUspsLabelRequest(req: ShipmentRequest): LabelRequest {
  return {
    /** * Label Image Configuration
     * Defaulting to standard 4X6 thermal dimensions and PDF format.
     */
    imageInfo: { 
      imageType: "PDF", 
      labelSize: "4X6"
    },

    /** * Recipient Address Mapping
     * USPS requires separated name fields. Fallback 'Resident' used if lastName is missing.
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
     * Fallback 'Sender' used if lastName is missing.
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
     * Converts generic weight (oz) into the specific pounds + ounces format required by USPS.
     */
    packageDescription: {
      /** Total pounds (rounded down) */
      weight: Math.floor(req.package.weightOz / 16),
      /** Remaining ounces (rounded to nearest whole number) */
      ounces: Math.round(req.package.weightOz % 16), 
      /** Casts internal service code to the specific USPS mail class identifier */
      mailClass: req.serviceCode as any,
      length: req.package.lengthInches,
      width: req.package.widthInches,
      height: req.package.heightInches,
    }
  };
}