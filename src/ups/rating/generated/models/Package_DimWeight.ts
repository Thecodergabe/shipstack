/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DimWeight_UnitOfMeasurement } from './DimWeight_UnitOfMeasurement';
/**
 * Package Dimensional Weight container. Values in this container are ignored when package dimensions are provided. Please visit ups.com for instructions on calculating this value.  Only used for non-US/CA/PR shipments.
 */
export type Package_DimWeight = {
    UnitOfMeasurement?: DimWeight_UnitOfMeasurement;
    /**
     * Dimensional weight of the package. Decimal values are not accepted, however there is one implied decimal place for values in this field (i.e. 115 = 11.5).
     */
    Weight?: string;
};

