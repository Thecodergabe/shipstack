/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Discount Amount container. It indicates the shipment level Ground Freight Pricing discount amount for transportation charges
 */
export type TransportationCharges_DiscountAmount = {
    /**
     * Discount Amount currency code.
     */
    CurrencyCode: string;
    /**
     * Discount amount monetary value.  Valid values are from 0 to 9999999999999999.99
     */
    MonetaryValue: string;
};

