/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dispute } from '../models/Dispute';
import type { DisputeCreateRequest } from '../models/DisputeCreateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourcesService {
    /**
     * Creates a dispute request.
     * Returns a  dispute request details.
     *
     * @param requestBody The parameters to be used for the query.
     * @returns Dispute Successful response
     * @throws ApiError
     */
    public static postDispute(
        requestBody: DisputeCreateRequest,
    ): CancelablePromise<Dispute> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dispute',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                403: `Access is denied.`,
                404: `Error response`,
                503: `Service is unavailable`,
            },
        });
    }
}
