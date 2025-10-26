/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransitTimeRequestedShipment_shipmentSpecialServices_holdAtLocationDetail_locationContactAndAddress } from './TransitTimeRequestedShipment_shipmentSpecialServices_holdAtLocationDetail_locationContactAndAddress';
/**
 * Use this object to specify required information of a shipment to be held at FedEx destination location. <br><br><i>Note: This object HoldAtLocationDetail is <b>REQUIRED</b>, when HOLD_AT_LOCATION is chosen in the specialServiceTypes.</i>
 */
export type TransitTimeRequestedShipment_shipmentSpecialServices_holdAtLocationDetail = {
    /**
     * This is an alphanumeric identifier used for Location/Facility Identification.<br><br>Example: YBZA<br><br>Note: <i><ul><li>For HAL Shipment, Location ID is <b>REQUIRED</b> to ensure packages are delivered to the right location.</li><li>Use endpoint [<b>Find Location</b>] in [<b>Location Search API</b>], to find the correct location ID for your shipment.</li></ul></i>
     */
    locationId: string;
    /**
     * Specify the Hold at location type.<br> Example: FEDEX_ONSITE
     */
    locationType?: TransitTimeRequestedShipment_shipmentSpecialServices_holdAtLocationDetail.locationType;
    locationContactAndAddress?: TransitTimeRequestedShipment_shipmentSpecialServices_holdAtLocationDetail_locationContactAndAddress;
};
export namespace TransitTimeRequestedShipment_shipmentSpecialServices_holdAtLocationDetail {
    /**
     * Specify the Hold at location type.<br> Example: FEDEX_ONSITE
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

