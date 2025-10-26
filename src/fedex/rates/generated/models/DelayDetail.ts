/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Information about why a shipment delivery is delayed and at what level
 */
export type DelayDetail = {
    /**
     * delay date.  format [YYYY-MM-DD]
     */
    date?: string;
    /**
     * The delay day of the week
     */
    dayOfWeek?: string;
    /**
     * The attribute of the shipment that caused the delay(e.g. Country, City, LocationId, Zip, service area, special handling)
     */
    level?: string;
    /**
     * The point in transit where the delay is occurring (e.g. Origin, Destination, Broker location)
     */
    point?: string;
    /**
     * The reason for the delay (e.g. holiday, weekend, etc.).
     */
    type?: string;
    /**
     * The name of the holiday in that country that is causing the delay.
     */
    description?: string;
};

