/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PickupDetail } from './PickupDetail';
import type { RateParty } from './RateParty';
import type { RequestedPackageLineItem } from './RequestedPackageLineItem';
import type { RequestedShipmentCustomsClearanceDetail } from './RequestedShipmentCustomsClearanceDetail';
import type { RequestedShipmentSmartPostInfoDetail } from './RequestedShipmentSmartPostInfoDetail';
import type { RequestedShipmentSpecialServicesRequested } from './RequestedShipmentSpecialServicesRequested';
import type { VariableHandlingChargeDetail } from './VariableHandlingChargeDetail';
/**
 * This is shipment data for which a rate quote (or rate-shipping comparison) is requested.
 */
export type RequestedShipment = {
    /**
     * The descriptive data for the physical shipper location from which the shipment originates.
     */
    shipper: RateParty;
    pickupDetail?: PickupDetail;
    /**
     * Indicate the descriptive data for the recipient location to which the shipment is to be received.
     */
    recipient: RateParty;
    /**
     * Indicate the FedEx service type used for this shipment. The results will be filtered by the service type value indicated. If no serviceType is indicated then all the applicable services and corresponding rates will be returned.<br>Example: STANDARD_OVERNIGHT<br><a onclick='loadDocReference("servicetypes")'>Click here to see Service Types</a>
     */
    serviceType?: string;
    /**
     * Indicate the currency the caller requests to have used in all returned monetary values (when a choice is possible). Used in conjunction with the rateRequestType data element. This element is used to pull Preferred rates.<br>Example: USD<br><a onclick='loadDocReference("currencycodes")'> Click here to see Currency Codes</a>
     */
    preferredCurrency?: string;
    /**
     * Indicate the type of rates to be returned.<br>Following are values:<ul><li>LIST - Returns FedEx published list rates in addition to account-specific rates (if applicable).</li><li>PREFERRED - Returns rates in the preferred currency specified in the element preferredCurrency.</li><li>ACCOUNT - Returns account specific rates (Default).</li><li>INCENTIVE - This is one-time discount for incentivising the customer. For more information, contact your FedEx representative.</li></ul>Examples: ["LIST","PREFERRED"]
     */
    rateRequestType?: Array<'LIST' | 'INCENTIVE' | 'ACCOUNT' | 'PREFERRED'>;
    /**
     *  This is shipment date. Both the date and time portions of the string are expected to be used. The date should not be a past date or a date more than 10 days in the future. The time is the local time of the shipment based on the shipper's time zone.<br>Required Format is YYYY-MM-DD<br> Example: 2019-09-05
     */
    shipDateStamp?: string;
    /**
     * Indicate the pickup type method by which the shipment to be tendered to FedEx.<br><a onclick='loadDocReference("pickuptypes")'>Click here for more information on Pickup Types.</a>
     */
    pickupType: RequestedShipment.pickupType;
    /**
     * These are one or more package-attribute descriptions, each of which describes an individual package, a group of identical packages, or (for the total-piece-total-weight case) common characteristics of all packages in the shipment.<ul><li>At least one instance containing the weight for at least one package is required for EXPRESS and GROUND shipments.</li><li>Not used for FREIGHT.</li><li>Single piece requests will have one RequestedPackageLineItem.</li><li>Multiple piece requests will have multiple RequestedPackageLineItems.</li><li>Maximum occurrences is 99.</li></ul>
     */
    requestedPackageLineItems: Array<RequestedPackageLineItem>;
    /**
     * Indicate whether or not its a document Shipment.
     */
    documentShipment?: boolean;
    /**
     * contains the detail used to calculate a variable handling charge, a potentially non-fixed handling surcharge. Based on if there is a percent value, or a fixed amount, the charge can either be fixed or percents based.
     */
    variableHandlingChargeDetail?: VariableHandlingChargeDetail;
    /**
     * This is the Packaging type associated with this rate. For Ground/SmartPost,it  will always be YOUR_PACKAGING. For domestic Express, the packaging may have been bumped so it may not match the value specified on the request. For International Express the packaging may be bumped and not mapped.<br><a onclick='loadDocReference("packagetypes")'>Click here to see Package Types</a>
     */
    packagingType?: string;
    /**
     * Indicate the total number of packages in the shipment. <br>The Maximum number of packages in a rate request is 100.
     */
    totalPackageCount?: number;
    /**
     * Specify the total weight of the shipment. <br>This is only applies to International shipments and should be used on the first package of a multiple piece shipment. This value contains 1 explicit decimal position.
     */
    totalWeight?: number;
    shipmentSpecialServices?: RequestedShipmentSpecialServicesRequested;
    customsClearanceDetail?: RequestedShipmentCustomsClearanceDetail;
    smartPostInfoDetail?: RequestedShipmentSmartPostInfoDetail;
};
export namespace RequestedShipment {
    /**
     * Indicate the pickup type method by which the shipment to be tendered to FedEx.<br><a onclick='loadDocReference("pickuptypes")'>Click here for more information on Pickup Types.</a>
     */
    export enum pickupType {
        CONTACT_FEDEX_TO_SCHEDULE = 'CONTACT_FEDEX_TO_SCHEDULE',
        DROPOFF_AT_FEDEX_LOCATION = 'DROPOFF_AT_FEDEX_LOCATION',
        USE_SCHEDULED_PICKUP = 'USE_SCHEDULED_PICKUP',
    }
}

