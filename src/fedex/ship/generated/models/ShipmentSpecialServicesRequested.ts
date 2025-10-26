/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryOnInvoiceAcceptanceDetail } from './DeliveryOnInvoiceAcceptanceDetail';
import type { ETDDetail } from './ETDDetail';
import type { HoldAtLocationDetail } from './HoldAtLocationDetail';
import type { HomeDeliveryPremiumDetail } from './HomeDeliveryPremiumDetail';
import type { InternationalControlledExportDetail } from './InternationalControlledExportDetail';
import type { InternationalTrafficInArmsRegulationsDetail } from './InternationalTrafficInArmsRegulationsDetail';
import type { PendingShipmentDetail } from './PendingShipmentDetail';
import type { ReturnShipmentDetail } from './ReturnShipmentDetail';
import type { ShipmentCODDetail } from './ShipmentCODDetail';
import type { ShipmentDryIceDetail_1 } from './ShipmentDryIceDetail_1';
/**
 * Specify the special services requested at the shipment level.<br>If the shipper is requesting a special service which requires additional data (such as the COD amount), the shipment special service type must be present in the specialServiceTypes collection, and the supporting detail must be provided in the appropriate sub-object below.<br>RETURN_SHIPMENT is required for creating return shipments.
 */
export type ShipmentSpecialServicesRequested = {
    /**
     * Special services requested for the shipment.<br>Example: <ul><li>HOLD_AT_LOCATION</li><li>RETURN_SHIPMENT</li><li>BROKER_SELECT_OPTION</li><li>CALL_BEFORE_DELIVERY</li><li>COD</li><li>CUSTOM_DELIVERY_WINDOW</li></ul><br><a onclick='loadDocReference("shipmentlevelspecialservicetypes")'>click here to see Shipment Special Service Types</a>
     */
    specialServiceTypes?: Array<string>;
    etdDetail?: ETDDetail;
    returnShipmentDetail?: ReturnShipmentDetail;
    deliveryOnInvoiceAcceptanceDetail?: DeliveryOnInvoiceAcceptanceDetail;
    internationalTrafficInArmsRegulationsDetail?: InternationalTrafficInArmsRegulationsDetail;
    pendingShipmentDetail?: PendingShipmentDetail;
    holdAtLocationDetail?: HoldAtLocationDetail;
    shipmentCODDetail?: ShipmentCODDetail;
    shipmentDryIceDetail?: ShipmentDryIceDetail_1;
    internationalControlledExportDetail?: InternationalControlledExportDetail;
    homeDeliveryPremiumDetail?: HomeDeliveryPremiumDetail;
};

