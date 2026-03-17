/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactAndAddress } from './ContactAndAddress';
/**
 * Location details for the fedex facility.
 */
export type LocationDetail = {
    /**
     * Location Identification for facilities identified by an alpha numeric location code. Passing Location Id of the Hold at Location (HAL) address is strongly recommended to ensure packages are delivered to the correct address.<br> Example: SEA
     */
    locationId?: string;
    locationContactAndAddress: ContactAndAddress;
    /**
     * The FedEx Location Type.<br> Example: PICKUP_LOCTION
     */
    locationType: LocationDetail.locationType;
};
export namespace LocationDetail {
    /**
     * The FedEx Location Type.<br> Example: PICKUP_LOCTION
     */
    export enum locationType {
        FEDEX_AUTHORIZED_SHIP_CENTER = 'FEDEX_AUTHORIZED_SHIP_CENTER',
        FEDEX_OFFICE = 'FEDEX_OFFICE',
        FEDEX_SELF_SERVICE_LOCATION = 'FEDEX_SELF_SERVICE_LOCATION',
        FEDEX_STAFFED = 'FEDEX_STAFFED',
        RETAIL_ALLICANCE_LOCATION = 'RETAIL_ALLICANCE_LOCATION',
        FEDEX_GROUND_TERMINAL = 'FEDEX_GROUND_TERMINAL',
        FEDEX_ONSITE = 'FEDEX_ONSITE',
    }
}

