/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Weight1 } from './Weight1';
/**
 * Number of packages in this shipment which contain dry ice.  The total weight of the dry ice for this shipment
 *
 * Both are required to indicate dry ice
 */
export type ShipmentDryIceDetail1 = {
    totalWeight?: Weight1;
    /**
     * Indicates the total number of packages in the shipment that contain dry ice.<br>Example: 12
     */
    packageCount?: number;
};

