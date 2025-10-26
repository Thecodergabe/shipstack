/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * It is the total weight of the commodity.<br>Note: Weight is not required for One rate shipments
 */
export type Weight_4 = {
    /**
     * Indicate the weight unit type. The package and commodity weight unit should be the same else the request will result in an error.
     */
    units: Weight_4.units;
    /**
     * Weight Value.<br> Example: 68.25
     */
    value: number;
};
export namespace Weight_4 {
    /**
     * Indicate the weight unit type. The package and commodity weight unit should be the same else the request will result in an error.
     */
    export enum units {
        KG = 'KG',
    }
}

