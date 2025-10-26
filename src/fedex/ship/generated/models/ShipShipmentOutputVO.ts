/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
import type { TransactionCreateShipmentOutputVO } from './TransactionCreateShipmentOutputVO';
/**
 * This is the response received when a shipment is requested.
 */
export type ShipShipmentOutputVO = {
    /**
     * These are shipping transaction details, such as master tracking number, service type, and ship date and time.
     */
    transactionShipments?: Array<TransactionCreateShipmentOutputVO>;
    /**
     * The alerts received when processing a shipment request.
     */
    alerts?: Array<Alert>;
    /**
     * Unique identifier for a Job. Example: abc123456
     */
    jobId?: string;
};

