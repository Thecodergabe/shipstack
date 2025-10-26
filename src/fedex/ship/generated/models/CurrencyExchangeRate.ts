/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies the currency exchange performed on financial amounts on this rate.
 */
export type CurrencyExchangeRate = {
    /**
     * Multiplier used to convert from Currency units to into Currency units.<br>Example: 25.6
     */
    rate?: number;
    /**
     * The currency code for the original (converted FROM) currency.<br>Example: Rupee<br><a onclick='loadDocReference("currencycodes")'>click here to see Currency codes</a>
     */
    fromCurrency?: string;
    /**
     * The currency code for the final(converted INTO) currency.<br>Example: USD<br><a onclick='loadDocReference("currencycodes")'>click here to see currencycodes</a>
     */
    intoCurrency?: string;
};

