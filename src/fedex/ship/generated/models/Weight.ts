/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are the package weight details.<br>Note: Weight is not required for One rate shipments
 */
export type Weight = {
    /**
     * Specifies the package weight unit type.<br>Example:KG
     */
    units: Weight.units;
    /**
     * Weight Value.<br> Example: 68.25<br><a href='https://developer.fedex.com/api/en-us/guides/api-reference.html#packagetypes' target='_blank'>Click here to see Weight Values</a>.
     */
    value: number;
};
export namespace Weight {
    /**
     * Specifies the package weight unit type.<br>Example:KG
     */
    export enum units {
        KG = 'KG',
        LB = 'LB',
    }
}

