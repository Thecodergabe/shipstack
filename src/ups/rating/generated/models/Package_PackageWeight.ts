/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackageWeight_UnitOfMeasurement } from './PackageWeight_UnitOfMeasurement';
/**
 * Package Weight Container.  Required for an GFP Rating request. Otherwise optional. Required for Heavy Goods service.  Package Weight will be ignored for Simple Rate
 */
export type Package_PackageWeight = {
    UnitOfMeasurement: PackageWeight_UnitOfMeasurement;
    /**
     * Actual package weight.  Weight accepted for letters/envelopes.
     */
    Weight: string;
};

