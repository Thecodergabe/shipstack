/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressResolutionOutputVOV3 } from './AddressResolutionOutputVOV3';
/**
 * Wrapper class for AddressResolutionOutputVO. It holds transactionId and output.
 */
export type AdvcResponseVO = {
    /**
     * Unique identifier returned in the reply and helps you match the request to the reply.<br>Example: XXX_ORDERXXXX789
     */
    transactionId?: string;
    /**
     * This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply. <br><br> Example: XXX_ORDERXXXX789
     */
    customerTransactionId?: string;
    output?: AddressResolutionOutputVOV3;
};

