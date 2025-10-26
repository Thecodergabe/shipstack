/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackageRateDetail } from './PackageRateDetail';
/**
 * This class groups together all package-level rate data for a single package (across all rate types) as part of the response to a shipping request, which groups shipment-level data together and groups package-level data by package.
 */
export type PackageRating = {
    /**
     * This is the difference between the list and account net charge.<br>Example: 0.0
     */
    effectiveNetDiscount?: number;
    /**
     * This is the actual rate type. It identifies which entry in the following array is considered as presenting the actual rates for the package.<br>Example: PAYOR_ACCOUNT_PACKAGE
     */
    actualRateType?: string;
    /**
     * Data for a package's rates, as calculated per a specific rate type.
     */
    packageRateDetails?: Array<PackageRateDetail>;
};

