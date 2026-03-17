/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Commodity_NMFC } from './Commodity_NMFC';
/**
 * Commodity Container.  Required only for GFP rating when FRSShipmentIndicator is requested.
 */
export type Package_Commodity = {
    /**
     * Freight Classification. Freight class partially determines the freight rate for the article.  See Appendix of the Rating Ground Freight Web Services Developers Guide for list of Freight classes. For GFP Only.
     */
    FreightClass: string;
    NMFC?: Commodity_NMFC;
};

