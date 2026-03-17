/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LABELRECOVERYRequestWrapper } from '../models/LABELRECOVERYRequestWrapper';
import type { LABELRECOVERYResponseWrapper } from '../models/LABELRECOVERYResponseWrapper';
import type { SHIPRequestWrapper } from '../models/SHIPRequestWrapper';
import type { SHIPResponseWrapper } from '../models/SHIPResponseWrapper';
import type { VOIDSHIPMENTResponseWrapper } from '../models/VOIDSHIPMENTResponseWrapper';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ShippingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Shipment
     * The Shipping API makes UPS shipping services available to client applications that communicate with UPS
     * using the Internet
     * @param requestBody Generate sample code for popular API requests by selecting an example below. To view a full sample request and response, first click "Authorize" and enter your application credentials, then populate the required parameters above and click "Try it out".
     * @param transId An identifier unique to the request. Length 32
     * @param transactionSrc An identifier of the client/source application that is making the request.Length 512
     * @param additionaladdressvalidation Valid Values:
     * city = validation will include city.Length 15
     * @param version Indicates Ship API to display the new release features in Ship API response based on Ship release.
     *
     * Valid values:
     * - v2409
     *
     * @returns SHIPResponseWrapper successful operation
     * @throws ApiError
     */
    public shipment(
        requestBody: SHIPRequestWrapper,
        transId?: string,
        transactionSrc: string = 'testing',
        additionaladdressvalidation?: string,
        version: string = 'v2409',
    ): CancelablePromise<SHIPResponseWrapper> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/shipments/{version}/ship',
            path: {
                'version': version,
            },
            headers: {
                'transId': transId,
                'transactionSrc': transactionSrc,
            },
            query: {
                'additionaladdressvalidation': additionaladdressvalidation,
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
     * Void Shipment
     * The Void Shipping API is used to cancel the previously scheduled shipment
     * @param shipmentidentificationnumber The shipment's identification number
     * Alpha-numeric. Must pass 1Z rules. Must be
     * upper case. Length 18
     * @param transId An identifier unique to the request. Length 32
     * @param transactionSrc An identifier of the client/source application that is making the request.Length 512
     * @param trackingnumber The package's tracking number. You may have
     * up to 20 different tracking numbers listed.
     * If more than one tracking number, pass this
     * value as: trackingnumber=
     * ["1ZISUS010330563105","1ZISUS01033056310
     * 8"] with a coma separating each number.
     * Alpha-numeric. Must pass 1Z rules. Must be
     * upper case. Length 18
     * @param version API Version
     *
     * Valid values:
     * - v2409
     *
     * @returns VOIDSHIPMENTResponseWrapper successful operation
     * @throws ApiError
     */
    public voidShipment(
        shipmentidentificationnumber: string,
        transId?: string,
        transactionSrc: string = 'testing',
        trackingnumber?: string,
        version: string = 'v2409',
    ): CancelablePromise<VOIDSHIPMENTResponseWrapper> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/shipments/{version}/void/cancel/{shipmentidentificationnumber}',
            path: {
                'version': version,
                'shipmentidentificationnumber': shipmentidentificationnumber,
            },
            headers: {
                'transId': transId,
                'transactionSrc': transactionSrc,
            },
            query: {
                'trackingnumber': trackingnumber,
            },
            errors: {
                400: `Invalid Request`,
                401: `Unauthorized Request`,
                403: `Blocked Merchant`,
                429: `Rate Limit Exceeded`,
            },
        });
    }
    /**
     * Label Recovery
     * The Label Shipping API allows us to retrieve forward and return labels.
     * @param requestBody Generate sample code for popular API requests by selecting an example below. To view a full sample request and response, first click "Authorize" and enter your application credentials, then populate the required parameters above and click "Try it out".
     * @param transId An identifier unique to the request. Length 32
     * @param transactionSrc An identifier of the client/source application that is making the request.Length 512
     * @param version When UPS introduces new elements in the
     * response that are not associated with new
     * request elements, Subversion is used. This
     * ensures backward compatibility.
     * v1  original features of the application. No
     * support for CODTurn-inPage, HighValueReport
     * or InternationalForms features returned in the
     * response
     * v1701  includes support for CODTurn-inPage
     * features returned in the response.
     * V1903
     * Length 5
     * @returns LABELRECOVERYResponseWrapper successful operation
     * @throws ApiError
     */
    public labelRecovery(
        requestBody: LABELRECOVERYRequestWrapper,
        transId?: string,
        transactionSrc: string = 'testing',
        version: string = 'v1',
    ): CancelablePromise<LABELRECOVERYResponseWrapper> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/labels/{version}/recovery',
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
    /**
     * @deprecated
     * Shipment
     * The Shipping API makes UPS shipping services available to client applications that communicate with UPS
     * using the Internet
     * @param requestBody Generate sample code for popular API requests by selecting an example below. To view a full sample request and response, first click "Authorize" and enter your application credentials, then populate the required parameters above and click "Try it out".
     * @param transId An identifier unique to the request. Length 32
     * @param transactionSrc An identifier of the client/source application that is making the request.Length 512
     * @param additionaladdressvalidation Valid Values:
     * city = validation will include city.Length 15
     * @param deprecatedVersion Indicates Ship API to display the new release features in Ship API response based on Ship release.
     *
     * Valid values:
     * - v1
     * - v1601
     * - v1607
     * - v1701
     * - v1707
     * - v1801
     * - v1807
     * - v2108
     * - v2205
     *
     * @returns SHIPResponseWrapper successful operation
     * @throws ApiError
     */
    public deprecatedShipment(
        requestBody: SHIPRequestWrapper,
        transId?: string,
        transactionSrc: string = 'testing',
        additionaladdressvalidation?: string,
        deprecatedVersion: string = 'v1',
    ): CancelablePromise<SHIPResponseWrapper> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/shipments/{deprecatedVersion}/ship',
            path: {
                'deprecatedVersion': deprecatedVersion,
            },
            headers: {
                'transId': transId,
                'transactionSrc': transactionSrc,
            },
            query: {
                'additionaladdressvalidation': additionaladdressvalidation,
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
     * Void Shipment
     * The Void Shipping API is used to cancel the previously scheduled shipment
     * @param shipmentidentificationnumber The shipment's identification number
     * Alpha-numeric. Must pass 1Z rules. Must be
     * upper case. Length 18
     * @param transId An identifier unique to the request. Length 32
     * @param transactionSrc An identifier of the client/source application that is making the request.Length 512
     * @param trackingnumber The package's tracking number. You may have
     * up to 20 different tracking numbers listed.
     * If more than one tracking number, pass this
     * value as: trackingnumber=
     * ["1ZISUS010330563105","1ZISUS01033056310
     * 8"] with a coma separating each number.
     * Alpha-numeric. Must pass 1Z rules. Must be
     * upper case. Length 18
     * @param deprecatedVersion API Version.
     *
     * Valid values:
     * - v1
     *
     * @returns VOIDSHIPMENTResponseWrapper successful operation
     * @throws ApiError
     */
    public deprecatedVoidShipment(
        shipmentidentificationnumber: string,
        transId?: string,
        transactionSrc: string = 'testing',
        trackingnumber?: string,
        deprecatedVersion: string = 'v1',
    ): CancelablePromise<VOIDSHIPMENTResponseWrapper> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/shipments/{deprecatedVersion}/void/cancel/{shipmentidentificationnumber}',
            path: {
                'deprecatedVersion': deprecatedVersion,
                'shipmentidentificationnumber': shipmentidentificationnumber,
            },
            headers: {
                'transId': transId,
                'transactionSrc': transactionSrc,
            },
            query: {
                'trackingnumber': trackingnumber,
            },
            errors: {
                400: `Invalid Request`,
                401: `Unauthorized Request`,
                403: `Blocked Merchant`,
                429: `Rate Limit Exceeded`,
            },
        });
    }
}
