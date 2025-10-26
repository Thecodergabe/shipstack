/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specify the total weight of the shipment. <br>This is only applies to International shipments and should be used on the first package of a multiple piece shipment. This value contains 1 explicit decimal position.
 */
export type Weight1 = {
    /**
     * Specify the unit of measurement used to weigh the shipment. The package and commodity weight unit should be the same else the request will result in an error.
     */
    units?: Weight1.units;
    /**
     * Specify the value of weight of shipment.<br>Example: 68.25
     */
    value?: number;
};
export namespace Weight1 {
    /**
     * Specify the unit of measurement used to weigh the shipment. The package and commodity weight unit should be the same else the request will result in an error.
     */
    export enum units {
        KG = 'KG',
        LB = 'LB',
    }
}

