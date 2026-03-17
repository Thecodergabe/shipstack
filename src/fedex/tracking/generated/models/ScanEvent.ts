/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressVO1 } from './AddressVO1';
import type { DelayDetail } from './DelayDetail';
/**
 * FedEx scanning event information for a package.<br><a onclick='loadDocReference("trackservicescancodes")'>Click here to see Track Service Scan Codes.</a>
 */
export type ScanEvent = {
    /**
     * Date and time of the scan event.<br> Example: '2018-02-02T12:01:00-07:00'
     */
    date?: string;
    /**
     * Field which holds status description of the track information for the scan event.<br> Example: 'Picked Up'
     */
    derivedStatus?: string;
    /**
     * Location Details for the FedEx facility where the scan event occurred.
     */
    scanLocation?: AddressVO1;
    /**
     * Location Identification for facilities identified by an alpha numeric location code. Passing Location Id of the Hold at Location (HAL) address is strongly recommended to ensure packages are delivered to the correct address.<br> Example: SEA
     */
    locationId?: string;
    /**
     * This field holds Location Type. If  Location Type not available we will get empty value
     */
    locationType?: ScanEvent.locationType;
    /**
     * Field which holds the text description for the exception if the event was an exception .<br>Example: Package available for clearance
     */
    exceptionDescription?: string;
    /**
     * Field which holds the text description of the scan event.<br> Example: 'Picked Up'
     */
    eventDescription?: string;
    /**
     * Field which holds the code identifying the type of scan event.<br> Example: 'PU'
     */
    eventType?: string;
    /**
     * Field which holds status code of the track information for the scan event.<br> Example: 'PU'
     */
    derivedStatusCode?: string;
    /**
     * Field which holds the code identifier for the exception if the event was an exception. <br> Example: A25
     */
    exceptionCode?: string;
    delayDetail?: DelayDetail;
};
export namespace ScanEvent {
    /**
     * This field holds Location Type. If  Location Type not available we will get empty value
     */
    export enum locationType {
        AIRPORT = 'AIRPORT',
        CUSTOMS_BROKER = 'CUSTOMS_BROKER',
        CUSTOMER = 'CUSTOMER',
        DELIVERY_LOCATION = 'DELIVERY_LOCATION',
        DESTINATION_AIRPORT = 'DESTINATION_AIRPORT',
        DROP_BOX = 'DROP_BOX',
        DESTINATION_FEDEX_FACILITY = 'DESTINATION_FEDEX_FACILITY',
        ENROUTE = 'ENROUTE',
        FEDEX_FACILITY = 'FEDEX_FACILITY',
        INTERLINE_CARRIER = 'INTERLINE_CARRIER',
        FEDEX_OFFICE_LOCATION = 'FEDEX_OFFICE_LOCATION',
        NON_FEDEX_FACILITY = 'NON_FEDEX_FACILITY',
        ORIGIN_AIRPORT = 'ORIGIN_AIRPORT',
        ORIGIN_FEDEX_FACILITY = 'ORIGIN_FEDEX_FACILITY',
        PORT_OF_ENTRY = 'PORT_OF_ENTRY',
        PICKUP_LOCATION = 'PICKUP_LOCATION',
        PLANE = 'PLANE',
        SORT_FACILITY = 'SORT_FACILITY',
        SHIP_AND_GET_LOCATION = 'SHIP_AND_GET_LOCATION',
        TURNPOINT = 'TURNPOINT',
        VEHICLE = 'VEHICLE',
    }
}

