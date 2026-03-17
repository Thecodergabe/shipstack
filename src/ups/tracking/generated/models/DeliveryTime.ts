/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The container which has all delivery times associated with the package.
 */
export type DeliveryTime = {
    /**
     * The end time of a window or the committed time or the delivered time. Only returned when the type is “EDW” or “CDW” or “IDW” or “CMT” or “DEL”. Format: HHMMSS (24 hr)
     */
    endTime?: string;
    /**
     * The start time of a delivery. Only returned when the type is “EDW” or “CDW” or “IDW”. Format: HHMMSS (24 hr).
     */
    startTime?: string;
    /**
     * The date of this delivery detail.
     * Valid values:
     *
     * EOD - End of Day
     * CMT - Commit Time
     * EDW - Estimated Delivery Window **
     * CDW - Confirmed Delivery Window **
     * IDW - Imminent Delivery Window **
     * DEL - Delivered Time
     */
    type?: string;
};

