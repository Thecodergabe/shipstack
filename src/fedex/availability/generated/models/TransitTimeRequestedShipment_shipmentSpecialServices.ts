/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransitTimeRequestedShipment_shipmentSpecialServices_codDetail } from './TransitTimeRequestedShipment_shipmentSpecialServices_codDetail';
import type { TransitTimeRequestedShipment_shipmentSpecialServices_holdAtLocationDetail } from './TransitTimeRequestedShipment_shipmentSpecialServices_holdAtLocationDetail';
import type { TransitTimeRequestedShipment_shipmentSpecialServices_homeDeliveryPremiumDetail } from './TransitTimeRequestedShipment_shipmentSpecialServices_homeDeliveryPremiumDetail';
import type { TransitTimeRequestedShipment_shipmentSpecialServices_internationalControlledExportDetail } from './TransitTimeRequestedShipment_shipmentSpecialServices_internationalControlledExportDetail';
import type { TransitTimeRequestedShipment_shipmentSpecialServices_shipmentDryIceDetail } from './TransitTimeRequestedShipment_shipmentSpecialServices_shipmentDryIceDetail';
/**
 * Indicate special services for which the rate data is being requested. Special Services are available at the shipment level for some or all service types.<br>Example: [BROKER_SELECT_OPTION]
 */
export type TransitTimeRequestedShipment_shipmentSpecialServices = {
    /**
     * Indicate special services for which the rate data is being requested. Special Services are available at the shipment level for some or all service types.<br>Example: BROKER_SELECT_OPTION <br><a onclick='loadDocReference("shipmentlevelspecialservicetypes")'>Click here to see Shipment level Special Service Types</a>
     */
    specialServiceTypes?: Array<string>;
    codDetail?: TransitTimeRequestedShipment_shipmentSpecialServices_codDetail;
    internationalControlledExportDetail?: TransitTimeRequestedShipment_shipmentSpecialServices_internationalControlledExportDetail;
    homeDeliveryPremiumDetail?: TransitTimeRequestedShipment_shipmentSpecialServices_homeDeliveryPremiumDetail;
    holdAtLocationDetail?: TransitTimeRequestedShipment_shipmentSpecialServices_holdAtLocationDetail;
    shipmentDryIceDetail?: TransitTimeRequestedShipment_shipmentSpecialServices_shipmentDryIceDetail;
};

