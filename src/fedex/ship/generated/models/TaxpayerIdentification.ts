/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TaxpayerIdentification = {
    /**
     * Specify tax ID number. Maximum length is 18. <br>Example: 123567
     */
    number: string;
    /**
     * Identifies the type of Tax Identification Number in Shipment processing.<br>Example: FEDERAL
     */
    tinType: TaxpayerIdentification.tinType;
    /**
     * Identifies the usage of Tax Identification Number in Shipment processing.<br>Example: usage
     */
    usage?: string;
    /**
     * Effective Date. FORMAT[YYYY-MM-DD] <br>Example: 2024-06-13
     */
    effectiveDate?: string;
    /**
     * Expiration Date. FORMAT[YYYY-MM-DD]<br>Example: 2024-06-13
     */
    expirationDate?: string;
};
export namespace TaxpayerIdentification {
    /**
     * Identifies the type of Tax Identification Number in Shipment processing.<br>Example: FEDERAL
     */
    export enum tinType {
        PERSONAL_NATIONAL = 'PERSONAL_NATIONAL',
        PERSONAL_STATE = 'PERSONAL_STATE',
        FEDERAL = 'FEDERAL',
        BUSINESS_NATIONAL = 'BUSINESS_NATIONAL',
        BUSINESS_STATE = 'BUSINESS_STATE',
        BUSINESS_UNION = 'BUSINESS_UNION',
    }
}

