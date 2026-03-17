/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PackageResults_ItemizedCharges = {
    /**
     * Identification code for itemized charge.
     */
    Code: string;
    /**
     * Description of Itemized Charge that had been charged.
     */
    Description?: string;
    /**
     * The IATA currency code associated with the Itemized Charge costs for the shipment.
     */
    CurrencyCode: string;
    /**
     * Itemized Charges value amount.
     */
    MonetaryValue: string;
    /**
     * The sub-type of ItemizedCharges type.
     */
    SubType?: string;
};

