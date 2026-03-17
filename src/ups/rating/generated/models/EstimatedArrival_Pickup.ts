/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The date and pick up time container.
 */
export type EstimatedArrival_Pickup = {
    /**
     * The date UPS picks up the package from the origin. Format: YYYYMMDD. In the event the Pickup date differs from the Ship On Date, provided in the request, a warning message will be returned.
     */
    Date: string;
    /**
     * The time UPS will pick up the shipment. Military Time Format HHMMSS or HHMM
     */
    Time?: string;
};

