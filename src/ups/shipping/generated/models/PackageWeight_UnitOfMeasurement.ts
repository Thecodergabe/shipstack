/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container to hold UnitOfMeasurement information for package weight.
 */
export type PackageWeight_UnitOfMeasurement = {
    /**
     * Package weight unit of measurement code.
     *
     * Valid values:
     * - LBS = Pounds
     * - KGS = Kilograms
     * - OZS = Ounces
     *
     * Unit of Measurement "OZS" is the only valid UOM for some of the Mail Innovations Forward and Worldwide Economy DDU Shipments.
     *
     * Please refer to Appendix for more details regarding the valid combination of Mail Innovation Forward Shipment services, Package Type and Unit of Measurement.
     *
     */
    Code: string;
    /**
     * Description of the unit of measurement for package weight.
     */
    Description?: string;
};

