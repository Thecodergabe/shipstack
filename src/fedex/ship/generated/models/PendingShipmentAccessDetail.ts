/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PendingShipmentAccessorDetail } from './PendingShipmentAccessorDetail';
/**
 * This information describes how and when a online email return label shipment may be accessed for completion.
 */
export type PendingShipmentAccessDetail = {
    /**
     * Indicates the details about the users who can access the shipment.
     */
    accessorDetails?: Array<PendingShipmentAccessorDetail>;
};

