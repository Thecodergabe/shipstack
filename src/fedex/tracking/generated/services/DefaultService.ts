/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Full_Schema_Multiple_Piece_Shipment } from '../models/Full_Schema_Multiple_Piece_Shipment';
import type { Full_Schema_Notification } from '../models/Full_Schema_Notification';
import type { Full_Schema_SPOD } from '../models/Full_Schema_SPOD';
import type { Full_Schema_TCN } from '../models/Full_Schema_TCN';
import type { Full_Schema_Tracking_Numbers } from '../models/Full_Schema_Tracking_Numbers';
import type { Full_Schema_Tracking_References } from '../models/Full_Schema_Tracking_References';
import type { TrkcResponseVO_Associated } from '../models/TrkcResponseVO_Associated';
import type { TrkcResponseVO_Notifications } from '../models/TrkcResponseVO_Notifications';
import type { TrkcResponseVO_ReferenceNumber } from '../models/TrkcResponseVO_ReferenceNumber';
import type { TrkcResponseVO_SPOD } from '../models/TrkcResponseVO_SPOD';
import type { TrkcResponseVO_TCN } from '../models/TrkcResponseVO_TCN';
import type { TrkcResponseVO_TrackingNumber } from '../models/TrkcResponseVO_TrackingNumber';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Track Multiple Piece Shipment
     * This endpoint returns tracking information for multiplee piece shipments, Group MPS, or an outbounddd shipment which is linked to a return shipment.<br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.</i>
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns TrkcResponseVO_Associated Success
     * @throws ApiError
     */
    public trackMultiplePieceShipment(
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: Full_Schema_Multiple_Piece_Shipment,
    ): CancelablePromise<TrkcResponseVO_Associated> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/track/v1/associatedshipments',
            headers: {
                'x-customer-transaction-id': xCustomerTransactionId,
                'content-type': contentType,
                'x-locale': xLocale,
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Failure`,
                503: `Service Unavailable`,
            },
        });
    }
    /**
     * Send Notification
     * This endpoint helps you setup up, customize the tracking event notifications to be received for a shipment.<br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.</i>
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns TrkcResponseVO_Notifications Success
     * @throws ApiError
     */
    public f112535F47E237486334074740Bb66(
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: Full_Schema_Notification,
    ): CancelablePromise<TrkcResponseVO_Notifications> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/track/v1/notifications',
            headers: {
                'x-customer-transaction-id': xCustomerTransactionId,
                'content-type': contentType,
                'x-locale': xLocale,
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Failure`,
                503: `Service Unavailable`,
            },
        });
    }
    /**
     * Track by References
     * This endpoint returns tracking information based on alternate references other than Tracking Number such as Customer reference numbers, etc.<br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.</i>
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns TrkcResponseVO_ReferenceNumber Success
     * @throws ApiError
     */
    public trackByReferences(
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: Full_Schema_Tracking_References,
    ): CancelablePromise<TrkcResponseVO_ReferenceNumber> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/track/v1/referencenumbers',
            headers: {
                'x-customer-transaction-id': xCustomerTransactionId,
                'content-type': contentType,
                'x-locale': xLocale,
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Failure`,
                503: `Service Unavailable`,
            },
        });
    }
    /**
     * Track by Tracking Control Number
     * Use this endpoint to return tracking information based on a Tracking Control Number.<br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.</i>
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns TrkcResponseVO_TCN Success
     * @throws ApiError
     */
    public f1F9080E8452D9Ac903F562A2D2626D0(
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: Full_Schema_TCN,
    ): CancelablePromise<TrkcResponseVO_TCN> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/track/v1/tcn',
            headers: {
                'x-customer-transaction-id': xCustomerTransactionId,
                'content-type': contentType,
                'x-locale': xLocale,
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Failure`,
                503: `Service Unavailable`,
            },
        });
    }
    /**
     * Track Document
     * This endpoint helps you to request a letter that includes the recipient's signature as a proof of delivery.<br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.</i>
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns TrkcResponseVO_SPOD Success
     * @throws ApiError
     */
    public trackingDocuments(
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: Full_Schema_SPOD,
    ): CancelablePromise<TrkcResponseVO_SPOD> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/track/v1/trackingdocuments',
            headers: {
                'x-customer-transaction-id': xCustomerTransactionId,
                'content-type': contentType,
                'x-locale': xLocale,
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Failure`,
                503: `Service Unavailable`,
            },
        });
    }
    /**
     * Track by Tracking Number
     * This endpoint provides customers package tracking information based on a tracking number for various shipping services.<br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.</i>
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns TrkcResponseVO_TrackingNumber Success
     * @throws ApiError
     */
    public trackByTrackingNumber(
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: Full_Schema_Tracking_Numbers,
    ): CancelablePromise<TrkcResponseVO_TrackingNumber> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/track/v1/trackingnumbers',
            headers: {
                'x-customer-transaction-id': xCustomerTransactionId,
                'content-type': contentType,
                'x-locale': xLocale,
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Failure`,
                503: `Service Unavailable`,
            },
        });
    }
}
