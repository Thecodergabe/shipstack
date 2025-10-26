/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompletedHazardousPackageDetail } from './CompletedHazardousPackageDetail';
import type { PackageOperationalDetail } from './PackageOperationalDetail';
import type { PackageRating } from './PackageRating';
import type { TrackingId } from './TrackingId';
import type { Weight } from './Weight';
export type CompletedPackageDetail = {
    /**
     * This is package sequence number. No negative value or decimals are allowed.<br>Example: 256
     */
    sequenceNumber?: number;
    operationalDetail?: PackageOperationalDetail;
    /**
     * It specifies the signature option applied, to allow cases in which the value requested conflicted with other service features in the shipment. <br>Example: DIRECT
     */
    signatureOption?: string;
    /**
     * Tracking details of the package.
     */
    trackingIds?: Array<TrackingId>;
    /**
     * This is group shipment number. Used with request containing PACKAGE_GROUPS, to identify which group of identical packages was used to produce a reply item.<br>Example: 10
     */
    groupNumber?: number;
    /**
     * Indicates the oversize classification.<br>Example: OVERSIZE_1
     */
    oversizeClass?: string;
    packageRating?: PackageRating;
    /**
     * Descriptive data required for a FedEx shipment containing dry ice. Includes weight and units. This element is required when SpecialServiceType DRY_ICE is present in the SpecialServiceTypes collection at the package level.
     */
    dryIceWeight?: Weight;
    hazardousPackageDetail?: CompletedHazardousPackageDetail;
};

