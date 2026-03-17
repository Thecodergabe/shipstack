/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A range of time the package was picked up.
 */
export type TrackingCandidate_PickupDateRange = {
    /**
     * The beginning of the date range for the candidate. Format: YYYYMMDD  Service is only supported for 30 days
     */
    BeginDate: string;
    /**
     * The end of the date range for the candidate. Format: YYYYMMDD
     */
    EndDate: string;
};

