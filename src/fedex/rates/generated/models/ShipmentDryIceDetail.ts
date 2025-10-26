/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Weight_1_2 } from './Weight_1_2';
/**
 * Use this object to indicate package count with weight for this shipment containing dry ice. Dry ice is supported in both shipment level and package level services.
 */
export type ShipmentDryIceDetail = {
    totalWeight?: Weight_1_2;
    /**
     * This is package count.<br>Example: 12
     */
    packageCount?: number;
};

