/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are the package weight details.
 */
export type Weight = {
    /**
     * This is package weight type.
     */
    unit?: Weight.unit;
    /**
     * This is package weight. Max. Length is 99999. <br> Example: 22222.0
     */
    value?: string;
};
export namespace Weight {
    /**
     * This is package weight type.
     */
    export enum unit {
        KG = 'KG',
        LB = 'LB',
    }
}

