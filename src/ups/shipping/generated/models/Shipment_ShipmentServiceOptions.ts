/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipmentServiceOptions_AccessPointCOD } from './ShipmentServiceOptions_AccessPointCOD';
import type { ShipmentServiceOptions_COD } from './ShipmentServiceOptions_COD';
import type { ShipmentServiceOptions_DeliveryConfirmation } from './ShipmentServiceOptions_DeliveryConfirmation';
import type { ShipmentServiceOptions_InternationalForms } from './ShipmentServiceOptions_InternationalForms';
import type { ShipmentServiceOptions_LabelDelivery } from './ShipmentServiceOptions_LabelDelivery';
import type { ShipmentServiceOptions_LabelMethod } from './ShipmentServiceOptions_LabelMethod';
import type { ShipmentServiceOptions_Notification } from './ShipmentServiceOptions_Notification';
import type { ShipmentServiceOptions_PreAlertNotification } from './ShipmentServiceOptions_PreAlertNotification';
import type { ShipmentServiceOptions_RestrictedArticles } from './ShipmentServiceOptions_RestrictedArticles';
/**
 * Container for Shipment Service Options.
 */
export type Shipment_ShipmentServiceOptions = {
    /**
     * Saturday delivery indicator. The presence indicates Saturday delivery is requested and the absence indicates Saturday delivery is not requested.  This is an empty tag, any value inside is ignored.
     */
    SaturdayDeliveryIndicator?: string;
    /**
     * Saturday pickup indicator. The presence indicates Saturday pickup is requested and the absence indicates Saturday pickup is not requested.  This is an empty tag, any value inside is ignored.
     */
    SaturdayPickupIndicator?: string;
    COD?: ShipmentServiceOptions_COD;
    AccessPointCOD?: ShipmentServiceOptions_AccessPointCOD;
    /**
     * Presence/Absence Indicator. Any value inside is ignored. DeliverToAddresseeOnlyIndicator is shipper specified restriction that requires the addressee to be the one who takes final delivery of the "Hold For PickUp at UPS Access Point" package. Presence of indicator means shipper restriction will apply to the shipment.  Only valid for Shipment Indication type "01 - Hold For PickUp at UPS Access Point".
     */
    DeliverToAddresseeOnlyIndicator?: string;
    /**
     * Presence/Absence Indicator. Any value inside is ignored. Direct Delivery Only (DDO) accessorial in a request would ensure that delivery is made only to the ship to address on the shipping label. This accessorial is not valid with Shipment Indication Type "01 - Hold For Pickup At UPS Access Point" and "02 - UPS Access Point™ Delivery".
     */
    DirectDeliveryOnlyIndicator?: string;
    Notification?: Array<ShipmentServiceOptions_Notification>;
    LabelDelivery?: ShipmentServiceOptions_LabelDelivery;
    InternationalForms?: ShipmentServiceOptions_InternationalForms;
    DeliveryConfirmation?: ShipmentServiceOptions_DeliveryConfirmation;
    /**
     * The flag indicates the ReturnOfDocument accessorial has been requested.  Valid for Poland to Poland forward shipment only.
     */
    ReturnOfDocumentIndicator?: string;
    /**
     * Indicates that the Shipment is an ImportControl shipment.
     */
    ImportControlIndicator?: string;
    LabelMethod?: ShipmentServiceOptions_LabelMethod;
    /**
     * CommercialInvoiceRemovalIndicator allows a shipper to dictate UPS to remove the Commercial Invoice from the user's shipment before the shipment is delivered to the ultimate consignee.
     */
    CommercialInvoiceRemovalIndicator?: string;
    /**
     * UPS carbon neutral indicator presence at shipment level is required to create carbon neutral Shipments.
     */
    UPScarbonneutralIndicator?: string;
    PreAlertNotification?: Array<ShipmentServiceOptions_PreAlertNotification>;
    /**
     * Exchange forward indicator presence at shipment level is required to create exchange forward Shipments.  In the label routing Instruction text will be defaulted to "EXCHANGE-LIKE ITEM ONLY".
     */
    ExchangeForwardIndicator?: string;
    /**
     * Hold For Pickup indicator. The empty tag means indicator is present.  This accessorial is only valid for UPS Worldwide Express Freight and UPS Worldwide Express Freight Midday Shipment.
     */
    HoldForPickupIndicator?: string;
    /**
     * Drop off At UPS Facility indicator. The empty tag means indicator is present.  This accessorial is only valid for UPS Worldwide Express Freight and UPS Worldwide Express Freight Midday Shipment.
     */
    DropoffAtUPSFacilityIndicator?: string;
    /**
     * Lift Gate For Pick Up indicator. The empty tag means indicator is present.  Lift Gate for Pickup is not allowed with Drop Off At UPS Facility for a UPS Worldwide Express Freight and UPS Worldwide Express Freight Midday shipment.
     *
     * When both Hold for Pickup and Drop Off At Facility are selected, neither of the Lift Gate accessorial (Pick Up or Delivery) are allowed for a UPS Worldwide Express Freight and UPS Worldwide Express Freight Midday shipment.
     *
     * This accessorial is only valid for UPS Worldwide Express Freight and UPS Worldwide Express Freight Midday Shipment.
     */
    LiftGateForPickUpIndicator?: string;
    /**
     * Lift Gate For Delivery indicator. The empty tag means indicator is present.  Lift Gate for Delivery is not allowed with Hold For Pickup for a UPS Worldwide Express Freight and UPS Worldwide Express Freight Midday shipment.
     *
     * When both Hold for Pickup and Drop Off At UPS Facility are selected, neither of the Lift Gate accessorial (Pick Up or Delivery) are allowed for a UPS Worldwide Express Freight and UPS Worldwide Express Freight Midday shipment.
     *
     * This accessorial is only valid for UPS Worldwide Express Freight and UPS Worldwide Express Freight Midday Shipment.
     */
    LiftGateForDeliveryIndicator?: string;
    /**
     * The presence of the tag SDLShipmentIndicator indicates Shipment is SDL. SDLShipmentIndicator presence means EEI form/ EEI Filing option required.
     */
    SDLShipmentIndicator?: string;
    /**
     * Package Release code allows the consignee or claimant to pick-up a package at a UPS Access Point™. The shipper must provide the Package Release Code to the consignee so that they can provide the code to the UPS Access Point personnel as another item for authentication before the package is released to them. Package Release Code is only valid with ShipmentIndicationType 01 - Hold for Pickup at UPS Access Point™.  The release code must be between length 4 and 6 and only contain numbers.
     */
    EPRAReleaseCode?: string;
    RestrictedArticles?: ShipmentServiceOptions_RestrictedArticles;
    /**
     * Inside delivery accessory. Valid values:
     * 01 - White Glove,
     * 02 - Room of Choice,
     * 03 - Installation,
     * 04 - Over Threshold Fee.
     * Default is Room of Choice.  Shippers account needs to have a valid contract for Heavy Goods Service.
     */
    InsideDelivery?: string;
    /**
     * Presence/Absence indicator. True if present; false otherwise. Any value is ignored. If present, indicates that the customer would like items disposed.  Shippers account needs to have a valid contract for Heavy Goods Service.
     */
    ItemDisposal?: string;
};

