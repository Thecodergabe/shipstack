/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CN22Content_CN22ContentWeight } from './CN22Content_CN22ContentWeight';
import type { CN22Content_CN22DDSReferenceNumber } from './CN22Content_CN22DDSReferenceNumber';
/**
 * Container for CN22 content.  Required if the CN22 form container is present.
 * Note: The maximum number of goods printed on the CN22 form when a combined MI package and CN22 form label is requested is 30.
 */
export type CN22Form_CN22Content = {
    /**
     * Total number of items associated with this content.  Required if the CN22 form container is present.
     */
    CN22ContentQuantity: string;
    /**
     * Detailed description of the content.
     *
     * If the combined MI package and CN22 label is requested, only the first 30 characters will appear on the combined label.  Required if the CN22 form container is present.
     */
    CN22ContentDescription: string;
    CN22ContentWeight: CN22Content_CN22ContentWeight;
    /**
     * Total value of the items associated with this content.  Required if the CN22 form container is present.
     */
    CN22ContentTotalValue: string;
    /**
     * Currently only USD is supported.  Required if the CN22 form container is present.
     */
    CN22ContentCurrencyCode: string;
    /**
     * Country or Territory of Origin from where the CN22 contents originated.
     */
    CN22ContentCountryOfOrigin?: string;
    /**
     * The tariff number associated with the CN22 contents.
     */
    CN22ContentTariffNumber?: string;
    DDSReferenceNumber?: CN22Content_CN22DDSReferenceNumber;
};

