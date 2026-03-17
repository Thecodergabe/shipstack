/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
import type { CompleteTrackResult } from './CompleteTrackResult';
/**
 * The response elements for Tracking by tracking number request
 */
export type TrackingNumbersResponse = {
    /**
     * Contains detailed tracking entry information. <br>Valid values are- ACTUAL_DELIVERY, ACTUAL_PICKUP, ACTUAL_TENDER, ANTICIPATED_TENDER, APPOINTMENT_DELIVERY, ATTEMPTED_DELIVERY, COMMITMENT, ESTIMATED_ARRIVAL_AT_GATEWAY, ESTIMATED_DELIVERY, ESTIMATED_PICKUP, ESTIMATED_RETURN_TO_STATION, SHIP, SHIPMENT_DATA_RECEIVED.
     */
    completeTrackResults?: Array<CompleteTrackResult>;
    /**
     * The cxs alert type, alert code and alert message<br>Example: TRACKING.DATA.NOTFOUND -  Tracking data unavailable
     */
    alerts?: Array<Alert>;
};

