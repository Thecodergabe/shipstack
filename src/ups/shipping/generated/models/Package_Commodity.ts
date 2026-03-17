/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Commodity_NMFC } from './Commodity_NMFC';
/**
 * Container to hold the Commodity information.  It is required if the Ground Freight Pricing Shipment indicator is present in the request.
 */
export type Package_Commodity = {
    /**
     * Freight Classification. Freight class partially determines the freight rate for the article.  Required for Ground Freight Pricing Shipments only.
     */
    FreightClass: string;
    NMFC?: Commodity_NMFC;
};

