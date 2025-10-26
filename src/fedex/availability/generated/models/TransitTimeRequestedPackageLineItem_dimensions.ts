/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specify the dimensions of this package and the unit type used for the measurements. Valid measurements are whole numbers greater than zero.
 */
export type TransitTimeRequestedPackageLineItem_dimensions = {
    /**
     * Length of a package or shipment. Maximum Length is 999. <br> Example: 100
     */
    length?: number;
    /**
     * Width dimensions of a package or shipment. Maximum Length is 999. <br> Example: 50
     */
    width?: number;
    /**
     * Height of a package or shipment. Maximum Length is 999. <br> Example: 30
     */
    height?: number;
    /**
     * Unit of measure for the provided dimensions.<br> Valid Values: IN - inches, CM - centimeters <br>Example: CM
     */
    units?: TransitTimeRequestedPackageLineItem_dimensions.units;
};
export namespace TransitTimeRequestedPackageLineItem_dimensions {
    /**
     * Unit of measure for the provided dimensions.<br> Valid Values: IN - inches, CM - centimeters <br>Example: CM
     */
    export enum units {
        CM = 'CM',
        IN = 'IN',
    }
}

