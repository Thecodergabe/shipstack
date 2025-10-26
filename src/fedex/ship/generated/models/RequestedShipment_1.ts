/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactAndAddress_1 } from './ContactAndAddress_1';
import type { CustomsClearanceDetail } from './CustomsClearanceDetail';
import type { ExpressFreightDetail } from './ExpressFreightDetail';
import type { LabelSpecification } from './LabelSpecification';
import type { MasterTrackingId } from './MasterTrackingId';
import type { Money } from './Money';
import type { Payment } from './Payment';
import type { PickupDetail } from './PickupDetail';
import type { RecipientsParty } from './RecipientsParty';
import type { RequestedPackageLineItem } from './RequestedPackageLineItem';
import type { ShipmentSpecialServicesRequested } from './ShipmentSpecialServicesRequested';
import type { ShipperParty } from './ShipperParty';
import type { ShippingDocumentSpecification } from './ShippingDocumentSpecification';
import type { ShipShipmentEMailNotificationDetail } from './ShipShipmentEMailNotificationDetail';
import type { SmartPostInfoDetail } from './SmartPostInfoDetail';
import type { SoldToParty } from './SoldToParty';
import type { VariableHandlingChargeDetail } from './VariableHandlingChargeDetail';
/**
 * The descriptive data of the requested shipment.
 */
export type RequestedShipment_1 = {
    /**
     * This is the shipment date. Default value is current date in case the date is not provided or a past date is provided.<br>Format [YYYY-MM-DD].<br>Example: 2019-10-14
     */
    shipDatestamp?: string;
    /**
     * It is the sum of all declared values of all packages in a shipment. The amount of totalDeclaredValue must be equal to the sum of all the individual declaredValues in the shipment. The declaredValue and totalDeclaredValue must match in all currencies in one shipment. This value represents FedEx maximum liability associated with a shipment. This is including, but not limited to any loss, damage, delay, misdelivery, any failure to provide information, or misdelivery of information related to the Shipment.<br><i>Note: The totalDeclaredValue should not exceed customsValue.</i>
     */
    totalDeclaredValue?: Money;
    /**
     * Indicate the Shipper contact details for this shipment.
     */
    shipper: ShipperParty;
    /**
     * Indicate the descriptive data for the recipient location to which the shipment is to be received.
     */
    recipients: Array<RecipientsParty>;
    pickupDetail?: PickupDetail;
    /**
     * Will indicate the party responsible for purchasing the goods shipped from the shipper to the recipient. The sold to party is not necessarily the recipient or the importer of record. The sold to party is relevant when the purchaser, rather than the recipient determines when certain customs regulations apply.
     */
    soldTo?: SoldToParty;
    /**
     * A unique identifier for a recipient location.<br>Example:1234567
     */
    recipientLocationNumber?: string;
    /**
     * Indicates if shipment is being dropped off at a FedEx location or being picked up by FedEx or if it's a regularly scheduled pickup for this shipment. Required for FedEx Express and Ground Shipment.<br>Example: USE_SCHEDULED_PICKUP
     */
    pickupType: RequestedShipment_1.pickupType;
    /**
     * Indicate the FedEx service type used for this shipment.<br>Example: STANDARD_OVERNIGHT<br><a onclick='loadDocReference("servicetypes")'>click here to see Service Types</a>
     */
    serviceType: string;
    /**
     * Specify the packaging used.<br>Note: For Express Freight shipments, the packaging will default to YOUR_PACKAGING irrespective of the user provided package type in the request.<br>Example: FEDEX_PAK<br><a onclick='loadDocReference("packagetypes")'>click here to see Package Types</a>
     */
    packagingType: string;
    /**
     * Indicate the shipment total weight in pounds.<br>Example: 10.6<br>Note: <ul><li>This only applies to International shipments and should be used on the first package of a multiple piece shipment.</li><li>This value contains 1 explicit decimal position.</li><li>For one Label at a time shipments, the unit of totalWeight is considered same as the unit of weight provided in requestedPackageLineItem field.</li></ul>
     */
    totalWeight: number;
    /**
     * Indicate shipment origin address information, if it is different from the shipper address.
     */
    origin?: ContactAndAddress_1;
    shippingChargesPayment: Payment;
    shipmentSpecialServices?: ShipmentSpecialServicesRequested;
    emailNotificationDetail?: ShipShipmentEMailNotificationDetail;
    expressFreightDetail?: ExpressFreightDetail;
    variableHandlingChargeDetail?: VariableHandlingChargeDetail;
    customsClearanceDetail?: CustomsClearanceDetail;
    smartPostInfoDetail?: SmartPostInfoDetail;
    /**
     * If true, only the shipper/payer will have visibility of this shipment.<br>Valid Value : true, false.<br> Default:false<br>Example: true
     */
    blockInsightVisibility?: boolean;
    labelSpecification: LabelSpecification;
    shippingDocumentSpecification?: ShippingDocumentSpecification;
    /**
     * Indicate the type of rates to be returned. The account specific rates are returned by default if the account number is specified in the request.<br>Following are values:<ul><li>LIST - Returns FedEx published list rates in addition to account-specific rates (if applicable).</li><li>INCENTIVE - This is one-time discount for incentivising the customer. For more information, contact your FedEx representative.</li><li>ACCOUNT - Returns account specific rates (Default).</li><li>PREFERRED - Returns rates in the preferred currency specified in the element preferredCurrency.</li><li>RETAIL - Returns customer rate from one of retail FedEx service centers.</li></ul>Examples: ["ACCOUNT", "PREFERRED"]
     */
    rateRequestType?: Array<'LIST' | 'NONE' | 'PREFERRED' | 'ACCOUNT' | 'INCENTIVE' | 'RETAIL'>;
    /**
     * Indicate the currency the caller requests to have used in all returned monetary values. Should be Used in conjunction with the element RateRequestType.<br>Example: USD<br><a onclick='loadDocReference("currencycodes")'>click here to see available Currency codes</a><br>Note: Incorrect currency codes should not be supplied. The system ignores the incorrect currency code.
     */
    preferredCurrency?: string;
    /**
     * For an MPS, this is the total number of packages in the shipment.Applicable for parent shipment for one label at a time shipments. <br>Example: 25
     */
    totalPackageCount?: number;
    masterTrackingId?: MasterTrackingId;
    /**
     * These are one or more package-attribute descriptions, each of which describes an individual package, a group of identical packages, or (for the total-piece-total-weight case) common characteristics of all packages in the shipment.<ul><li>At least one instance containing the weight for at least one package is required for EXPRESS and GROUND shipments.</li><li>Single piece requests will have one RequestedPackageLineItem.</li><li>Multiple piece requests will have multiple RequestedPackageLineItems.</li><li>Maximum occurrences is 30.</li></ul>
     */
    requestedPackageLineItems: Array<RequestedPackageLineItem>;
};
export namespace RequestedShipment_1 {
    /**
     * Indicates if shipment is being dropped off at a FedEx location or being picked up by FedEx or if it's a regularly scheduled pickup for this shipment. Required for FedEx Express and Ground Shipment.<br>Example: USE_SCHEDULED_PICKUP
     */
    export enum pickupType {
        CONTACT_FEDEX_TO_SCHEDULE = 'CONTACT_FEDEX_TO_SCHEDULE',
        DROPOFF_AT_FEDEX_LOCATION = 'DROPOFF_AT_FEDEX_LOCATION',
        USE_SCHEDULED_PICKUP = 'USE_SCHEDULED_PICKUP',
    }
}

