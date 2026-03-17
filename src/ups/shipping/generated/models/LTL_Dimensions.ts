/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Dimensions for the handling unit.
 */
export type LTL_Dimensions = {
    /**
     * Length of the package/ltl.
     */
    Length: string;
    /**
     * Width of the package/ltl.
     */
    Width: string;
    /**
     * Height of the package/ltl.
     */
    Height: string;
    /**
     * The code associated with unit of measurement. The requested code must be valid for the shipper country or territory.
     *
     * Valid values are :
     *
     * - IN = Inches
     * - CM = Centimeters
     *
     */
    UnitOfMeasurement: LTL_Dimensions.UnitOfMeasurement;
};
export namespace LTL_Dimensions {
    /**
     * The code associated with unit of measurement. The requested code must be valid for the shipper country or territory.
     *
     * Valid values are :
     *
     * - IN = Inches
     * - CM = Centimeters
     *
     */
    export enum UnitOfMeasurement {
        IN = 'IN',
        CM = 'CM',
    }
}

