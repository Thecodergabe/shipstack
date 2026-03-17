/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Weight for the handling unit.
 */
export type LTL_Package_Weight_Type = {
    /**
     * Weight of the package/ltl.
     */
    Weight: string;
    /**
     * Unit of measurement of the weight.
     *
     * Valid values are:
     *
     * - KGS = Kilograms
     * - LBS =    Pounds
     *
     */
    UnitOfMeasurement: LTL_Package_Weight_Type.UnitOfMeasurement;
};
export namespace LTL_Package_Weight_Type {
    /**
     * Unit of measurement of the weight.
     *
     * Valid values are:
     *
     * - KGS = Kilograms
     * - LBS =    Pounds
     *
     */
    export enum UnitOfMeasurement {
        KGS = 'KGS',
        LBS = 'LBS',
    }
}

