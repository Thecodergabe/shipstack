/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactAndAddress_Verify } from './ContactAndAddress_Verify';
import type { CustomsClearanceDetail } from './CustomsClearanceDetail';
import type { EMailNotificationDetail } from './EMailNotificationDetail';
import type { LabelSpecification } from './LabelSpecification';
import type { Payment } from './Payment';
import type { RecipientsParty } from './RecipientsParty';
import type { RequestedPackageLineItem } from './RequestedPackageLineItem';
import type { RequestedShipmentVerify_shipmentSpecialServices } from './RequestedShipmentVerify_shipmentSpecialServices';
import type { ShipperParty } from './ShipperParty';
import type { ShippingDocumentSpecification } from './ShippingDocumentSpecification';
import type { SmartPostInfoDetail } from './SmartPostInfoDetail';
import type { VariableHandlingChargeDetail } from './VariableHandlingChargeDetail';
/**
 * This is the detailed shipment request data to be validated before being submitted to FedEx.
 */
export type RequestedShipmentVerify = {
    /**
     * Indicate the shipment date.<br>Format: YYYY-MM-DD<br>Note: Default value is current date in case the date is not provided in the request.<br>Example: 2021-04-06
     */
    shipDatestamp?: string;
    /**
     * Select if the shipment is to be dropped off at Fedex location or to be picked up by FedEx or if it is a scheduled pickup for this shipment.<br><a onclick='loadDocReference("pickuptypes")'>Click here for more information on Pickup Types.</a>
     */
    pickupType: RequestedShipmentVerify.pickupType;
    /**
     * Indicate the FedEx service Type used for this shipment.<br>Example: STANDARD_OVERNIGHT<br><a onclick='loadDocReference("servicetypes")'>click here to see available FedEx Service Types</a>
     */
    serviceType: string;
    /**
     * Indicate the type of packaging used for the package.<br>Note: For Express Freight shipments, the packaging will default to value  YOUR_PACKAGING irrespective type provided in the request.<br>Example: FEDEX_ENVELOPE<br><a onclick='loadDocReference("packagetypes")'>click here to see Package Types</a>
     */
    packagingType: string;
    /**
     * shipment total weight should be in Kg or in Lbs
     */
    totalWeight: number;
    /**
     * Indicate shippers details. <br>Note: Shipper address and Origin address should be the same address.
     */
    shipper: ShipperParty;
    /**
     * Indicate the shipment recipient details or the physical location details for the package destination.
     */
    recipients: Array<RecipientsParty>;
    /**
     * Indicate the shipment origin address information, if it is different from the shippers address.
     */
    origin?: ContactAndAddress_Verify;
    shippingChargesPayment: Payment;
    shipmentSpecialServices?: RequestedShipmentVerify_shipmentSpecialServices;
    emailNotificationDetail?: EMailNotificationDetail;
    variableHandlingChargeDetail?: VariableHandlingChargeDetail;
    customsClearanceDetail?: CustomsClearanceDetail;
    smartPostInfoDetail?: SmartPostInfoDetail;
    /**
     * Indicate if the shipment be available to be visible/tracked using FedEx InSight® tool. If value indicated as true, only the shipper/payer will have visibility of this shipment in the said tool.
     */
    blockInsightVisibility?: boolean;
    labelSpecification: LabelSpecification;
    shippingDocumentSpecification?: ShippingDocumentSpecification;
    /**
     * Indicate the type of rates to be returned.<br>Following are values:<ul><li>LIST - Returns published list rates will be returned in addition to account-specific rate (if applicable).</li><li>PREFERRED - It returns rates in currency as specified in the PreferredCurrency element.</li><li>ACCOUNT - Returns account specific rates. Note: The account specific rates are returned by default if the shipper account number is specified in the shipment.</li><li>INCENTIVE - This is one-time discount for incentivizing the customer.</li></ul>Examples: ["ACCOUNT", "PREFERRED"]
     */
    rateRequestType?: Array<'LIST' | 'NONE' | 'PREFERRED' | 'ACCOUNT' | 'INCENTIVE' | 'RETAIL'>;
    /**
     * Indicate the currency the caller requests to have used in all returned monetary values. Should be Used in conjunction with the element RateRequestType.<br>Example: USD<br><a onclick='loadDocReference("currencycodes")'>click here to see available Currency codes</a><br>Note: Incorrect currency codes should not be supplied. The system ignores the incorrect currency code.
     */
    preferredCurrency?: string;
    /**
     * Use this object to provide the package details.<br>Note: <ul><li>At least one instance containing the weight is required for EXPRESS and GROUND package.</li><li>Only Single piece requests are supported henceonly one line item should be provided.</li><li>Multiple piece shipment validation is not supported.</li></ul>
     */
    requestedPackageLineItems: Array<RequestedPackageLineItem>;
};
export namespace RequestedShipmentVerify {
    /**
     * Select if the shipment is to be dropped off at Fedex location or to be picked up by FedEx or if it is a scheduled pickup for this shipment.<br><a onclick='loadDocReference("pickuptypes")'>Click here for more information on Pickup Types.</a>
     */
    export enum pickupType {
        CONTACT_FEDEX_TO_SCHEDULE = 'CONTACT_FEDEX TO_SCHEDULE',
        DROPOFF_AT_FEDEX_LOCATION = 'DROPOFF_AT_FEDEX_LOCATION',
        USE_SCHEDULED_PICKUP = 'USE_SCHEDULED_PICKUP',
    }
}

