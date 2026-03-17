/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Shipper Paid Declared Value Charge at Package level.   Valid for UPS World Wide Express Freight shipments.
 */
export type PackageServiceOptions_ShipperDeclaredValue = {
    /**
     * The IATA currency code associated with the amount for the package.  UPS does not support all international currency codes. Refer to the appendix for a list of valid codes.
     */
    CurrencyCode: string;
    /**
     * The monetary value for the amount associated with the package.
     */
    MonetaryValue: string;
};

