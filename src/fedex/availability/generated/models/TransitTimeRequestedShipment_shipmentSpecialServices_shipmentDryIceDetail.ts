/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransitTimeRequestedShipment_shipmentSpecialServices_shipmentDryIceDetail_totalWeight } from './TransitTimeRequestedShipment_shipmentSpecialServices_shipmentDryIceDetail_totalWeight';
/**
 * Use this object to indicate package count with weight for this shipment containing dry ice. Dry ice is supported in both shipment level and package level services.
 */
export type TransitTimeRequestedShipment_shipmentSpecialServices_shipmentDryIceDetail = {
    totalWeight?: TransitTimeRequestedShipment_shipmentSpecialServices_shipmentDryIceDetail_totalWeight;
    /**
     * Specify dry ice shipment package count.<br>Example: 12
     */
    packageCount?: number;
};

