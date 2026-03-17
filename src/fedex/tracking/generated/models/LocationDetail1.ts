/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactAndAddress1 } from './ContactAndAddress1';
/**
 * Location details for the fedex facility.
 */
export type LocationDetail1 = {
    /**
     * Location Identification for facilities identified by an alpha numeric location code. Passing Location Id of the Hold at Location (HAL) address is strongly recommended to ensure packages are delivered to the correct address.<br> Example: SEA
     */
    locationId?: string;
    locationContactAndAddress?: ContactAndAddress1;
    /**
     * This field holds FedEx Location Type. If  Location Type not available we will get empty value.
     */
    locationType?: LocationDetail1.locationType;
};
export namespace LocationDetail1 {
    /**
     * This field holds FedEx Location Type. If  Location Type not available we will get empty value.
     */
    export enum locationType {
        FEDEX_AUTHORIZED_SHIP_CENTER = 'FEDEX_AUTHORIZED_SHIP_CENTER',
        FEDEX_OFFICE = 'FEDEX_OFFICE',
        FEDEX_SELF_SERVICE_LOCATION = 'FEDEX_SELF_SERVICE_LOCATION',
        FEDEX_GROUND_TERMINAL = 'FEDEX_GROUND_TERMINAL',
        FEDEX_ONSITE = 'FEDEX_ONSITE',
        FEDEX_EXPRESS_STATION = 'FEDEX_EXPRESS_STATION',
        FEDEX_FACILITY = 'FEDEX_FACILITY',
        FEDEX_FREIGHT_SERVICE_CENTER = 'FEDEX_FREIGHT_SERVICE_CENTER',
        FEDEX_HOME_DELIVERY_STATION = 'FEDEX_HOME_DELIVERY_STATION',
        FEDEX_SHIP_AND_GET = 'FEDEX_SHIP_AND_GET',
        FEDEX_SHIPSITE = 'FEDEX_SHIPSITE',
        FEDEX_SMART_POST_HUB = 'FEDEX_SMART_POST_HUB',
    }
}

