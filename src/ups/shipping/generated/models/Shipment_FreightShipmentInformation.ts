/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FreightShipmentInformation_FreightDensityInfo } from './FreightShipmentInformation_FreightDensityInfo';
/**
 * Container to hold Freight Shipment information.
 */
export type Shipment_FreightShipmentInformation = {
    FreightDensityInfo?: FreightShipmentInformation_FreightDensityInfo;
    /**
     * The presence of the tag indicates that the rate request is density based.
     * For Density Based Rating (DBR), the customer must have DBR Contract Service.
     */
    DensityEligibleIndicator?: string;
};

