/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * SimpleRate Container
 */
export type Package_SimpleRate = {
    /**
     * SimpleRate code.  Valid Values
     * - XS =  Extra Small
     * - S =  Small
     * - M = Medium
     * - L = Large
     * - XL = Extra Large
     *
     */
    Code: string;
    /**
     * Simple Rate description of the code above.  Currently ignored if provided in the Request. Length is not validated.
     */
    Description?: string;
};

