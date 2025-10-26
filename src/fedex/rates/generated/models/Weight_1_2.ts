/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are the weight details.
 */
export type Weight_1_2 = {
    /**
     * Specifies the package weight unit. For Dry Ice the unit of measure is KG.
     */
    units?: Weight_1_2.units;
    /**
     * Specifies the package weight.<br> Example: 68.25
     */
    value?: number;
};
export namespace Weight_1_2 {
    /**
     * Specifies the package weight unit. For Dry Ice the unit of measure is KG.
     */
    export enum units {
        KG = 'KG',
        LB = 'LB',
    }
}

