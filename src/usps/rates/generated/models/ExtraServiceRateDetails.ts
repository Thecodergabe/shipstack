/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The extra service rate details that match the search criteria.
 */
export type ExtraServiceRateDetails = Array<{
    extraService?: string;
    /**
     * Name of the extra service.
     */
    name?: string;
    /**
     * The stock keeping unit for the designated rate.
     */
    SKU?: string;
    /**
     * The type of price applied (Retail, Commercial, Contract, NSA (deprecated)).
     */
    priceType?: 'RETAIL' | 'COMMERCIAL' | 'CONTRACT' | 'NSA';
    /**
     * The postage rate.
     */
    price?: number;
    warnings?: Array<string>;
}>;
