/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipmentDryIceProcessingOptionsRequested } from './ShipmentDryIceProcessingOptionsRequested';
import type { Weight } from './Weight';
/**
 * Specifies the shipment level totals of dry ice data across all packages.
 */
export type ShipmentDryIceDetail = {
    /**
     * Specify total dry ice weight for the shipment.
     */
    totalWeight?: Weight;
    /**
     * Specifies the package Count for the shipment<br>Example: 10
     */
    packageCount: number;
    processingOptions?: ShipmentDryIceProcessingOptionsRequested;
};

