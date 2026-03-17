/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Shipment Service Delivery Options Container.  Valid for UPS Worldwide Express Freight and UPS Worldwide Express Freight Midday shipments.
 */
export type ShipmentServiceOptions_DeliveryOptions = {
    /**
     * The presence of the tag LiftGateAtDeliveryIndicator indicates that the shipment requires a lift gate for delivery.
     */
    LiftGateAtDeliveryIndicator?: string;
    /**
     * The presence of the tag DropOffAtUPSFacilityIndicator indicates the package will be dropped at a UPS facility for shipment.
     */
    DropOffAtUPSFacilityIndicator?: string;
};

