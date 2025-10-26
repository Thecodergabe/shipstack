/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerReference } from './CustomerReference';
import type { Dimensions } from './Dimensions';
import type { InsuredValue } from './InsuredValue';
import type { PackageSpecialServicesRequested } from './PackageSpecialServicesRequested';
import type { RequestedPackageLineItemContentRecord } from './RequestedPackageLineItemContentRecord';
import type { Weight_With_Link } from './Weight_With_Link';
export type RequestedPackageLineItem = {
    /**
     * Specify the packaging used.<br>Example: FEDEX_PAK<br><a onclick='loadDocReference("packagetypes")'>Click here to see Package Types</a>
     */
    physicalPackaging?: string;
    /**
     * Indicate the grouped package count. These are number of identical package(s) each with one or more commodities. <br> Example: 2
     */
    groupPackageCount?: number;
    /**
     * Describe the content of the package for customs clearance purposes. This applies to intra-UAE, intra-Columbia and intra-Brazil shipments.
     */
    itemDescriptionForClearance?: string;
    /**
     * These are additional customer reference data for commercial invoice.
     */
    customerReferences?: Array<CustomerReference>;
    contentRecord?: RequestedPackageLineItemContentRecord;
    declaredValue?: InsuredValue;
    weight: Weight_With_Link;
    dimensions?: Dimensions;
    packageSpecialServices?: PackageSpecialServicesRequested;
};

