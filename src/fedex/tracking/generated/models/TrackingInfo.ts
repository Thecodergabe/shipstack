/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrackingNumberInfo } from './TrackingNumberInfo';
/**
 * Tracking details for the shipment to be tracked
 */
export type TrackingInfo = {
    /**
     * ShipDateBegin and ShipDateEnd are recommended to narrow the search, reduce lookup time, and avoid duplicates when searching for a specific tracking number within a specific date range. <br>Format: YYYY-MM-DD<br> Example: 2020-03-29
     */
    shipDateBegin?: string;
    /**
     * ShipDateBegin and ShipDateEnd are recommended to narrow the search, reduce lookup time, and avoid duplicates when searching for a specific tracking number within a specific date range. <br>Format: YYYY-MM-DD<br> Example: 2020-04-01
     */
    shipDateEnd?: string;
    trackingNumberInfo: TrackingNumberInfo;
};

