/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Declared Value Container.
 */
export type PackageServiceOptions_DeclaredValue = {
    /**
     * The IATA currency code associated with the declared value amount for the package.  Required if a value for the package declared value amount exists in the MonetaryValue tag. Must match one of the IATA currency codes. Length is not validated. UPS does not support all international currency codes. Refer to Currency Codes in the Appendix for a list of valid codes.
     */
    CurrencyCode: string;
    /**
     * The monetary value for the declared value amount associated with the package.  Max value of 5,000 USD for Local and 50,000 USD for Remote. Absolute maximum value is 21474836.47
     */
    MonetaryValue: string;
};

