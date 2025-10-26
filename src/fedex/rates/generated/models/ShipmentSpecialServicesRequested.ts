/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryOnInvoiceAcceptanceDetail } from './DeliveryOnInvoiceAcceptanceDetail';
import type { HoldAtLocationDetail } from './HoldAtLocationDetail';
import type { HomeDeliveryPremiumDetail } from './HomeDeliveryPremiumDetail';
import type { InternationalControlledExportDetail } from './InternationalControlledExportDetail';
import type { InternationalTrafficInArmsRegulationsDetail } from './InternationalTrafficInArmsRegulationsDetail';
import type { ShipmentDryIceDetail } from './ShipmentDryIceDetail';
import type { ShipmentSpecialServicesRequested_returnShipmentDetail } from './ShipmentSpecialServicesRequested_returnShipmentDetail';
import type { ShipmentSpecialServicesRequestedShipmentCODDetail } from './ShipmentSpecialServicesRequestedShipmentCODDetail';
/**
 * Indicate special services for which the rate data is being requested. Special Services are available at the shipment level for some or all service types.<br>Example: [BROKER_SELECT_OPTION]<br><a onclick='loadDocReference("shipmentlevelspecialservicetypes")'>Click here to see Shipment level Special Service Types</a>
 */
export type ShipmentSpecialServicesRequested = {
    returnShipmentDetail?: ShipmentSpecialServicesRequested_returnShipmentDetail;
    deliveryOnInvoiceAcceptanceDetail?: DeliveryOnInvoiceAcceptanceDetail;
    internationalTrafficInArmsRegulationsDetail?: InternationalTrafficInArmsRegulationsDetail;
    holdAtLocationDetail?: HoldAtLocationDetail;
    shipmentCODDetail?: ShipmentSpecialServicesRequestedShipmentCODDetail;
    shipmentDryIceDetail?: ShipmentDryIceDetail;
    internationalControlledExportDetail?: InternationalControlledExportDetail;
    homeDeliveryPremiumDetail?: HomeDeliveryPremiumDetail;
    /**
     * Indicate special services for which the rate data is being requested. Special Services are available at the shipment level for some or all service types.<br>Example: BROKER_SELECT_OPTION <br><a onclick='loadDocReference("shipmentlevelspecialservicetypes")'>Click here to see Shipment level Special Service Types</a>
     */
    specialServiceTypes?: Array<string>;
};

