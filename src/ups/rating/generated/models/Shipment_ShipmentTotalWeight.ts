/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipmentTotalWeight_UnitOfMeasurement } from './ShipmentTotalWeight_UnitOfMeasurement';
/**
 * Shipment Total Weight Container. This container is only applicable for "ratetimeintransit" and "shoptimeintransit" request options.  Required for all international shipments when retreiving time in transit information, including letters and documents shipments.
 */
export type Shipment_ShipmentTotalWeight = {
    UnitOfMeasurement: ShipmentTotalWeight_UnitOfMeasurement;
    /**
     * Non-zero total weight of all packages in the shipment.
     */
    Weight: string;
};

