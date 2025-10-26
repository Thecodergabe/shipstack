/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackageRateDetail } from './PackageRateDetail';
export type RatedPackageDetail = {
    /**
     * This is the  list net charge minus actual net charge.<br> Example: 1.0
     */
    effectiveNetDiscount?: number;
    packageRateDetail?: PackageRateDetail;
    /**
     * This is group number, used only with package groups as a unique identifier of each group of identical packages.
     */
    groupNumber?: number;
};

