/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipmentServiceOptions_AccessPointCOD } from './ShipmentServiceOptions_AccessPointCOD';
import type { ShipmentServiceOptions_COD } from './ShipmentServiceOptions_COD';
import type { ShipmentServiceOptions_DeliveryConfirmation } from './ShipmentServiceOptions_DeliveryConfirmation';
import type { ShipmentServiceOptions_DeliveryOptions } from './ShipmentServiceOptions_DeliveryOptions';
import type { ShipmentServiceOptions_ImportControl } from './ShipmentServiceOptions_ImportControl';
import type { ShipmentServiceOptions_PickupOptions } from './ShipmentServiceOptions_PickupOptions';
import type { ShipmentServiceOptions_RestrictedArticles } from './ShipmentServiceOptions_RestrictedArticles';
import type { ShipmentServiceOptions_ReturnService } from './ShipmentServiceOptions_ReturnService';
/**
 * Shipment level Accessorials are included in this container.
 */
export type Shipment_ShipmentServiceOptions = {
    /**
     * A flag indicating if the shipment requires a GlobalCheckoutIndicator. True if GlobalCheckoutIndicator tag exists; false otherwise  Empty Tag.
     */
    GlobalCheckoutIndicator?: string;
    /**
     * A flag indicating if the shipment requires a Saturday pickup. True if SaturdayPickupIndicator tag exists; false otherwise. Not available for GFP rating requests.  Empty Tag.
     */
    SaturdayPickupIndicator?: string;
    /**
     * A flag indicating if a shipment must be delivered on a Saturday. True if SaturdayDeliveryIndicator tag exists; false otherwise  Empty Tag.
     */
    SaturdayDeliveryIndicator?: string;
    /**
     * A flag indicating if a shipment must be delivered on a Sunday. True if SundayDeliveryIndicator tag exists; false otherwise  Empty Tag.
     */
    SundayDeliveryIndicator?: string;
    /**
     * If we need diferent available services in response, this option is used for shop request option. SaturdayDeliveryIndicator/ SundayDeliveryIndicator will be ignored in that case.  Valid Values:1- Weekday+Saturday services2- Weekday+Sunday services3- Weekday+Sat services+Sun services
     */
    AvailableServicesOption?: string;
    AccessPointCOD?: ShipmentServiceOptions_AccessPointCOD;
    /**
     * Presence/Absence Indicator. Any value inside is ignored.
     *
     * DeliverToAddresseeOnlyIndicator is shipper specified restriction that requires the addressee to be the one who takes final delivery of the "Hold For PickUp at UPS Access Point" package.
     *
     * Presence of indicator means shipper restriction will apply to the shipment.  Only valid for Shipment Indication type "01 - Hold For PickUp at UPS Access Point".
     *
     */
    DeliverToAddresseeOnlyIndicator?: string;
    /**
     * Presence/Absence Indicator. Any value inside is ignored. Direct Delivery Only (DDO) accessorial in a request would ensure that delivery is made only to the Ship To address on the shipping label.  This accessorial is not valid with Shipment Indication Types:
     * - 01 - Hold For Pickup At UPS Access Point
     * - 02 - UPS Access Point™ Delivery
     *
     */
    DirectDeliveryOnlyIndicator?: string;
    COD?: ShipmentServiceOptions_COD;
    DeliveryConfirmation?: ShipmentServiceOptions_DeliveryConfirmation;
    /**
     * Return of Documents Indicator - If the flag is present, the shipper has requested the ReturnOfDocument accessorial be added to the shipment  Valid for Poland to Poland shipment.
     */
    ReturnOfDocumentIndicator?: string;
    /**
     * UPS carbon neutral indicator. Indicates the shipment will be rated as carbon neutral.
     */
    UPScarbonneutralIndicator?: string;
    /**
     * The empty tag in request indicates that customer would be using UPS prepared SED form.  Valid for UPS World Wide Express Freight shipments.
     */
    CertificateOfOriginIndicator?: string;
    PickupOptions?: ShipmentServiceOptions_PickupOptions;
    DeliveryOptions?: ShipmentServiceOptions_DeliveryOptions;
    RestrictedArticles?: ShipmentServiceOptions_RestrictedArticles;
    /**
     * The empty tag in request indicates that customer would be using UPS prepared SED form.  Valid for UPS World Wide Express Freight shipments.
     */
    ShipperExportDeclarationIndicator?: string;
    /**
     * Presence/Absence Indicator. Any value inside is ignored. CommercialInvoiceRemovalIndicator - empty tag means indicator is present. CommercialInvoiceRemovalIndicator allows a shipper to dictate that UPS remove the Commercial Invoice from the user's shipment before the shipment is delivered to the ultimate consignee.
     */
    CommercialInvoiceRemovalIndicator?: string;
    ImportControl?: ShipmentServiceOptions_ImportControl;
    ReturnService?: ShipmentServiceOptions_ReturnService;
    /**
     * Empty Tag means the indicator is present. This field is a flag to indicate if the receiver needs SDL rates in response. True if SDLShipmentIndicator tag exists; false otherwise.  If present, the State Department License (SDL) rates will be returned in the response.This service requires that the account number is enabled for SDL.
     */
    SDLShipmentIndicator?: string;
    /**
     * For valid values, refer to Rating and Shipping COD Supported Countries or Territories in the Appendix.Presence/Absence Indicator. Any value inside is ignored. This field is a flag to indicate Package Release Code is requested for shipment.
     *
     * This accessorial is only valid with ShipmentIndicationType '01' - Hold for Pickup at UPS Access Point™.
     *
     */
    EPRAIndicator?: string;
    /**
     * Inside Delivery accessory. Valid values:
     * - 01 - White Glove
     * - 02 - Room of Choice
     * - 03 - Installation  Shippers account needs to have a valid contract for Heavy Goods Service.
     *
     */
    InsideDelivery?: string;
    /**
     * Presence/Absence Indicator. Any value inside is ignored. If present, indicates that the customer would like items disposed.   Shippers account needs to have a valid contract for Heavy Goods Service.
     */
    ItemDisposalIndicator?: string;
};

