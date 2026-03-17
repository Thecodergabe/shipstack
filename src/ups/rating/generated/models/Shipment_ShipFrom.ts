/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipFrom_Address } from './ShipFrom_Address';
/**
 * Ship From Container.
 */
export type Shipment_ShipFrom = {
    /**
     * Origin attention name or company name.  Length is not validated.
     */
    Name?: string;
    /**
     * Origin attention name.  Length is not validated.
     */
    AttentionName?: string;
    Address: ShipFrom_Address;
};

