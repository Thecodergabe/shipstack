/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Net Charges container. It indicates the shipment level net Ground Freight Pricing transportation charges.
 */
export type TransportationCharges_NetCharge = {
    /**
     * Net Charge currency code.
     */
    CurrencyCode: string;
    /**
     * Net charges monetary value.  Valid values are from 0 to 9999999999999999.99
     */
    MonetaryValue: string;
};

