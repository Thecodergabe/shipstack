/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Location } from './Location';
import type { Status } from './Status';
/**
 * Container with all activities associated with the package. Activities are returned in chronological order, with the most recent activity first.
 */
export type Activity = {
    /**
     * The date of the activity. Format: YYYYMMDD
     */
    date?: string;
    /**
     * gmtDate
     */
    gmtDate?: string;
    /**
     * gmtOffset
     */
    gmtOffset?: string;
    /**
     * gmtTime
     */
    gmtTime?: string;
    location?: Location;
    status?: Status;
    /**
     * The time of the activity. Format: HHMMSS (24 hr)
     */
    time?: string;
};

