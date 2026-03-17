/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackageWeight_UnitOfMeasurement } from './PackageWeight_UnitOfMeasurement';
/**
 * Container to hold package weight information.  Package weight is a required for Ground Freight Pricing shipments and Heavy Goods service. Package Weight will be ignored for Simple Rate.
 */
export type Package_PackageWeight = {
    UnitOfMeasurement: PackageWeight_UnitOfMeasurement;
    /**
     * Packages weight. Weight accepted for letters/envelopes.  Only average package weight is required for Ground Freight Pricing Shipment.
     */
    Weight: string;
};

