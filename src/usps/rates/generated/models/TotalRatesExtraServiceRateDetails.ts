/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TotalRatesExtraServiceRateDetails = {
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
    priceType?: TotalRatesExtraServiceRateDetails.priceType;
    /**
     * The postage rate.
     */
    price?: number;
    warnings?: Array<{
        warningCode?: string;
        warningDescription?: string;
    }>;
};
export namespace TotalRatesExtraServiceRateDetails {
    /**
     * The type of price applied (Retail, Commercial, Contract, NSA (deprecated)).
     */
    export enum priceType {
        RETAIL = 'RETAIL',
        COMMERCIAL = 'COMMERCIAL',
        CONTRACT = 'CONTRACT',
        NSA = 'NSA',
    }
}

