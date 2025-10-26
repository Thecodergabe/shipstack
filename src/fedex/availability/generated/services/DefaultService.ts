/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailabilitycxsResponseVO } from '../models/AvailabilitycxsResponseVO';
import type { body } from '../models/body';
import type { body_1 } from '../models/body_1';
import type { body_specialserviceoptions } from '../models/body_specialserviceoptions';
import type { CmdcResponseVO } from '../models/CmdcResponseVO';
import type { TransitTimeOutputVO } from '../models/TransitTimeOutputVO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Retrieve Services and Transit Times
     * This endpoint gives the estimated transit times for a particular shipment.<br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.</i>
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply. It also helps you to track the transaction with APIF.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns TransitTimeOutputVO Success
     * @throws ApiError
     */
    public static retrieveServicesAndTransitTimes(
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: body,
    ): CancelablePromise<TransitTimeOutputVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/availability/v1/transittimes',
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
            },
        });
    }
    /**
     * Retrieve Services and Packaging Options
     * Use this endpoint to return a list of all FedEx Express or FedEx Ground services and packaging type combinations that are available between the input origin and destination and subpackaging information.<br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.</i>
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns CmdcResponseVO Success
     * @throws ApiError
     */
    public static getPackageAndServiceOptions(
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: body_1,
    ): CancelablePromise<CmdcResponseVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/availability/v1/packageandserviceoptions',
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
     * Retrieve Special Service Options
     * Use this endpoint to request list of all available FedEx services, shipment special, service options along with delivery signature options and return shipment types that are available between an origin and destination. You can filter the results using FedEx carrier code(s) and/or service type(s) for specific services.<br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.</i>
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns AvailabilitycxsResponseVO Success
     * @throws ApiError
     */
    public static getSpecialServiceOptions(
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: body_specialserviceoptions,
    ): CancelablePromise<AvailabilitycxsResponseVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/availability/v1/specialserviceoptions',
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
