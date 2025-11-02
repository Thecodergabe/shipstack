/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthorizationCodeCredentials } from '../models/AuthorizationCodeCredentials';
import type { ClientCredentials } from '../models/ClientCredentials';
import type { ProviderAccessTokenResponse } from '../models/ProviderAccessTokenResponse';
import type { ProviderTokensResponse } from '../models/ProviderTokensResponse';
import type { RefreshTokenCredentials } from '../models/RefreshTokenCredentials';
import type { TokenRevokeRequest } from '../models/TokenRevokeRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourcesService {
    /**
     * Generate OAuth tokens.
     * Issue one or more OAuth tokens for a client application to use in making subsequent resource requests. Based on the _OAuth 2.0 Authorization Framework_, IETF Draft RFC 6749, October 2012, see [IETF 6749](https://datatracker.ietf.org/doc/html/rfc6749). **Access tokens are valid for eight hours after issuance, while refresh tokens are valid for seven days**.
     *
     * Note that the following OAuth grant types are supported:
     * - **Client Credentials Grant**, see [IETF 6749, section 4.4](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4).
     * - **Refresh Token**, see [IETF 6749, section 6](https://datatracker.ietf.org/doc/html/rfc6749#section-6)
     * - **Authorization Code Grant**, see [IETF 6749, section 4.1](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1).
     * @param formData The input parameters corresponding to the supported grant types. You will need to add an app to get a client ID and secret. These are the Consumer Key and Consumer Secret values in the API developer portal.
     * @returns any Token Issued. Client application authorization has been granted and OAuth token(s) issued.
     * @throws ApiError
     */
    public static postToken(
        formData?: (ClientCredentials | RefreshTokenCredentials | AuthorizationCodeCredentials),
    ): CancelablePromise<(ProviderAccessTokenResponse | ProviderTokensResponse)> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/token',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                400: `Bad Request.  Check the input parameters and values.`,
                401: `Unauthorized Request.  Check the authentication scheme and values being used to make the request.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amout of time.`,
                503: `Service Unavailable.`,
            },
        });
    }
    /**
     * Invalidate OAuth tokens.
     * Prevent tokens from being further used to access APIs by disposing one or more OAuth tokens that are no longer needed. Basic Authentication is used to access this resource, using the issued client Id and client secret. This resource is based on the *OAuth 2.0 Token Revocation* IETF Draft RFC 7009, August 2013.
     * * [IETF 7009](https://datatracker.ietf.org/doc/html/rfc7009).
     *
     * @param formData The token to be inspected. The hint is used to locate the token.
     * @returns any Successful Operation. No response payload.
     * @throws ApiError
     */
    public static postRevoke(
        formData?: TokenRevokeRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/revoke',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                400: `Bad Request.  Check the input parameters and values.`,
                401: `Unauthorized Request.  Check the authentication scheme and values being used to make the request.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amout of time.`,
            },
        });
    }
}
