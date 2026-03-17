/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrackApiResponse } from '../models/TrackApiResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TrackingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Tracking
     * @param inquiryNumber The tracking number for which tracking information is requested. Each inquiry number must be between 7 and 34 characters in length.
     * @param transId An identifier unique to the request.
     * @param locale Language and country code of the user, separated by an underscore. Default value is 'en_US'
     * @param returnSignature Indicator requesting that the delivery signature image be included as part of the response (by default the image will not be returned). Returns image bytecodes of the signature.
     * @param returnMilestones returnMilestones
     * @param returnPod Return Proof of Delivery
     * @param transactionSrc Identifies the client/source application that is calling
     * @returns TrackApiResponse Tracking Information found
     * @throws ApiError
     */
    public getSingleTrackResponseUsingGet(
        inquiryNumber: string,
        transId: string,
        locale: string = 'en_US',
        returnSignature: string = 'false',
        returnMilestones: string = 'false',
        returnPod: string = 'false',
        transactionSrc: string = 'testing',
    ): CancelablePromise<TrackApiResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/track/v1/details/{inquiryNumber}',
            path: {
                'inquiryNumber': inquiryNumber,
            },
            headers: {
                'transId': transId,
                'transactionSrc': transactionSrc,
            },
            query: {
                'locale': locale,
                'returnSignature': returnSignature,
                'returnMilestones': returnMilestones,
                'returnPOD': returnPod,
            },
            errors: {
                400: `Invalid request`,
                403: `Blocked Merchant`,
                404: `Tracking number information not found`,
                500: `Internal server error`,
                503: `Resource is not available`,
            },
        });
    }
    /**
     * Track by Reference Number
     * @param referenceNumber The reference number for which tracking information is requested.
     * @param transId An identifier unique to the request.
     * @param locale Language and country code of the user, separated by an underscore. Default value is 'en_US'
     * @param fromPickUpDate The tracking information for the above reference number will be searched from this date
     * @param toPickUpDate The tracking information for the above reference number will be searched till this date
     * @param destCountry The Destination Country associated with above reference number
     * @param destZip The Destination Zip associated with above reference number
     * @param shipperNum The Shipper Number (Account Number) associated with above reference number
     * @param refNumType The Reference number type which will define the tracking information is related to small package or fgv
     * @param transactionSrc Identifies the client/source application that is calling
     * @returns TrackApiResponse Tracking Information found
     * @throws ApiError
     */
    public referenceTrackingApi(
        referenceNumber: string,
        transId: string,
        locale: string = 'en_US',
        fromPickUpDate: string = 'currentDate-14',
        toPickUpDate: string = 'currentDate',
        destCountry: string = null,
        destZip: string = null,
        shipperNum: string = null,
        refNumType: string = 'SmallPackage. Valid values: SmallPackage, fgv',
        transactionSrc: string = 'testing',
    ): CancelablePromise<TrackApiResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/track/v1/reference/details/{referenceNumber}',
            path: {
                'referenceNumber': referenceNumber,
            },
            headers: {
                'transId': transId,
                'transactionSrc': transactionSrc,
            },
            query: {
                'locale': locale,
                'fromPickUpDate': fromPickUpDate,
                'toPickUpDate': toPickUpDate,
                'destCountry': destCountry,
                'destZip': destZip,
                'shipperNum': shipperNum,
                'refNumType': refNumType,
            },
            errors: {
                400: `Invalid request`,
                403: `Blocked Merchant`,
                404: `Tracking number information not found`,
                500: `Internal server error`,
                503: `Resource is not available`,
            },
        });
    }
    /**
     * Track Each Package in Shipment
     * @param inquiryNumber The tracking number for which tracking information is requested. Each inquiry number must be between 7 and 34 characters in length.
     * @param transId An identifier unique to the request.
     * @param locale Language and country code of the user, separated by an underscore. Default value is 'en_US'
     * @param offset This is used to support pagination of package results. The offset is a 0-based index which defines the starting record to be returned.
     * @param count This is used to support pagination of package results. The count is the maximum number of packages to return starting with the offset.
     * @param transactionSrc Identifies the client/source application that is calling
     * @returns TrackApiResponse Tracking Information found
     * @throws ApiError
     */
    public shipmentTrackingApi(
        inquiryNumber: string,
        transId: string,
        locale: string = 'en_US',
        offset: string = '0',
        count: string = '50',
        transactionSrc: string = 'testing',
    ): CancelablePromise<TrackApiResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/track/v1/shipment/details/{inquiryNumber}',
            path: {
                'inquiryNumber': inquiryNumber,
            },
            headers: {
                'transId': transId,
                'transactionSrc': transactionSrc,
            },
            query: {
                'locale': locale,
                'offset': offset,
                'count': count,
            },
            errors: {
                400: `Invalid request`,
                403: `Blocked Merchant`,
                404: `Tracking number information not found`,
                500: `Internal server error`,
                503: `Resource is not available`,
            },
        });
    }
}
