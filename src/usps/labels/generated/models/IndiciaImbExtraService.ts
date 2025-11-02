/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Extra Service Code requested for IMB letters, flats, and cards.
 *
 * * 910 - Certified Mail
 * * 911 - Certified Mail Restricted Delivery
 * * 930 - Insurance
 * * 934 - Insurance Restricted Delivery
 * * 940 - Registered Mail
 * * 941 - Registered Mail Restricted Delivery
 * * 955 - Return Receipt
 * * 957 - Return Receipt Electronic
 *
 * Note:
 * * When the extra service code "930" is provided in the request, if the item value is over $500, "930" will automatically be replaced with "931" - Insurance (Greater than $500).
 *
 */
export enum IndiciaImbExtraService {
    '_910' = 910,
    '_911' = 911,
    '_930' = 930,
    '_934' = 934,
    '_940' = 940,
    '_941' = 941,
    '_955' = 955,
    '_957' = 957,
}
