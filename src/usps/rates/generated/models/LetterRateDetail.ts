/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtraServiceRateDetails } from './ExtraServiceRateDetails';
/**
 * Informative details about the price.
 */
export type LetterRateDetail = {
    /**
     * The stock keeping unit for the designated rate.
     */
    SKU?: string;
    /**
     * The description of the price.
     */
    description?: string;
    /**
     * The type of price type applied (Retail).
     */
    priceType?: LetterRateDetail.priceType;
    /**
     * The postage price.
     */
    price?: number;
    /**
     * The calculated weight for the package based on user input.  The greater of dimWeight and weight will be used to calculated the rate.
     */
    weight?: number;
    /**
     * The fees associated with the package.
     */
    fees?: Array<{
        /**
         * The name of the fee.
         */
        name?: string;
        /**
         * The pricing SKU for the fee.
         */
        SKU?: string;
        /**
         * The price for the fee.
         */
        price?: number;
    }>;
    /**
     * Effective start date of the rate.
     */
    startDate?: string;
    /**
     * Effective end date of the rate.  If blank the rate doesn't have an end date as of yet.
     */
    endDate?: string;
    /**
     * The mail class of the price.
     */
    mailClass?: LetterRateDetail.mailClass;
    extraServices?: Array<ExtraServiceRateDetails>;
};
export namespace LetterRateDetail {
    /**
     * The type of price type applied (Retail).
     */
    export enum priceType {
        RETAIL = 'RETAIL',
    }
    /**
     * The mail class of the price.
     */
    export enum mailClass {
        FIRST_CLASS_MAIL = 'FIRST-CLASS_MAIL',
    }
}

