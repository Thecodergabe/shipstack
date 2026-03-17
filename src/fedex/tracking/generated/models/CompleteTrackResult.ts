/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrackResult } from './TrackResult';
/**
 * Detailed and complete track results
 */
export type CompleteTrackResult = {
    /**
     * A tracking number to identify a package.<br> Example: 123456789012
     */
    trackingNumber?: string;
    /**
     * An array of detailed tracking information for the requested packages(s). In case of duplicate shipments, multiple track details will be populated.
     */
    trackResults?: Array<TrackResult>;
};

