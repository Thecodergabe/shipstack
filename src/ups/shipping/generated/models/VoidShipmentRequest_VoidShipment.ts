/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The container for the Ship Void Request.
 */
export type VoidShipmentRequest_VoidShipment = {
    /**
     * Unique key to tag shipments in shipping history. It could be MyUPS registration Number or any unique identifier.
     */
    ShippingHistoryUserKey?: string;
    /**
     * The shipment's identification number  Alpha-numeric. Must pass 1Z rules. Must be upper case.
     */
    ShipmentIdentificationNumber: string;
    /**
     * The package's identification number  Alpha-numeric. Must pass 1Z rules. Must be upper case.
     *
     * Package level Void is not applicable for return service.
     */
    TrackingNumber?: Array<string>;
};

