/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies discount Rate for Shipment.
 */
export type RateDiscount = {
    /**
     * Specifies the amount.<br>Example: 8.9
     */
    amount?: number;
    /**
     * The type of rate discount. <br/> Valid Values are BONUS, COUPON,EARNED,OTHER,VOLUME.<br>Example: COUPON
     */
    rateDiscountType?: string;
    /**
     * Specifies the percentage of Rate discount.<br>Example: 28.9
     */
    percent?: number;
    /**
     * Specifies the description of the discounted rate.<br>Example: description
     */
    description?: string;
};

