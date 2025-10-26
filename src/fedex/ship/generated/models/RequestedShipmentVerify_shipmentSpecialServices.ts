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
 * Indicate the shipment special service or handling required for this shipment. <br>Note: <ul><li>If the shipper is requesting a special service, the special service type must be indicated in the object specialServiceTypes, and all supporting detail must be provided in the appropriate sub-object below.</li><li>For returns it is required to provide value RETURN_SHIPMENT in the specialServiceTypes.</li></ul>
 */
export type RequestedShipmentVerify_shipmentSpecialServices = {
    /**
     * Indicate the Special services requested for this shipment.<br>Example: <ul><li>HOLD_AT_LOCATION</li><li>RETURN_SHIPMENT</li><li>BROKER_SELECT_OPTION</li><li>CALL_BEFORE_DELIVERY</li><li>COD</li><li>CUSTOM_DELIVERY_WINDOW</li></ul><br><a onclick='loadDocReference("shipmentlevelspecialservicetypes")'>click here to see Shipment Special Service Types</a>
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

