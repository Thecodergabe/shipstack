/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipTo_Address } from './ShipTo_Address';
/**
 * Ship To Container
 */
export type Shipment_ShipTo = {
    /**
     * Destination attention name or company name.  Length is not validated.
     */
    Name?: string;
    /**
     * Destination attention name.  Length is not validated.
     */
    AttentionName?: string;
    Address: ShipTo_Address;
};

