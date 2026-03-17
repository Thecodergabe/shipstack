/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
import type { CompleteTrackResult } from './CompleteTrackResult';
/**
 * The response elements for the Track by TCN request.
 */
export type TrackingNumbersResponse_TCN = {
    /**
     * Contains detailed tracking entry information.
     */
    completeTrackResults?: Array<CompleteTrackResult>;
    /**
     * alert type, alert code, and alert message<br>Example: TRACKING.DATA.NOTFOUND -  Tracking data unavailable
     */
    alerts?: Array<Alert>;
};

