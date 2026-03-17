/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Shipment charges info. Shipment charges are only guaranteed to be returned for shipments whose origin country or territory is US or Puerto Rico.
 */
export type PackageResults_ServiceOptionsCharges = {
    /**
     * Package accessorial charges currency code type. The currency code used in the Shipment request is returned.
     */
    CurrencyCode: string;
    /**
     * Package accessorial charges value amount.
     *
     * Valid values are from 0 to 99999999999999.99
     */
    MonetaryValue: string;
};

