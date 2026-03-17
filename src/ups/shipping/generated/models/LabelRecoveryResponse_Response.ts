/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LRResponse_ResponseStatus } from './LRResponse_ResponseStatus';
import type { LRResponse_TransactionReference } from './LRResponse_TransactionReference';
import type { Response_Alert } from './Response_Alert';
/**
 * Response Container
 */
export type LabelRecoveryResponse_Response = {
    ResponseStatus: LRResponse_ResponseStatus;
    Alert?: Array<Response_Alert>;
    TransactionReference?: LRResponse_TransactionReference;
};

