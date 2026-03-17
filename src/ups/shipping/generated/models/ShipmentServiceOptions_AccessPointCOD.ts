/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Access Point COD indicates COD is requested for a shipment.  Valid only for "01 - Hold For Pickup At UPS Access Point" Shipment Indication type. Shipment Access Point COD is valid only for countries or territories within E.U.
 * Not valid with (Shipment) COD.
 * Not available to shipment with return service.
 */
export type ShipmentServiceOptions_AccessPointCOD = {
    /**
     * Access Point COD Currency Code.
     */
    CurrencyCode: string;
    /**
     * Access Point COD Monetary Value.
     */
    MonetaryValue: string;
};

