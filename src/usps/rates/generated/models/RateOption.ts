/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RateDetails } from './RateDetails';
/**
 * The prices that match the search criteria.
 */
export type RateOption = {
    /**
     * The total price, including the rate, fees and pound postage.
     */
    totalBasePrice?: number;
    rates?: Array<RateDetails>;
};

