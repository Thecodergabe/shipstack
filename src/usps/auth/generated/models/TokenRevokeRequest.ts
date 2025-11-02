/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The token revocation request.
 */
export type TokenRevokeRequest = {
    /**
     * The token (a hash value).
     */
    token: string;
    /**
     * A hint to the type of the given token. See OAuth Token Types Hint registry, https://www.rfc-editor.org/rfc/rfc7009#section-4.1.2.1
     */
    token_type_hint?: TokenRevokeRequest.token_type_hint;
};
export namespace TokenRevokeRequest {
    /**
     * A hint to the type of the given token. See OAuth Token Types Hint registry, https://www.rfc-editor.org/rfc/rfc7009#section-4.1.2.1
     */
    export enum token_type_hint {
        ACCESS_TOKEN = 'access_token',
        REFRESH_TOKEN = 'refresh_token',
    }
}

