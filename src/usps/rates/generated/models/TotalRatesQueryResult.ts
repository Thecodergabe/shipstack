/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RateOption } from './RateOption';
import type { TotalRatesExtraServiceRateDetails } from './TotalRatesExtraServiceRateDetails';
/**
 * A list of rate options including applicable extra services.
 */
export type TotalRatesQueryResult = {
    rateOptions?: Array<(RateOption & {
        extraServices?: Array<TotalRatesExtraServiceRateDetails>;
        /**
         * The total price, including the `totalBasePrice` and all extra service prices.
         *
         * Note: This field is only returned when `extraServices` are passed in the request.
         *
         */
        totalPrice?: number;
    })>;
};

