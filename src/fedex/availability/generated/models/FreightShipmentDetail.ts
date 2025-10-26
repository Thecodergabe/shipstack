/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FedExFreightAccountNumber } from './FedExFreightAccountNumber';
import type { FedExFreightBillingContactAndAddress } from './FedExFreightBillingContactAndAddress';
import type { FreightShipmentLiabilityCoverageDetail } from './FreightShipmentLiabilityCoverageDetail';
import type { FreightShipmentLineItem } from './FreightShipmentLineItem';
import type { ShipmentDimensions } from './ShipmentDimensions';
/**
 * Conditional
 *
 * Details specific to a FedEx Freight LTL shipment (i.e. FedEx Priority and Economy Freight). If freight shipment detail is applicable, then the following fields are required. 'aliasID', 'clientDiscountPercent', 'fedExFreightAccountNumber', 'fedExFreightBillingContactAndAddress', 'lineItem', and 'role'.
 */
export type FreightShipmentDetail = {
    shipmentDimensions?: ShipmentDimensions;
    /**
     * Optional : Designates a bill-to address <br> Example: true
     */
    alternateBilling?: boolean;
    /**
     * Required
     *
     * Class/weight pairs and associated details for a Freight shipment
     */
    lineItem?: Array<FreightShipmentLineItem>;
    /**
     * Required <br> Indicates the role of the party submitting the transaction <br> Example: SHIPPER
     */
    role?: FreightShipmentDetail.role;
    /**
     * Conditional <br> This is only used for anonymous rate requests <br> Example: 10.5
     */
    clientDiscountPercent?: number;
    fedExFreightBillingContactAndAddress?: FedExFreightBillingContactAndAddress;
    /**
     *  Conditional. <br> This is bill to alias identifier.
     */
    aliasID?: string;
    liabilityCoverageDetail?: FreightShipmentLiabilityCoverageDetail;
    fedExFreightAccountNumber?: FedExFreightAccountNumber;
    /**
     * Optional
     *
     * Total number of individual handling units in the entire shipment (for unit pricing). May not be negative
     */
    totalHandlingUnits?: number;
};
export namespace FreightShipmentDetail {
    /**
     * Required <br> Indicates the role of the party submitting the transaction <br> Example: SHIPPER
     */
    export enum role {
        CONSIGNEE = 'CONSIGNEE',
        SHIPPER = 'SHIPPER',
    }
}

