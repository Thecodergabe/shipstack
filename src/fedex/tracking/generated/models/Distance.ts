/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Distance remaining to the destination. Only returned for FedEx Custom Critical shipments.
 */
export type Distance = {
    /**
     * Field which holds the distance unit type.
     */
    units?: Distance.units;
    /**
     * Field which holds the value for the distance.<br> Example: 685.78
     */
    value?: number;
};
export namespace Distance {
    /**
     * Field which holds the distance unit type.
     */
    export enum units {
        KM = 'KM',
        MI = 'MI',
    }
}

