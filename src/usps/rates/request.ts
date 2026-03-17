import type { TotalRatesQuery } from "./generated/models/TotalRatesQuery";
import { ExtraService } from "./generated/models/ExtraService";
import { priceType } from "./generated/models/priceType";
import { mailClassOutboundOnly } from "./generated/models/mailClassOutboundOnly";
import { RateRequest as InternalRateRequest } from "../../types/index";

/**
 * Transforms a generic internal RateRequest into a USPS-specific TotalRatesQuery.
 * This builder handles unit conversions (ounces to pounds) and maps generic 
 * shipping properties to USPS Domestic Prices v10 schema requirements.
 * * @param req - The normalized internal rate request object.
 * @returns A TotalRatesQuery object compatible with the USPS v3 generated SDK.
 */
export function buildUspsRateRequest(req: InternalRateRequest): TotalRatesQuery {
  return {
    /** Origin 5-digit ZIP Code */
    originZIPCode: req.originZip,

    /** Destination 5-digit ZIP Code */
    destinationZIPCode: req.destZip,

    /** * USPS API expects weight in decimal pounds.
     * InternalRequest uses Ounces.
     */
    weight: req.weightOz / 16,

    /** Dimensional length in inches */
    length: req.lengthInches,

    /** Dimensional width in inches */
    width: req.widthInches,

    /** Dimensional height in inches */
    height: req.heightInches,

    /** * Defaulting to RETAIL pricing. 
     * Future iterations may derive this from the ShippingConfig environment.
     */
    priceType: priceType.RETAIL,

    /** * Array of requested extra services. 
     * 920 maps to USPS Tracking.
     */
    extraServices: [ExtraService._920],

    /** Flag for irregular/non-machinable packages */
    hasNonstandardCharacteristics: req.nonStandard || false,

    /** * Mapping generic mail class to USPS-specific outbound mail classes.
     * Uses type assertion to bridge InternalRequest string to USPS Enum.
     */
    mailClass: (req.mailClass as any) as mailClassOutboundOnly || undefined
  };
}