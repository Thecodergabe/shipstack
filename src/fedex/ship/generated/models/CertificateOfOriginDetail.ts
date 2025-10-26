/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerImageUsage } from './CustomerImageUsage';
import type { ShippingDocumentFormat } from './ShippingDocumentFormat';
/**
 * The instructions indicating how to print the Certificate of Origin ( e.g. whether or not to include the instructions, image type, etc ...)
 */
export type CertificateOfOriginDetail = {
    /**
     * Specifies the usage and identification of customer supplied images to be used on this document.
     */
    customerImageUsages?: Array<CustomerImageUsage>;
    documentFormat?: ShippingDocumentFormat;
};

