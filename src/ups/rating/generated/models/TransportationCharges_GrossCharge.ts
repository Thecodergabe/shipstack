/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Gross Transportation Charges Container
 */
export type TransportationCharges_GrossCharge = {
    /**
     * The IATA currency code associated with the transportation costs for the shipment.
     */
    CurrencyCode: string;
    /**
     * Total charges Monetary value. Valid values are from 0 to 9999999999999999.99
     */
    MonetaryValue: string;
};

