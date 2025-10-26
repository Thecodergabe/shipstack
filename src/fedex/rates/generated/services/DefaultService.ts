/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { body } from '../models/body';
import type { RatcResponseVO } from '../models/RatcResponseVO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Rate and Transit times
     * This endpoint provides the ability to retrieve rate quotes and optionalll transit information. The rate is calculated based on the origin and destination of the shipment. Additional information such as carrier code, service type, or service option can be used to filter the results. If carrier code is provided, the response includes the rate quotes for the specific transportation carrier. This endpoint provides the rates for FedEx Ground and FedEx Express and does not offer rates for FedEx Freight.<br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.</i>
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns RatcResponseVO Success
     * @throws ApiError
     */
    public static rateAndTransitTimes(
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: body,
    ): CancelablePromise<RatcResponseVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rate/v1/rates/quotes',
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
