/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This is a total distance between origin and destination city centers for freight shipments.
 */
export type Distance = {
    /**
     * Indicates the unit of measure for the distance value.
     */
    units?: Distance.units;
    /**
     * Indicates the distance quantity.
     */
    value?: number;
};
export namespace Distance {
    /**
     * Indicates the unit of measure for the distance value.
     */
    export enum units {
        KM = 'KM',
        MI = 'MI',
    }
}

