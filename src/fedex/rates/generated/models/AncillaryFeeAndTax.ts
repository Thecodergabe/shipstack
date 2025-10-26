/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Money_1 } from './Money_1';
/**
 * Identifies the total amount of the shipment-lvel fees and taxes that are not based on transportation charges of commodity-level estimated duties and taxes.
 */
export type AncillaryFeeAndTax = {
    /**
     * Identifies the total amount of the shipment-level fees and taxes that are not based on transportation charges or commodity-level estimated duties and taxes.
     */
    type?: AncillaryFeeAndTax.type;
    /**
     * Identifies the amount of the shipment-level fees and taxes that are not based on transportation charges or commodity-level estimated duties and taxes.
     */
    description?: string;
    /**
     * list of AncillaryFees And Taxes
     */
    amount?: Money_1;
};
export namespace AncillaryFeeAndTax {
    /**
     * Identifies the total amount of the shipment-level fees and taxes that are not based on transportation charges or commodity-level estimated duties and taxes.
     */
    export enum type {
        CLEARANCE_ENTRY_FEE = 'CLEARANCE_ENTRY_FEE',
        GOODS_AND_SERVICES_TAX = 'GOODS_AND_SERVICES_TAX',
        HARMONIZED_SALES_TAX = 'HARMONIZED_SALES_TAX',
        OTHER = 'OTHER',
    }
}

