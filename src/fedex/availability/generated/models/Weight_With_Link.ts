/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are the package weight details.
 */
export type Weight_With_Link = {
    /**
     * Specifies the package weight unit type.<br>Example:KG
     */
    units: Weight_With_Link.units;
    /**
     * Weight Value.<br> Example: 68.25<br><a href="/developer-portal/en-us/reference-guide.html#packagetypes" target="_blank">Click here to see Weight Values</a>
     */
    value: number;
};
export namespace Weight_With_Link {
    /**
     * Specifies the package weight unit type.<br>Example:KG
     */
    export enum units {
        KG = 'KG',
        LB = 'LB',
    }
}

