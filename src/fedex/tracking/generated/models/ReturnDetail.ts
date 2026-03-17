/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReasonDetail } from './ReasonDetail';
/**
 * Specifies return information related to a return shipment.
 */
export type ReturnDetail = {
    /**
     * Name of person authorizing the return, entered by the customer.
     */
    authorizationName?: string;
    /**
     * Specifies the return reason details.
     */
    reasonDetail?: Array<ReasonDetail>;
};

