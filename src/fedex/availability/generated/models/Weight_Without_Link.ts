/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are the package weight details.
 */
export type Weight_Without_Link = {
    /**
     * Specifies the package weight unit type.<br>Example:KG
     */
    units: Weight_Without_Link.units;
    /**
     * Weight Value.<br> Example: 68.25
     */
    value: number;
};
export namespace Weight_Without_Link {
    /**
     * Specifies the package weight unit type.<br>Example:KG
     */
    export enum units {
        KG = 'KG',
        LB = 'LB',
    }
}

