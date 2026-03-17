/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Customer classification container. Valid if ShipFrom country or territory  is "US"
 */
export type RateRequest_CustomerClassification = {
    /**
     * Customer classification code.  Valid values:00 -  Rates Associated with Shipper Number01 -  Daily Rates04 -  Retail Rates05 - Regional Rates06 - General List Rates53 -  Standard List RatesLength is not validated.If customer classification code is not a valid value please refer to Rate Types Table on page 11.
     */
    Code: string;
    /**
     * Customer classification description of the code above.  Ignored if provided in the Request. Length is not validated.
     */
    Description?: string;
};

