/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdvcResponseVO } from '../models/AdvcResponseVO';
import type { body } from '../models/body';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Validate Address
     * Use this endpoint to get address resolution details. These details are the outcome of validation and resolution of the input address. An address is stated as resolved when the input address matches the known reference data.<br><i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS) mechanism.<i>
     * @param contentType This is used to indicate the media type of the resource. The media type is a string sent along with the file indicating format of the file.
     * @param authorization This indicates the authorization token for the input request.
     * @param xCustomerTransactionId This element allows you to assign a unique identifier to your transaction. This element is also returned in the reply and helps you match the request to the reply.
     * @param xLocale This indicates the combination of language code and country code.  <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     * @param requestBody
     * @returns AdvcResponseVO Success
     * @throws ApiError
     */
    public validateAddress(
        contentType: string,
        authorization: string,
        xCustomerTransactionId?: string,
        xLocale?: string,
        requestBody?: body,
    ): CancelablePromise<AdvcResponseVO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/address/v1/addresses/resolve',
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
