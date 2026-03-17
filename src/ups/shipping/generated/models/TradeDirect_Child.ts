/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Child_LTL_Charges } from './Child_LTL_Charges';
import type { Child_LTL_Package } from './Child_LTL_Package';
import type { Child_Product } from './Child_Product';
/**
 * A small package or LTL/TL shipment associated with a Trade Direct Master.
 */
export type TradeDirect_Child = {
    /**
     * The unique shipment identifier (USI) is used to create Master, LTL and Child shipments. Used for Freight shipments.
     */
    USI: string;
    /**
     * Indicates the Presence/Absence of HazMat on the shipment.
     */
    HazMatIndicator?: string;
    /**
     * The type of shipment.
     *
     * Valid values:
     *
     * - LTL
     * - SMALLPACKAGE
     * - MI
     *
     */
    Type: TradeDirect_Child.Type;
    Product: Child_Product;
    LtlPackage: Child_LTL_Package;
    LtlCharges?: Child_LTL_Charges;
};
export namespace TradeDirect_Child {
    /**
     * The type of shipment.
     *
     * Valid values:
     *
     * - LTL
     * - SMALLPACKAGE
     * - MI
     *
     */
    export enum Type {
        LTL = 'LTL',
        SMALLPACKAGE = 'SMALLPACKAGE',
        MI = 'MI',
    }
}

