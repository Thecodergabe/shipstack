/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactAndAddress } from './ContactAndAddress';
/**
 * Use this object to specify required information of a shipment to be held at FedEx destination location. <br><br><i>Note: This object HoldAtLocationDetail is <b>REQUIRED</b>, when HOLD_AT_LOCATION is chosen in the specialServiceTypes.</i>
 */
export type HoldAtLocationDetail = {
    /**
     * This is an alphanumeric identifier used for Location/Facility Identification.<br><br>Example: YBZA<br><br>Note: <i><ul><li>For HAL Shipment, Location ID is <b>REQUIRED</b> to ensure packages are delivered to the right location.</li><li>Use endpoint [<b>Find Location</b>] in [<b>Location Search API</b>], to find the correct location ID for your shipment.</li></ul></i>
     */
    locationId?: string;
    locationContactAndAddress?: ContactAndAddress;
    /**
     * Type of facility at which package/shipment is to be held.<br> Example: FEDEX_ONSITE
     */
    locationType: HoldAtLocationDetail.locationType;
};
export namespace HoldAtLocationDetail {
    /**
     * Type of facility at which package/shipment is to be held.<br> Example: FEDEX_ONSITE
     */
    export enum locationType {
        FEDEX_AUTHORIZED_SHIP_CENTER = 'FEDEX_AUTHORIZED_SHIP_CENTER',
        FEDEX_OFFICE = 'FEDEX_OFFICE',
        FEDEX_SELF_SERVICE_LOCATION = 'FEDEX_SELF_SERVICE_LOCATION',
        FEDEX_STAFFED = 'FEDEX_STAFFED',
        RETAIL_ALLICANCE_LOCATION = 'RETAIL_ALLICANCE_LOCATION',
        FEDEX_GROUND_TERMINAL = 'FEDEX_GROUND_TERMINAL',
        FEDEX_ONSITE = 'FEDEX_ONSITE',
        FEDEX_SHIP_AND_GET = 'FEDEX_SHIP_AND_GET',
    }
}

