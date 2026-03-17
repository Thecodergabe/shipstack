/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Amount } from './Amount';
import type { PackagingDescription } from './PackagingDescription';
import type { TrackingWeightAndDimensions } from './TrackingWeightAndDimensions';
/**
 * Details of the packages in the shipment being tracked. Includes details like package type, weight, dimensions, declared value, etc.
 */
export type PackageDetail = {
    /**
     * Indicate the physical package type for non-Express shipments.<br><a onclick='loadDocReference("subpackagetypes")'>Click here to see Available Types</a>
     */
    physicalPackagingType?: string;
    /**
     * Field which holds the number representing which package in a multi-piece shipment applies to this TrackDetail.<br> Example: 45
     */
    sequenceNumber?: string;
    /**
     * Field which holds information about total count of the undelivered packages in the shipment. <br> Example: 7
     */
    undeliveredCount?: string;
    packagingDescription?: PackagingDescription;
    /**
     * Field which holds the total number of pieces in the shipment which includes the package represented by this TrackDetail.<br> Example: 1
     */
    count?: string;
    weightAndDimensions?: TrackingWeightAndDimensions;
    /**
     * Field which holds information about the package content of the shipment. Populated for secure users only.<br> Example: wire hangers.
     */
    packageContent?: Array<string>;
    /**
     * Field which holds information about total count of the packages in the shipment.<br> Example: 100
     */
    contentPieceCount?: string;
    /**
     * This is the declared value. Declared Value represents FedEx maximum liability in connection with a shipment of that Package, including but not limited to, any loss, damage, delay, misdelivery, any failure to provide information, or misdelivery of information relating to the Shipment.
     */
    declaredValue?: Amount;
};

