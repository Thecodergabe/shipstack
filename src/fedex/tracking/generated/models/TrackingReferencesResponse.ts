/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
import type { CompleteTrackResult } from './CompleteTrackResult';
import type { CXSError } from './CXSError';
/**
 * Specifies the response elements for Track by alternate reference request.
 */
export type TrackingReferencesResponse = {
    /**
     * Indicates error alert when suspicious files, potential exploits and viruses found while scanning files , directories and user accounts. This includes code, message and parameter.
     */
    cxsErrors?: Array<CXSError>;
    /**
     * Contains detailed tracking entry information.  <br>Valid values: ACTUAL_DELIVERY, ACTUAL_PICKKUP, ACTUAL_TENDER, ANTICIPATED_TENDER, APPOINTMENT_DELIVERY, ATTEMPTED_DELIVERY, COMMITMENT, ESTIMATED_ARRIVAL_AT_GATEWAY, ESTIMATED_DELIVERY, ESTIMATED_PICKUP, ESTIMATED_RETURN_TO_STATION, SHIP, SHIPMENT_DATE_RECEIVED
     */
    completeTrackResults?: Array<CompleteTrackResult>;
    /**
     * The cxs alert type, alert code, and alert message that is received.<br>example: TRACKING.DATA.NOTFOUND -  Tracking data unavailable
     */
    alerts?: Array<Alert>;
    /**
     * Indicates whether the tracking is successful.
     */
    successful?: boolean;
};

