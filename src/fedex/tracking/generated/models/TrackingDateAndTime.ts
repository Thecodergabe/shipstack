/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Date and time information for the tracked shipment. Date and time information for the tracked shipment includes various type of date time including when the package was shipped, when it is expected to deliver, when it is actually delivered etc.
 */
export type TrackingDateAndTime = {
    /**
     * Field which holds the tracking date or timestamp in ISO format.<br>Format: YYYY-MM-DD<br> Example: '2019-05-07'
     */
    dateTime?: string;
    /**
     * Field which holds information about the type of tracking date or timestamp.<br> Example: 'ACTUAL_DELIVERY'
     */
    type?: TrackingDateAndTime.type;
};
export namespace TrackingDateAndTime {
    /**
     * Field which holds information about the type of tracking date or timestamp.<br> Example: 'ACTUAL_DELIVERY'
     */
    export enum type {
        ACTUAL_DELIVERY = 'ACTUAL_DELIVERY',
        ACTUAL_PICKUP = 'ACTUAL_PICKUP',
        ACTUAL_TENDER = 'ACTUAL_TENDER',
        ANTICIPATED_TENDER = 'ANTICIPATED_TENDER',
        APPOINTMENT_DELIVERY = 'APPOINTMENT_DELIVERY',
        ATTEMPTED_DELIVERY = 'ATTEMPTED_DELIVERY',
        COMMITMENT = 'COMMITMENT',
        ESTIMATED_ARRIVAL_AT_GATEWAY = 'ESTIMATED_ARRIVAL_AT_GATEWAY',
        ESTIMATED_DELIVERY = 'ESTIMATED_DELIVERY',
        ESTIMATED_PICKUP = 'ESTIMATED_PICKUP',
        ESTIMATED_RETURN_TO_STATION = 'ESTIMATED_RETURN_TO_STATION',
        SHIP = 'SHIP',
        SHIPMENT_DATA_RECEIVED = 'SHIPMENT_DATA_RECEIVED',
    }
}

