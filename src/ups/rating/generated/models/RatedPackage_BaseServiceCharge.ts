/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Base Service Charge Container.  These charges would be returned only when subversion is greater than or equal to 1701
 */
export type RatedPackage_BaseServiceCharge = {
    /**
     * The IATA currency code associated with the base service charge costs for the shipment.
     */
    CurrencyCode: string;
    /**
     * The base value of the specific service for the shipment. This is equal to transportation charges - fuel surcharges.
     */
    MonetaryValue: string;
};

