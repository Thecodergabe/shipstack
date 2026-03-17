/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimeInTransitRequest } from '../models/TimeInTransitRequest';
import type { TimeInTransitResponse } from '../models/TimeInTransitResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TimeInTransitService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * TimeInTransit
     * @param transId An identifier unique to the request. Length 32
     * @param requestBody Generate sample code for popular API requests by selecting an example below. To view a full sample request and response, first click "Authorize" and enter your application credentials, then populate the required parameters above and click "Try it out".
     * @param version API Version
     * @param transactionSrc Identifies the clients/source application that is calling.  Length 512
     * @returns TimeInTransitResponse successful operation
     * @throws ApiError
     */
    public timeInTransit(
        transId: string,
        requestBody: TimeInTransitRequest,
        version: string = 'v1',
        transactionSrc: string = 'testing',
    ): CancelablePromise<TimeInTransitResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/shipments/{version}/transittimes',
            path: {
                'version': version,
            },
            headers: {
                'transId': transId,
                'transactionSrc': transactionSrc,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid Request`,
                401: `Unauthorized Request`,
                403: `Blocked Merchant`,
                429: `Rate Limit Exceeded`,
            },
        });
    }
}
