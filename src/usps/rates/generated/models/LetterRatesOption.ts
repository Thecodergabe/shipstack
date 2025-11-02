/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LettersRateDetails } from './LettersRateDetails';
/**
 * The prices that match the search criteria.
 */
export type LetterRatesOption = {
    /**
     * The total price, including the rate and fees.
     */
    totalBasePrice?: number;
    rates?: Array<LettersRateDetails>;
};

