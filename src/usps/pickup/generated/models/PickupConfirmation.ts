/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SchedulePickupRequest } from './SchedulePickupRequest';
export type PickupConfirmation = {
    /**
     * This is the USPS assigned confirmation number of the pick-up.
     */
    readonly confirmationNumber?: string;
    /**
     * This is the scheduled pick-up date.
     */
    pickupDate?: string;
    carrierPickupRequest?: SchedulePickupRequest;
};

