/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Optional, but if indicated 'amount' and 'currency' must be provided.
 */
export type Money = {
    /**
     * This is the amount. Max length 18 including decimal.<br>Example: 12.45
     */
    amount?: number;
    /**
     * This is the currency code for the amount.<br>Example: USD<br><a onclick='loadDocReference("currencycodes")'>Click here to see Currency Codes</a>
     */
    currency?: string;
};

