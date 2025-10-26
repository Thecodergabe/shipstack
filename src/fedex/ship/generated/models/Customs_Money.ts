/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This customs value is applicable for all items(or units) under the specified commodity.
 */
export type Customs_Money = {
    /**
     * This is commodity value in amount used for Customs declaration.<br>Max limit: 11 digits before decimal.<br>Example: 1,55,6457.25
     */
    amount?: number;
    /**
     * This is the currency code for the amount.<br>Example: USD<br><a onclick='loadDocReference("currencycodes")'>Click here to see Currency codes</a>
     */
    currency?: string;
};

