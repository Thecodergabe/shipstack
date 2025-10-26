/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This customs value is applicable for all items(or units) under the specified commodity
 */
export type Money = {
    /**
     * This is the amount. Maximum limit is 5 digits before decimal.<br>Example: 12.45
     */
    amount?: number;
    /**
     * This is the currency code for the amount.<br>Example: USD<br><a onclick='loadDocReference("currencycodes")'>Click here to see Currency codes</a>
     */
    currency?: string;
};

