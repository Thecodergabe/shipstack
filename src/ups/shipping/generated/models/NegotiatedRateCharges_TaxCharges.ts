/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type NegotiatedRateCharges_TaxCharges = {
    /**
     * Tax Type code. The code represents the type of Tax applied to a shipment.   Refer to Tax Type Values/Abbreviations in the Appendix for valid values.
     */
    Type: string;
    /**
     * Tax Monetary Value represent the Tax amount.  Valid values are from 0 to 99999999999999.99
     */
    MonetaryValue: string;
};

