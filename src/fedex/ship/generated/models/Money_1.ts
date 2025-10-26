/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This is commodity value used for Customs declaration.
 */
export type Money_1 = {
    /**
     * Three-character currency code (e.g. USD, CAD, EUR, JPY, etc.) <br><a href="/developer-portal/en-us/reference-guide.html#currencycodes" target="_blank">Click here to see Currency Codes</a>
     */
    currency?: string;
    /**
     * Specify the value.
     */
    value: Money_1.value;
};
export namespace Money_1 {
    /**
     * Specify the value.
     */
    export enum value {
        CUSTOMS_VALUE = 'CUSTOMS_VALUE',
        INSURED_VALUE = 'INSURED_VALUE',
    }
}

