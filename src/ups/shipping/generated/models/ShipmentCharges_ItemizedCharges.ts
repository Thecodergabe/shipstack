/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ShipmentCharges_ItemizedCharges = {
    /**
     * Identification code for itemized charge.
     */
    Code: string;
    /**
     * Description of Itemized Charge that had been charged.
     */
    Description?: string;
    /**
     * Itemized Charges currency code type. The currency code used in the Shipment request is returned.
     */
    CurrencyCode: string;
    /**
     * Itemized Charges value amount.  Valid values are from 0 to 99999999999999.99
     */
    MonetaryValue: string;
    /**
     * The sub-type of ItemizedCharges type.
     */
    SubType?: string;
};

