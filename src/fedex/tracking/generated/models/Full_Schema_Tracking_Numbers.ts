/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrackingInfo } from './TrackingInfo';
/**
 * The request elements for Tracking by Tracking Number.
 */
export type Full_Schema_Tracking_Numbers = {
    /**
     * Indicates if detailed scans are requested or not. <br/>Valid values are True, or False.
     */
    includeDetailedScans: boolean;
    /**
     * The tracking information of the shipment to be tracked. At least one occurrence of TrackingInfo is required. Maximum limit is 30.
     */
    trackingInfo: Array<TrackingInfo>;
};

