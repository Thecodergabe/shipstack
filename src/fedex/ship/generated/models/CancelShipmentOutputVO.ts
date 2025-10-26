/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
/**
 * The response elements received when a shipment is cancelled.
 */
export type CancelShipmentOutputVO = {
    /**
     * Indicates whether the shipment has been cancelled or not. If the value is True, then it indicates that the shipment has been cancelled.<br>Example: true
     */
    cancelledShipment?: boolean;
    /**
     * Indicates whether the shipment has been deleted from history or not. If the value is True, then it indicates that the shipment has been deleted.<br>Example: true
     */
    cancelledHistory?: boolean;
    /**
     * The success message generated during cancellation request for Shipment.<br>Example:Shipment is successfully cancelled
     */
    message?: string;
    /**
     * This is a cancellation request alert. This alert includes information such as alert code, alert type, and alert message.
     */
    alerts?: Array<Alert>;
};

