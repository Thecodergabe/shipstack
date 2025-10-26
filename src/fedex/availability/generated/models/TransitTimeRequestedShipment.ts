/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransitTimeRecipient } from './TransitTimeRecipient';
import type { TransitTimeRequestedPackageLineItem } from './TransitTimeRequestedPackageLineItem';
import type { TransitTimeRequestedShipment_customsClearanceDetail } from './TransitTimeRequestedShipment_customsClearanceDetail';
import type { TransitTimeRequestedShipment_shipmentSpecialServices } from './TransitTimeRequestedShipment_shipmentSpecialServices';
import type { TransitTimeRequestedShipment_shipper } from './TransitTimeRequestedShipment_shipper';
import type { TransitTimeShippingChargesPayment } from './TransitTimeShippingChargesPayment';
/**
 * Provide shipment data details for which a transit time is desired.
 */
export type TransitTimeRequestedShipment = {
    shipper: TransitTimeRequestedShipment_shipper;
    /**
     * Provide recipients physical location/address details to where the shipment delivered.
     */
    recipients: Array<TransitTimeRecipient>;
    /**
     * Provide FedEx service type for the shipment. The results will be filtered by the serviceType value indicated.  If no serviceType is indicated then all the applicable services and corresponding transit times will be returned.<br>Example: STANDARD_OVERNIGHT<br><a onclick='loadDocReference("servicetypes")'>Click here to see Service Types</a>
     */
    serviceType?: string;
    /**
     * Specify the packaging used.
     */
    packagingType: string;
    /**
     * This is the Shipment date. Required for future ship date rates.Default is current date if not indicated or date is in the past.<br>Required Format is YYYY-MM-DD <br> example : 2019-09-01
     */
    shipDatestamp?: string;
    /**
     * Indicate the pickup type method by which the shipment to be tendered to FedEx.<br><i>Note: The value of this element does not specify dispatching the courier for package pickup.</i><br><a onclick='loadDocReference("pickuptypes")'>Click here for more information on Pickup Types.</a><br>Note:For services like FedEx International Connect Plus(FICP) & Regional Economy(RE)/Regional Economy Freight(REF) pickupType is mandatory.
     */
    pickupType?: TransitTimeRequestedShipment.pickupType;
    shippingChargesPayment?: TransitTimeShippingChargesPayment;
    /**
     * One or more package-attribute descriptions, each of which describes an individual package, a group of identical packages, or (for the total-piece-total-weight case) common characteristics of all packages in the shipment.<br>At least one array instance containing the weight for at least one package is required for EXPRESS and GROUND shipments.  Not used for FREIGHT.<br>Single piece requests will have one RequestedPackageLineItem.<br>Multiple piece requests will have multiple RequestedPackageLineItems.<br> Maximum occurrences is 99.
     */
    requestedPackageLineItems: Array<TransitTimeRequestedPackageLineItem>;
    shipmentSpecialServices?: TransitTimeRequestedShipment_shipmentSpecialServices;
    customsClearanceDetail?: TransitTimeRequestedShipment_customsClearanceDetail;
};
export namespace TransitTimeRequestedShipment {
    /**
     * Indicate the pickup type method by which the shipment to be tendered to FedEx.<br><i>Note: The value of this element does not specify dispatching the courier for package pickup.</i><br><a onclick='loadDocReference("pickuptypes")'>Click here for more information on Pickup Types.</a><br>Note:For services like FedEx International Connect Plus(FICP) & Regional Economy(RE)/Regional Economy Freight(REF) pickupType is mandatory.
     */
    export enum pickupType {
        CONTACT_FEDEX_TO_SCHEDULE = 'CONTACT_FEDEX_TO_SCHEDULE',
        DROPOFF_AT_FEDEX_LOCATION = 'DROPOFF_AT_FEDEX_LOCATION',
        USE_SCHEDULED_PICKUP = 'USE_SCHEDULED_PICKUP',
    }
}

