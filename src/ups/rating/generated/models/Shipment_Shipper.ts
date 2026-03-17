/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Shipper_Address } from './Shipper_Address';
/**
 * Shipper container. Information associated with the UPS account number.
 */
export type Shipment_Shipper = {
    /**
     * Shipper's name or company name.  Length is not validated.
     */
    Name?: string;
    /**
     * Shipper's attention name.  Length is not validated.
     */
    AttentionName?: string;
    /**
     * Shipper's UPS account number.  A valid account number is required to receive negotiated rates. Optional otherwise. Cannot be present when requesting UserLevelDiscount.
     */
    ShipperNumber?: string;
    Address: Shipper_Address;
};

