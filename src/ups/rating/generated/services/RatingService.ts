/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RATERequestWrapper } from '../models/RATERequestWrapper';
import type { RATEResponseWrapper } from '../models/RATEResponseWrapper';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RatingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Rating
     * The Rating API is used when rating or shopping a shipment. For more information on the Rating API, please visit the <a href="https://developer.ups.com/api/reference/rating/product-info" target="_blank" rel="noopener">Product Overview</a> page.
     * @param requestoption Valid Values:
     * - Rate = The server rates (The default Request option is Rate if a Request Option is not provided).
     * - Shop = The server validates the shipment, and returns rates for all UPS products from the ShipFrom to the ShipTo addresses.
     * - Ratetimeintransit = The server rates with transit time information
     * - Shoptimeintransit = The server validates the shipment, and returns rates and transit times for all UPS products from the ShipFrom to the ShipTo addresses.
     *
     * Rate is the only valid request option for UPS Ground Freight Pricing requests.
     *
     * @param requestBody Generate sample code for popular API requests by selecting an example below. To view a full sample request and response, first click "Authorize" and enter your application credentials, then populate the required parameters above and click "Try it out".
     * @param transId An identifier unique to the request. Length 32
     * @param transactionSrc An identifier of the client/source application that is making the request.Length 512
     * @param additionalinfo Valid Values: timeintransit = The server rates with transit time information combined with requestoption in URL.Rate is the only valid request option for Ground Freight Pricing requests. Length 15
     * @param version Indicates Rate API to display the new release features in Rate API response based on Rate release. See the New section for the latest Rate release.
     *
     * Valid values:
     * - v2409
     *
     * @returns RATEResponseWrapper successful operation
     * @throws ApiError
     */
    public rate(
        requestoption: string,
        requestBody: RATERequestWrapper,
        transId?: string,
        transactionSrc: string = 'testing',
        additionalinfo?: string,
        version: string = 'v2409',
    ): CancelablePromise<RATEResponseWrapper> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rating/{version}/{requestoption}',
            path: {
                'version': version,
                'requestoption': requestoption,
            },
            headers: {
                'transId': transId,
                'transactionSrc': transactionSrc,
            },
            query: {
                'additionalinfo': additionalinfo,
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
    /**
     * @deprecated
     * Rating
     * The Rating API is used when rating or shopping a shipment.
     * @param requestoption Valid Values:
     * - Rate = The server rates (The default Request option is Rate if a Request Option is not provided).
     * - Shop = The server validates the shipment, and returns rates for all UPS products from the ShipFrom to the ShipTo addresses.
     * - Ratetimeintransit = The server rates with transit time information
     * - Shoptimeintransit = The server validates the shipment, and returns rates and transit times for all UPS products from the ShipFrom to the ShipTo addresses.
     *
     * Rate is the only valid request option for UPS Ground Freight Pricing requests.
     *
     * @param requestBody Generate sample code for popular API requests by selecting an example below. To view a full sample request and response, first click "Authorize" and enter your application credentials, then populate the required parameters above and click "Try it out".
     * @param transId An identifier unique to the request. Length 32
     * @param transactionSrc An identifier of the client/source application that is making the request.Length 512
     * @param additionalinfo Valid Values: timeintransit = The server rates with transit time information combined with requestoption in URL.Rate is the only valid request option for Ground Freight Pricing requests. Length 15
     * @param deprecatedVersion Indicates Rate API to display the new release features in Rate API response based on Rate release. See the New section for the latest Rate release.
     *
     * Valid values:
     * - v1
     * - v1601
     * - v1607
     * - 1701
     * - 1707
     * - v2108
     * - v2205
     *
     * @returns RATEResponseWrapper successful operation
     * @throws ApiError
     */
    public deprecatedRate(
        requestoption: string,
        requestBody: RATERequestWrapper,
        transId?: string,
        transactionSrc: string = 'testing',
        additionalinfo?: string,
        deprecatedVersion: string = 'v1',
    ): CancelablePromise<RATEResponseWrapper> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rating/{deprecatedVersion}/{requestoption}',
            path: {
                'deprecatedVersion': deprecatedVersion,
                'requestoption': requestoption,
            },
            headers: {
                'transId': transId,
                'transactionSrc': transactionSrc,
            },
            query: {
                'additionalinfo': additionalinfo,
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
