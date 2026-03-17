/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for the Time-In-Transit arrival information by service. This is the most accurate delivery information available via the Rating API and will reflect changes in delivery schedules due to peak business seasons or holidays.
 */
export type EstimatedArrival_Arrival = {
    /**
     * Scheduled Local Delivery Date. Format: YYYYMMDD
     */
    Date: string;
    /**
     * The time UPS will pick up the shipment. This is commit Time. Military Time Format HHMMSS or HHMM
     */
    Time?: string;
};

