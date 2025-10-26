/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Full_Schema_Cancel_Shipment } from '../models/Full_Schema_Cancel_Shipment';
import type { Full_Schema_Create_Tag } from '../models/Full_Schema_Create_Tag';
import type { Full_Schema_Ship } from '../models/Full_Schema_Ship';
import type { FullSchema_CancelTag } from '../models/FullSchema_CancelTag';
import type { FullSchema_getConfirmedShipmentAsyncResults } from '../models/FullSchema_getConfirmedShipmentAsyncResults';
import type { FullSchema_VerifyShipment } from '../models/FullSchema_VerifyShipment';
import type { SHPCResponseVO } from '../models/SHPCResponseVO';
import type { SHPCResponseVO_CancelShipment } from '../models/SHPCResponseVO_CancelShipment';
import type { SHPCResponseVO_CreateTag } from '../models/SHPCResponseVO_CreateTag';
import type { SHPCResponseVO_GetOpenShipmentResults } from '../models/SHPCResponseVO_GetOpenShipmentResults';
import type { SHPCResponseVO_ShipShipment } from '../models/SHPCResponseVO_ShipShipment';
import type { SHPCResponseVO_Validate } from '../models/SHPCResponseVO_Validate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Create Shipment
     * This endpoint helps you to create shipment requests thereby validating all the shipping input information and either generates the labels (if the responses is synchronous) or a job ID if transaction is processed using asynchronous method.<br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.</i>
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns SHPCResponseVO_ShipShipment Success
     * @throws ApiError
     */
    public static createShipment(
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: Full_Schema_Ship,
    ): CancelablePromise<SHPCResponseVO_ShipShipment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ship/v1/shipments',
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
     * Cancel Shipment
     * Use this endpoint to cancel FedEx Express and Ground shipments that have not already been tendered to FedEx. This request will cancel all packages within the shipment.<br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.</i>
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns SHPCResponseVO_CancelShipment Success
     * @throws ApiError
     */
    public static cancelShipment(
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: Full_Schema_Cancel_Shipment,
    ): CancelablePromise<SHPCResponseVO_CancelShipment> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/ship/v1/shipments/cancel',
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
     * Retrieve Async Ship
     * This endpoint helps you to process confirmed shipments asynchronously (above 40 packages) and produce results based on job id.<br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.</i>
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This transaction Id helps the customers to track the transaction with APIF.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns SHPCResponseVO_GetOpenShipmentResults Success
     * @throws ApiError
     */
    public static getConfirmedShipmentAsyncResults(
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: FullSchema_getConfirmedShipmentAsyncResults,
    ): CancelablePromise<SHPCResponseVO_GetOpenShipmentResults> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ship/v1/shipments/results',
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
     * Validate Shipment
     * Use this endpoint to verify the accuracy of a shipment request prior to actually submitting shipment request. This allow businesses that receive shipping orders from end-user/customers to verify the shipment information prior to submitting a create shipment request to FedEx and printing a label. If for any reason the information needs to be edited or changed, it can be done while the end-user is still available to confirm the changes.<br><br>Note:<ul><li>This is shipment level validation hence supports validation for single piece shipment only.</li><li>Shipment validation is supported for all Express and Ground - Domestic as well as international shipments with all applicable special services. </li><li>Shipment validation is supported for SmartPost and not for Freight LTL shipments.</li></ul><br><br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.</i>
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns SHPCResponseVO_Validate Success
     * @throws ApiError
     */
    public static shipmentPackageValidate(
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: FullSchema_VerifyShipment,
    ): CancelablePromise<SHPCResponseVO_Validate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ship/v1/shipments/packages/validate',
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
     * Create Tag
     * FedEx creates and delivers a return shipping label to your customer and collects the item for return. Your customer needs to have the package ready for pickup when the FedEx driver arrives. Use this endpoint to create tag requests for FedEx Express and FedEx Ground shipments.<br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.</i>
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns SHPCResponseVO_CreateTag Success
     * @throws ApiError
     */
    public static createTag(
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: Full_Schema_Create_Tag,
    ): CancelablePromise<SHPCResponseVO_CreateTag> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ship/v1/shipments/tag',
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
     * Cancel Tag
     * This endpoint cancels a FedEx Return Tag and the associated pickup for FedEx Express and FedEx Ground shipments if the shipment has not yet been picked up by the courier.<br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.</i>
     * @param shipmentid
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns SHPCResponseVO Success
     * @throws ApiError
     */
    public static cancelTag(
        shipmentid: string,
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: FullSchema_CancelTag,
    ): CancelablePromise<SHPCResponseVO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/ship/v1/shipments/tag/cancel/{shipmentid}',
            path: {
                'shipmentid': shipmentid,
            },
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
