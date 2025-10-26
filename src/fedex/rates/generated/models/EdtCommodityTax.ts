/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EdtTaxDetail_1 } from './EdtTaxDetail_1';
import type { Money_1 } from './Money_1';
/**
 * The shipment/package Duties and taxes.
 */
export type EdtCommodityTax = {
    /**
     * Harmonized code is used by customer to classify the product being shipped and define the duties and taxes to be paid.
     */
    harmonizedCode?: string;
    taxes?: EdtTaxDetail_1;
    /**
     * Total of Duties and taxes
     */
    total?: Money_1;
};

