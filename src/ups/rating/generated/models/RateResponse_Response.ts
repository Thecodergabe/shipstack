/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Response_Alert } from './Response_Alert';
import type { Response_AlertDetail } from './Response_AlertDetail';
import type { Response_ResponseStatus } from './Response_ResponseStatus';
import type { Response_TransactionReference } from './Response_TransactionReference';
/**
 * Response Container.
 */
export type RateResponse_Response = {
    ResponseStatus: Response_ResponseStatus;
    /**
     * Alert Container.  There can be zero to many alert containers with code and description.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    Alert?: Array<Response_Alert>;
    /**
     * Alert Detail Container. Currently applies to and returned only for request containing HazMat and SubVersion greater than or equal to 1701.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    AlertDetail?: Array<Response_AlertDetail>;
    TransactionReference?: Response_TransactionReference;
};

