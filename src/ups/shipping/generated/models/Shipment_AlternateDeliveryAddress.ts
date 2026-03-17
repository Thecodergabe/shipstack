/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlternateDeliveryAddress_Address } from './AlternateDeliveryAddress_Address';
/**
 * AlternateDeliveryAddress Container.  Alternate Delivery Address (UPS Access Point Address) required if ShipmentIndicationType is 01 or 02.
 */
export type Shipment_AlternateDeliveryAddress = {
    /**
     * Retail Location Name.
     */
    Name: string;
    /**
     * Attention Name.
     */
    AttentionName: string;
    /**
     * UPS Access Point ID.
     */
    UPSAccessPointID?: string;
    Address: AlternateDeliveryAddress_Address;
};

