/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Party } from './Party';
import type { Party_Shipper } from './Party_Shipper';
import type { RequestedPackageLineItem } from './RequestedPackageLineItem';
import type { RequestedShipmentFreightShipmentDetail } from './RequestedShipmentFreightShipmentDetail';
import type { RequestShipmentSpecialServicesRequested } from './RequestShipmentSpecialServicesRequested';
export type PackageAndOptionsRequestedShipment_2 = {
    shipper: Party_Shipper;
    /**
     * Specifies the recipient details, such as postal code, state or province code, and country code of the recipient. Note: At least one recipient is required.
     */
    recipients: Array<Party>;
    /**
     * Required.<br>Specify the Shipment date. Required for future ship date. Default is current date if not indicated or date is in the past. <br>Format is YYYY-MM-DD.<br>Example: 2019-09-06
     */
    shipDateStamp?: string;
    /**
     * These are one or more package-attribute descriptions, each of which describes an individual package, a group of identical packages, or (for the total-piece-total-weight case) common characteristics of all packages in the shipment.<ul><li>At least one instance containing the weight for at least one package is required for EXPRESS and GROUND shipments.</li><li>Not used for FREIGHT.</li><li>Single piece requests will have one RequestedPackageLineItem.</li><li>Multiple piece requests will have multiple RequestedPackageLineItems.</li><li>Maximum occurrences is 99.</li></ul>
     */
    requestedPackageLineItems?: Array<RequestedPackageLineItem>;
    freightShipmentDetail?: RequestedShipmentFreightShipmentDetail;
    specialServicesRequested?: RequestShipmentSpecialServicesRequested;
    /**
     * Conditional Required for Express and Ground, but optional for FREIGHT or SMARTPOST.<br>Indicate the pickup type method by which the shipment yo be tendered to FedEx.<br><i>Note: The value of this element does not specify dispatching the courier for package pickup.</i><br><a onclick='loadDocReference("pickuptypes")'>Click here for more information on Pickup Types.</a><br>Note:For services like FedEx International Connect Plus(FICP) & Regional Economy(RE)/Regional Economy Freight(REF) pickupType is mandatory.
     */
    pickupType?: PackageAndOptionsRequestedShipment_2.pickupType;
};
export namespace PackageAndOptionsRequestedShipment_2 {
    /**
     * Conditional Required for Express and Ground, but optional for FREIGHT or SMARTPOST.<br>Indicate the pickup type method by which the shipment yo be tendered to FedEx.<br><i>Note: The value of this element does not specify dispatching the courier for package pickup.</i><br><a onclick='loadDocReference("pickuptypes")'>Click here for more information on Pickup Types.</a><br>Note:For services like FedEx International Connect Plus(FICP) & Regional Economy(RE)/Regional Economy Freight(REF) pickupType is mandatory.
     */
    export enum pickupType {
        CONTACT_FEDEX_TO_SCHEDULE = 'CONTACT_FEDEX_TO_SCHEDULE',
        DROPOFF_AT_FEDEX_LOCATION = 'DROPOFF_AT_FEDEX_LOCATION',
        USE_SCHEDULED_PICKUP = 'USE_SCHEDULED_PICKUP',
    }
}

