/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LRRequest_TransactionReference } from './LRRequest_TransactionReference';
/**
 * Request Container.
 */
export type LabelRecoveryRequest_Request = {
    /**
     * When UPS introduces new elements in the response that are not associated with new request elements, Subversion is used. This ensures backward compatibility.
     *
     * To get such elements you need to have the right Subversion. The value of the subversion is explained in the Response element Description.
     *
     * Format: YYMM = Year and month of the release.
     * Example: 1701 = 2017 January  Supported values: 1701, 1707, 1903
     */
    SubVersion?: string;
    /**
     * Request option is no longer used.
     */
    RequestOption?: string;
    TransactionReference?: LRRequest_TransactionReference;
};

