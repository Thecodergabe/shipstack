/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipmentRateDetail } from './ShipmentRateDetail';
export type ShipmentRating = {
    /**
     * This rate type identifies which entry in the following array is considered as presenting the "actual" rates for the shipment.<br>Example: PAYOR_LIST_SHIPMENT
     */
    actualRateType?: string;
    /**
     * Each element of this field provides shipment-level rate totals for a specific rate type.
     */
    shipmentRateDetails?: Array<ShipmentRateDetail>;
};

