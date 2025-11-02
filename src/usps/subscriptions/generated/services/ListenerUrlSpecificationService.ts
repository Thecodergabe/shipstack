/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { detailedScanEventEx } from '../models/detailedScanEventEx';
import type { scanEventEx } from '../models/scanEventEx';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ListenerUrlSpecificationService {
    /**
     * Notification event which the API caller should implement.
     * Notification event API callers implement to receive tracking event data. This is the url in which data will be pushed to. Each subscriptions notification response contains a field named `payload` which is a JavaScript object that has been converted into a JSON formatted string. The text should be converted into a JavaScript object via JSON.parse(). The JavaScript object notation (JSON) schemas are provided in the API specification.  The Tracking Subscription Event example should be parsed with the Tracking Subscription Event schema and the Detailed Scan Subscription Event example should be parsed with the Detailed Scan Subscription Event schema.
     *
     * @param requestBody
     * @param xHmac If a secret was provided with the subscription, this field will contain an HMAC hash encoded in Base64.  To compute the same hash for comparison,  concatenate the value of the timestamp field and the value of the payload field, hash the concatenated string using the shared secret and the SHA256 hash function, and encode the output in Base64.  The result should match the value of the X-HMAC Http header.
     * @param hmacHeader If a secret was provided with the subscription, this field will contain an HMAC hash encoded in Base64.  To compute the same hash for comparison,  concatenate the value of the timestamp field and the value of the payload field, hash the concatenated string using the shared secret and the SHA256 hash function, and encode the output in Base64.  The result should match the value of the X-HMAC Http header.
     * @returns string Success
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static postNotification(
        requestBody: (scanEventEx | detailedScanEventEx),
        xHmac?: string,
        hmacHeader?: string,
    ): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notifications',
            headers: {
                'X-HMAC': xHmac,
                'hmac-header': hmacHeader,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Content-Type',
            errors: {
                400: `Bad Request.`,
                401: `Unauthorized.`,
                403: `Forbidden.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amout of time.`,
                503: `Service Unavailable.`,
            },
        });
    }
}
