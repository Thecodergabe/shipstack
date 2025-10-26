/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
/**
 * The response elements received when a shipment is created.
 */
export type VerifyShipmentOutputVO = {
    /**
     * The alerts received when a Shipment Package Validate is processed. This includes the alert code, alert type, and alert message.
     */
    alerts?: Array<Alert>;
};

