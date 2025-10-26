/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies the currency exchange performed on financial amounts for this rate.
 */
export type CurrencyExchangeRate = {
    /**
     * The currency code for the original (converted FROM) currency.
     */
    fromCurrency?: string;
    /**
     * The currency code for the final (converted INTO) currency.
     */
    intoCurrency?: string;
    /**
     * Multiplier used to convert fromCurrency units to intoCurrency units.
     */
    rate?: number;
};

