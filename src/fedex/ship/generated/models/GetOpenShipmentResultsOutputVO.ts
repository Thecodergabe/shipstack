/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
import type { TransactionShipmentOutputVO } from './TransactionShipmentOutputVO';
export type GetOpenShipmentResultsOutputVO = {
    /**
     * These are shipping transaction details, such as master tracking number, service type, and ship date and time.
     */
    transactionShipments?: Array<TransactionShipmentOutputVO>;
    /**
     * object indicate the alert details received in the output.
     */
    alerts?: Array<Alert>;
};

