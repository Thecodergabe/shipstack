/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Request_TransactionReference } from './Request_TransactionReference';
/**
 * Request container.  N/A
 */
export type RateRequest_Request = {
    /**
     * Indicates Rate API to display the new release features in Rate API response based on Rate release. See the What's New section for the latest Rate release. Supported values: 1601, 1607, 1701, 1707, 2108, 2205,2407,2409
     */
    SubVersion?: string;
    TransactionReference?: Request_TransactionReference;
};

