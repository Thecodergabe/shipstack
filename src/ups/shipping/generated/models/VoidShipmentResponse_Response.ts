/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Response_Alert } from './Response_Alert';
import type { VoidResponse_ResponseStatus } from './VoidResponse_ResponseStatus';
import type { VoidResponse_TransactionReference } from './VoidResponse_TransactionReference';
/**
 * Response Container.
 */
export type VoidShipmentResponse_Response = {
    ResponseStatus: VoidResponse_ResponseStatus;
    Alert?: Response_Alert;
    TransactionReference?: VoidResponse_TransactionReference;
};

