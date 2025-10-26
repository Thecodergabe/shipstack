/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerImageUsage } from './CustomerImageUsage';
import type { ShippingDocumentFormat } from './ShippingDocumentFormat';
/**
 * The instructions indicating how to print the Commercial Invoice( e.g. image type) Specifies characteristics of a shipping document to be produced.
 */
export type CommercialInvoiceDetail = {
    /**
     * Specifies the usage and identification of customer supplied images to be used on this document.
     */
    customerImageUsages?: Array<CustomerImageUsage>;
    documentFormat?: ShippingDocumentFormat;
};

