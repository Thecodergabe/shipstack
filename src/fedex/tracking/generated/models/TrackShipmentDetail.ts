/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipmentContent } from './ShipmentContent';
import type { TrackSplitShipment } from './TrackSplitShipment';
import type { Weight } from './Weight';
/**
 * Shipment level details for the shipment being tracked. Includes overall shipment weight, contents etc.
 */
export type TrackShipmentDetail = {
    /**
     * Field which holds information about contents of the shipment. Populated for secure users only.
     */
    contents?: Array<ShipmentContent>;
    /**
     * Indicates the shipment is not yet in FedEx possession, but is still in shipper's possession.<br> Example: false
     */
    beforePossessionStatus?: boolean;
    /**
     * Array of package level weights, which represent the total weight of the shipment.
     */
    weight?: Array<Weight>;
    /**
     * Field which holds information about content piece count of the shipment.<br> Example: 3333
     */
    contentPieceCount?: string;
    /**
     * Field which holds information about split shipments.
     */
    splitShipments?: Array<TrackSplitShipment>;
};

