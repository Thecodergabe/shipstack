/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Return contract services container
 */
export type DeliveryTimeInformation_ReturnContractServices = {
    /**
     * Return contract Service code. Valid Code "01" - Heavy Goods. If 01 will return Heavy Goods service transit times for a given origin and destination (if applicable)  Invalid Code will be ignore.
     */
    Code: string;
    /**
     * Return contract service Description
     */
    Description?: string;
};

