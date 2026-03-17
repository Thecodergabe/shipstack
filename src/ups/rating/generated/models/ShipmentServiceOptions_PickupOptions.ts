/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Shipment Service Pickup Options Container.  Valid for UPS Worldwide Express Freight and UPS Worldwide Express Freight Midday shipments.
 */
export type ShipmentServiceOptions_PickupOptions = {
    /**
     * The presence of the tag LiftGatePickupRequiredIndicator indicates that the shipment requires a lift gate for pickup.
     */
    LiftGateAtPickupIndicator?: string;
    /**
     * The presence of the tag HoldForPickupIndicator indicates that the user opted to hold the shipment at UPS location for pickup.
     */
    HoldForPickupIndicator?: string;
};

