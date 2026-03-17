/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimeRange } from './TimeRange';
export type TimeWindow = {
    /**
     * Field which describes the time window provided. <br> Example: Description field
     */
    description?: string;
    window?: TimeRange;
    /**
     * Field which holds the code representing the description for the time window provided. <br> Example: ESTIMATED_DELIVERY
     */
    type?: TimeWindow.type;
};
export namespace TimeWindow {
    /**
     * Field which holds the code representing the description for the time window provided. <br> Example: ESTIMATED_DELIVERY
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
        TYPICAL = 'TYPICAL',
        PROJECTED = 'PROJECTED',
        PRE_DELIVERY = 'PRE_DELIVERY',
    }
}

