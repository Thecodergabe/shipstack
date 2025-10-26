/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are the package weight details.<br>Note: Weight is not required for One rate shipments
 */
export type Weight_3 = {
    /**
     * Indicate the weight unit type. The package and commodity weight unit should be the same else the request will result in an error.<br>Example:KG
     */
    units: Weight_3.units;
    /**
     * Weight Value.<br> Example: 68.25<br>
     */
    value: number;
};
export namespace Weight_3 {
    /**
     * Indicate the weight unit type. The package and commodity weight unit should be the same else the request will result in an error.<br>Example:KG
     */
    export enum units {
        KG = 'KG',
        LB = 'LB',
    }
}

