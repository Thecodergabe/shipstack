/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlternateDeliveryAddress_Address } from './AlternateDeliveryAddress_Address';
/**
 * Alternate Delivery Address container. Applies for deliveries to UPS Access Point™ locations.
 *
 * Required for the following ShipmentIndicationType values:
 * - 01 - Hold for Pickup at UPS Access Point™
 * - 02 - UPS Access Point™ Delivery
 *
 */
export type Shipment_AlternateDeliveryAddress = {
    /**
     * UPS Access Point location name.
     */
    Name?: string;
    Address: AlternateDeliveryAddress_Address;
};

