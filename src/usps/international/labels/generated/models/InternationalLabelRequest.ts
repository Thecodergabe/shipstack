/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomesticLabelAddress } from './DomesticLabelAddress';
import type { DomesticLabelSenderAddress } from './DomesticLabelSenderAddress';
import type { ImageInfo } from './ImageInfo';
import type { InternationalCustomsForm } from './InternationalCustomsForm';
import type { InternationalLabelAddress } from './InternationalLabelAddress';
import type { InternationalPackageDescription } from './InternationalPackageDescription';
/**
 * International Shipment Request
 */
export type InternationalLabelRequest = {
    imageInfo?: ImageInfo;
    toAddress: InternationalLabelAddress;
    fromAddress: DomesticLabelAddress;
    senderAddress?: DomesticLabelSenderAddress;
    packageDescription: InternationalPackageDescription;
    customsForm: InternationalCustomsForm;
};

