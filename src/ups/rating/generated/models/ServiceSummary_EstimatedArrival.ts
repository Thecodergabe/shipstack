/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EstimatedArrival_Arrival } from './EstimatedArrival_Arrival';
import type { EstimatedArrival_Pickup } from './EstimatedArrival_Pickup';
/**
 * Container for the Time-In-Transit arrival information by service
 */
export type ServiceSummary_EstimatedArrival = {
    Arrival: EstimatedArrival_Arrival;
    /**
     * Number of business days from Origin to Destination Locations.
     */
    BusinessDaysInTransit: string;
    Pickup: EstimatedArrival_Pickup;
    /**
     * Day of week for arrival. Valid values are: MONTUEWEDTHUFRISAT
     */
    DayOfWeek: string;
    /**
     * Customer Service call time. Returned for domestic as well as international requests.
     */
    CustomerCenterCutoff?: string;
    /**
     * Number of days delayed at customs. Returned for International requests.
     */
    DelayCount?: string;
    /**
     * Number of National holidays during transit. Returned for International requests.
     */
    HolidayCount?: string;
    /**
     * Number of rest days, i.e. non movement. Returned for International requests.
     */
    RestDays?: string;
    /**
     * The total number of days in transit from one location to the next. Returned for International requests.
     */
    TotalTransitDays?: string;
};

