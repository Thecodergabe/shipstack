/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CodDetail } from './CodDetail';
import type { FreightDirectDetail } from './FreightDirectDetail';
import type { HoldAtLocationDetail } from './HoldAtLocationDetail';
import type { HomeDeliveryPremiumDetail } from './HomeDeliveryPremiumDetail';
import type { InternationalControlledExportDetail } from './InternationalControlledExportDetail';
import type { ReturnEmailDetail } from './ReturnEmailDetail';
import type { ReturnShipmentDetail } from './ReturnShipmentDetail';
import type { SaturdayDeliveryDetail } from './SaturdayDeliveryDetail';
import type { ShipmentDryIceDetail } from './ShipmentDryIceDetail';
/**
 * The types of all optional special services requested for the shipment
 */
export type ShipmentSpecialServicesRequested = {
    internationalControlledExportDetail?: InternationalControlledExportDetail;
    returnShipmentDetail?: ReturnShipmentDetail;
    homeDeliveryPremiumDetail?: HomeDeliveryPremiumDetail;
    returnEmailDetail?: ReturnEmailDetail;
    /**
     * Optional <br> The types of all special services requested for the enclosing shipment.<br> Example: FEDEX_EXPRESS<br><a onclick='loadDocReference("servicetypes")'>Click here to see Special Service Types</a>
     */
    specialServiceTypes?: Array<string>;
    saturdayDeliveryDetail?: SaturdayDeliveryDetail;
    holdAtLocationDetail?: HoldAtLocationDetail;
    codDetail?: CodDetail;
    shipmentDryIceDetail?: ShipmentDryIceDetail;
    freightDirectDetail?: FreightDirectDetail;
};

