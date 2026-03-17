/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
import type { CompleteTrackResult } from './CompleteTrackResult';
/**
 * The response elements for Tracking by Associated Shipment request.
 */
export type TrackingMPSResponse = {
    /**
     * Contains the detailed tracking entry information.
     */
    completeTrackResults?: Array<CompleteTrackResult>;
    /**
     * The cxs alert type, alert code, and alert messages.<br>Example: example: TRACKING.DATA.NOTFOUND -  Tracking data unavailable
     */
    alerts?: Array<Alert>;
};

