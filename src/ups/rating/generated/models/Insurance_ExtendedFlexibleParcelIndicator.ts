/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for Extended Flexible Parcel Indicator  Valid for UPS World Wide Express Freight shipments.
 */
export type Insurance_ExtendedFlexibleParcelIndicator = {
    /**
     * The IATA currency code associated with the amount for the package.  UPS does not support all international currency codes. Refer to the appendix for a list of valid codes. Valid for UPS World Wide Express Freight shipments.
     */
    CurrencyCode: string;
    /**
     * The monetary value associated with the package.  Valid for UPS World Wide Express Freight shipments.
     */
    MonetaryValue: string;
};

