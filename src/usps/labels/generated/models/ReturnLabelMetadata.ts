/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomesticLabelAddress } from './DomesticLabelAddress';
import type { Links } from './Links';
export type ReturnLabelMetadata = {
    labelAddress?: DomesticLabelAddress;
    /**
     * The "420" 3-digit GS1 Application Identifier and the 5 or 9 digit Destination ZIP Code&#8482;
     */
    routingInformation?: string;
    /**
     * The human readable version of the package tracking number
     */
    trackingNumber?: string;
    /**
     * Pricing SKU
     */
    SKU?: string;
    /**
     * Amount of Postage Required, does not include insurance or other extra service fees.
     */
    postage?: number;
    /**
     * Extra services requested on the package.
     */
    extraServices?: Array<{
        /**
         * Name of the extra service.
         */
        name?: string;
        /**
         * SKU of the extra service.
         */
        SKU?: string;
        /**
         * The price for the extra service.
         */
        price?: number;
    }>;
    /**
     * The Service Type Code associated with the package. A list of Service Type Codes can be found at: [https://postalpro.usps.com/IMPB_Service_Type_Codes](https://postalpro.usps.com/IMPB_Service_Type_Codes)
     *
     */
    serviceTypeCode?: string;
    /**
     * Indicates the calculated zone used for pricing between the provided `originZIPCode` and `destinationZIPCode` for a given `mailClass`, `mailingDate`, `rateIndicator`, and `weight`.
     */
    zone?: string;
    /**
     * Weight Unit of Measurement
     * * lb - Pounds
     */
    weightUOM?: string;
    /**
     * The package weight, in weightUOM. Items must weigh 70 pounds (1120 ounces) or less.
     */
    weight?: number;
    /**
     * The dimensional weight of package, if greater than specified in weight, in ounces.
     */
    dimensionalWeight?: number;
    /**
     * Fees associated to the package.
     */
    fees?: Array<{
        /**
         * Name of the fee.
         */
        name?: string;
        /**
         * Pricing SKU
         */
        SKU?: string;
        /**
         * The price for the fee.
         */
        price?: number;
    }>;
    /**
     * Unique Label Broker ID that can be used as an alternative to the Label Broker QR Code to retrieve the label at a Post Office. Will only be provided when an imageType of LABEL_BROKER is requested.
     */
    labelBrokerID?: string;
    /**
     * Banner text printed on the label
     */
    bannerText?: string;
    /**
     * Retail Description Code associated with the label
     */
    retailDistributionCode?: string;
    links?: Links;
};

