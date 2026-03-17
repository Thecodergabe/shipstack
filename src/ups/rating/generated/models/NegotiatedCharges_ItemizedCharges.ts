/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type NegotiatedCharges_ItemizedCharges = {
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
     * The value for Itemized Charge costs associated with the shipment.
     */
    MonetaryValue: string;
    /**
     * The sub-type of Itemized Charge type.
     */
    SubType?: string;
};

