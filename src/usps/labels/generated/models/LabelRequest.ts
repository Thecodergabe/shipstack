/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomesticCustomsForm } from './DomesticCustomsForm';
import type { DomesticLabelAddress } from './DomesticLabelAddress';
import type { DomesticLabelSenderAddress } from './DomesticLabelSenderAddress';
import type { DomesticLabelToAddress } from './DomesticLabelToAddress';
import type { DomesticPackageDescription } from './DomesticPackageDescription';
import type { DomesticPackageDescriptionWithoutRateIndicator } from './DomesticPackageDescriptionWithoutRateIndicator';
import type { ImageInfo } from './ImageInfo';
/**
 * Destination address of the recipient. Used in pricing as the destination ZIP Code&#8482;.
 */
export type LabelRequest = {
    imageInfo?: (ImageInfo & Record<string, any>);
    toAddress: DomesticLabelToAddress;
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
    packageDescription: (DomesticPackageDescription | DomesticPackageDescriptionWithoutRateIndicator);
    customsForm?: DomesticCustomsForm;
};

