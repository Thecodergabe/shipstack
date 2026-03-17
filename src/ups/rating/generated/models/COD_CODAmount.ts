/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * CODAmount Container.
 */
export type COD_CODAmount = {
    /**
     * Currency Code.  Required if a value for the COD amount exists in the MonetaryValue tag. Must match one of the IATA currency codes. UPS does not support all international currency codes. Refer to Currency Codes in the Appendix for a list of valid codes.
     */
    CurrencyCode: string;
    /**
     * The COD value for the package.  Required if COD option is present. The maximum amount allowed is 50,000 USD.
     */
    MonetaryValue: string;
};

