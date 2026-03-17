/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Base Service Charge container.
 * Transportation charge = BaseServiceCharge + Fuel charge  Returned only if Subversion >=1701.
 */
export type ShipmentCharges_BaseServiceCharge = {
    /**
     * BaseServiceCharge currency code type. The currency code used in the Shipment request is returned.
     */
    CurrencyCode: string;
    /**
     * Base Service Charge value amount.  Valid values are from 0 to 99999999999999.99
     */
    MonetaryValue: string;
};

