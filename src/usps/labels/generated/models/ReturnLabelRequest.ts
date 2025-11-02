/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomesticLabelAddress } from './DomesticLabelAddress';
import type { DomesticLabelSenderAddress } from './DomesticLabelSenderAddress';
import type { DomesticReturnsCustomsForm } from './DomesticReturnsCustomsForm';
import type { ImageInfo } from './ImageInfo';
import type { ReturnsPackageDescription } from './ReturnsPackageDescription';
import type { ReturnsPackageDescriptionWithoutRateIndicator } from './ReturnsPackageDescriptionWithoutRateIndicator';
/**
 * Domestic Package Request
 */
export type ReturnLabelRequest = {
    imageInfo?: (ImageInfo & Record<string, any>);
    /**
     * Uses for:
     *
     * The address where the package is being mailed to. The destination ZIP Code is used for calculating pricing.
     *
     * The First and Last Name or Firm Name are always required.
     *
     * For return labels, the `toAddress` ZIP Plus 4 is looked up by the API, unless the ignoreBadAddress is set to true or the address cannot be found. If ignoreBadAddress flag is true then ZIP Plus 4 is required.
     *
     */
    toAddress: DomesticLabelAddress;
    /**
     * Uses for:
     *
     * The address of the business where the package is being mailed from. The origin ZIP Code is used for calculating pricing.
     *
     * The First and Last Name or Firm Name are always required.
     *
     * For return labels, the `toAddress` ZIP Plus 4 is looked up by the API, unless the ignoreBadAddress is set to true or the address cannot be found. If ignoreBadAddress flag is true then ZIP Plus 4 is required.
     *
     */
    fromAddress: DomesticLabelAddress;
    senderAddress?: DomesticLabelSenderAddress;
    /**
     * Uses for:
     *
     * The address of the business where the package should be returned to if it is deemed undeliverable or returned to sender. This address will be printed in the return address block of the label.
     *
     * The First and Last Name or Firm Name are always required.
     *
     * For return labels, the `toAddress` ZIP Plus 4 is looked up by the API, unless the ignoreBadAddress is set to true or the address cannot be found. If ignoreBadAddress flag is true then ZIP Plus 4 is required.
     *
     */
    returnAddress?: DomesticLabelAddress;
    packageDescription: (ReturnsPackageDescription | ReturnsPackageDescriptionWithoutRateIndicator);
    customsForm?: DomesticReturnsCustomsForm;
};

