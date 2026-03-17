/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Transportation Charges container.
 */
export type ShipmentCharges_TransportationCharges = {
    /**
     * Transportation charges currency code type. The currency code used in the Shipment request is returned.
     */
    CurrencyCode: string;
    /**
     * Transportation and surcharges value amount.  Valid values are from 0 to 99999999999999.99
     */
    MonetaryValue: string;
};

