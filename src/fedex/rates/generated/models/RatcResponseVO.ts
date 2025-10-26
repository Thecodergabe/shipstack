/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RateOutputVO } from './RateOutputVO';
/**
 * This is a wrapper class for outputVO.
 */
export type RatcResponseVO = {
    /**
     * The transaction ID is a special set of numbers that defines each transaction.<br>Example: 624deea6-b709-470c-8c39-4b5511281492
     */
    transactionId?: string;
    /**
     * This element has a unique identifier added in your request, helps you match the request to the reply.<br>Example: XXXX_XXX123XXXXX
     */
    customerTransactionId?: string;
    output?: RateOutputVO;
};

