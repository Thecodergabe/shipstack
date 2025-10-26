/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Party } from './Party';
import type { RequestedPackageLineItem } from './RequestedPackageLineItem';
import type { RequestedShipmentFreightShipmentDetail } from './RequestedShipmentFreightShipmentDetail';
import type { RequestedShipmentVariableHandlingChargeDetail } from './RequestedShipmentVariableHandlingChargeDetail';
import type { RequestShipmentSpecialServicesRequested } from './RequestShipmentSpecialServicesRequested';
/**
 * shipment information for the shipment being requested
 */
export type RequestedShipment = {
    /**
     * Required. <br>Indicate the Shipper contact details for this shipment.
     */
    shipper: Party;
    /**
     * Specifies the recipient details, such as postal code, state or province code, and country code of the recipient. Note: At least one recipient is required.
     */
    recipient: Party;
    /**
     * Indicate the FedEx service type used for the shipment. The result will be filtered by the serviceType value indicated.If a serviceType is not indicated, then all the applicable services and corresponding rates will be returned.<br> Example: STANDARD_OVERNIGHT<br><a onclick='loadDocReference("servicetypes")'>Click here to see Service Types</a><br>
     */
    serviceType?: string;
    /**
     * Specifies packaging Type.<br><a onclick='loadDocReference("packagetypes")'>Click here to see Package Types</a>
     */
    packagingType: string;
    /**
     * Conditional. Used to filter results to a specific ship date if populated on the request. Value will be defaulted to the current date/time.<br>Format: [YYYY-MM-DDThh:mm:ssTZD]<br>Example: 2020-10-13T11:00:00TZD<br>Note:<br>1.The date format must be YYYY-MM-DDThh:mm:ssTZD.<br>2.The time must be in the format: HH:MM:SS using a 24-hour clock.<br>3.The date and time are separated by the letter T, such as 2015-03-25T09:30:00.<br>4.The time is local to the pickup postal code.<br>5.Do not include a TZD (time zone designator) as it will be ignored.<br>Example: 2019-11-15T11:00:00
     */
    shipDateStamp?: string;
    /**
     * Conditional.<br>Specifies the packaging type, weight, and dimensions of the package.  Applicable for  EXPRESS and GROUND but not for FREIGHT shipments.
     */
    requestedPackageLineItems: Array<RequestedPackageLineItem>;
    /**
     * Conditional <br> Required for Express and Ground, but optional for FREIGHT or SMARTPOST <br> Example: DROP_BOX
     */
    dropoffType?: RequestedShipment.dropoffType;
    variableHandlingChargeDetail?: RequestedShipmentVariableHandlingChargeDetail;
    freightShipmentDetail?: RequestedShipmentFreightShipmentDetail;
    specialServicesRequested?: RequestShipmentSpecialServicesRequested;
    /**
     * Indicate the pickup type method by which the shipment to be tendered to FedEx.<br><i>Note: The value of this element does not specify dispatching the courier for package pickup.</i><br><a onclick='loadDocReference("pickuptypes")'>Click here for more information on Pickup Types.</a>
     */
    pickupType?: RequestedShipment.pickupType;
    /**
     * Shipping Document Specification Details
     */
    shippingDocumentSpecification?: string;
};
export namespace RequestedShipment {
    /**
     * Conditional <br> Required for Express and Ground, but optional for FREIGHT or SMARTPOST <br> Example: DROP_BOX
     */
    export enum dropoffType {
        REGULAR_PICKUP = 'REGULAR_PICKUP',
        REQUEST_COURIER = 'REQUEST_COURIER',
        DROP_BOX = 'DROP_BOX',
        BUSINESS_SERVICE_CENTER = 'BUSINESS_SERVICE_CENTER',
        STATION = 'STATION',
    }
    /**
     * Indicate the pickup type method by which the shipment to be tendered to FedEx.<br><i>Note: The value of this element does not specify dispatching the courier for package pickup.</i><br><a onclick='loadDocReference("pickuptypes")'>Click here for more information on Pickup Types.</a>
     */
    export enum pickupType {
        CONTACT_FEDEX_TO_SCHEDULE = 'CONTACT_FEDEX_TO_SCHEDULE',
        DROPOFF_AT_FEDEX_LOCATION = 'DROPOFF_AT_FEDEX_LOCATION',
        USE_SCHEDULED_PICKUP = 'USE_SCHEDULED_PICKUP',
    }
}

