/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetOpenShipmentResultsOutputVO } from './GetOpenShipmentResultsOutputVO';
/**
 * Wrapper class for GetOpenshipmentResultsOutputVo. It holds transactionId and output.
 */
export type SHPCResponseVO_GetOpenShipmentResults = {
    /**
     * The transaction ID is a special set of numbers that defines each transaction.<br>Example: 624xxxxx-b709-470c-8c39-4b55112xxxxx
     */
    transactionId?: string;
    /**
     * This is a unique identifier to your transaction and helps you match the request to the reply. <br> Example: AnyCo_order123456789
     */
    customerTransactionId?: string;
    output?: GetOpenShipmentResultsOutputVO;
};

