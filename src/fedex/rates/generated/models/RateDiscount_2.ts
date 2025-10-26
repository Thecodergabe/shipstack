/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Money_1 } from './Money_1';
export type RateDiscount_2 = {
    /**
     * Indicates the type.
     */
    rateDiscountType?: RateDiscount_2.rateDiscountType;
    /**
     * Indicates the description for the rate discount.
     */
    description?: string;
    /**
     * Indicates the amount for the rate discount.
     */
    amount?: Money_1;
    percent?: number;
};
export namespace RateDiscount_2 {
    /**
     * Indicates the type.
     */
    export enum rateDiscountType {
        BONUS = 'BONUS',
        COUPON = 'COUPON',
        EARNED = 'EARNED',
        INCENTIVE = 'INCENTIVE',
        OTHER = 'OTHER',
        VOLUME = 'VOLUME',
    }
}

