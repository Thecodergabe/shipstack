/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DimWeight_UnitOfMeasurement } from './DimWeight_UnitOfMeasurement';
/**
 * Dimensional weight of shipment. Please visit ups.com for rules on calculating. There is one implied decimal place (e.g. 115 = 11.5).  If dimensions are provided, dimensional weight is ignored. For US/PR/CA shipments, dimensional weight is ignored
 */
export type Package_DimWeight = {
    UnitOfMeasurement?: DimWeight_UnitOfMeasurement;
    /**
     * Actual package weight.  Weight accepted for letters/envelopes.
     */
    Weight?: string;
};

