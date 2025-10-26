/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerImageUsage } from './CustomerImageUsage';
import type { ShippingDocumentFormat } from './ShippingDocumentFormat';
/**
 * Use this object to specify details to generate the OP-900 document for hazardous material packages.
 */
export type Op900Detail = {
    /**
     * Specify the use and identification of supplied images to be used on document.
     */
    customerImageUsages?: Array<CustomerImageUsage>;
    /**
     * Indicates the name to be printed as signature on the document instead of (or in addition to) a signature image.<br>Example: John Hill
     */
    signatureName?: string;
    documentFormat?: ShippingDocumentFormat;
};

