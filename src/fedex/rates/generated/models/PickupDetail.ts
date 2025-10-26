/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PickupRequestSourceType } from './PickupRequestSourceType';
import type { PickupRequestType } from './PickupRequestType';
export type PickupDetail = {
    /**
     * Pickup ready date in YYYY-MM-DD format
     */
    readyDateTime?: string;
    /**
     * Latest pickup date in YYYY-MM-DD format
     */
    latestPickupDateTime?: string;
    /**
     * Special instructions for the courier
     */
    courierInstructions?: string;
    requestType?: PickupRequestType;
    requestSource?: PickupRequestSourceType;
};

