/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tokenSuccessResponse } from '../models/tokenSuccessResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OAuthClientCredentialsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create Token
     * @param formData
     * @param xMerchantId 6-digit UPS account number.
     * @returns tokenSuccessResponse successful operation
     * @throws ApiError
     */
    public createToken(
        formData: {
            /**
             * Valid values: client_credentials
             */
            grant_type: string;
        },
        xMerchantId?: string,
    ): CancelablePromise<tokenSuccessResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/security/v1/oauth/token',
            headers: {
                'x-merchant-id': xMerchantId,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                400: `Invalid Request`,
                401: `Unauthorized Request`,
                403: `Blocked Merchant`,
                429: `Quota Limit Exceeded`,
            },
        });
    }
}
