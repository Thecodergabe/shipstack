/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * UnitOfMeasurement Container.
 */
export type PackageWeight_UnitOfMeasurement = {
    /**
     * Code representing the unit of measure associated with the package weight.
     *
     * Unit of Measurement "OZS" is the only valid UOM for Worldwide Economy DDU Shipments.
     *
     * Valid values:
     * - LBS - Pounds (default)
     * - KGS - Kilograms
     * - OZS - Ounces
     *
     */
    Code: string;
    /**
     * Text description of the code representing the unit of measure associated with the package weight.  Length and value are not validated.
     */
    Description: string;
};

