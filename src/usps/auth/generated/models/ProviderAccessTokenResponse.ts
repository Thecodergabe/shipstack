/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessTokenResponse } from './AccessTokenResponse';
/**
 * The OAuth token response for the implementation provided by the authorization server.
 */
export type ProviderAccessTokenResponse = (AccessTokenResponse & {
    /**
     * The date and time the access token was issued, expressed in Unix epoch time in milliseconds.
     */
    issued_at?: number;
    /**
     * The status of the access token.
     */
    status?: ProviderAccessTokenResponse.status;
    /**
     * The authority that issued the token(s).
     */
    issuer?: string;
    /**
     * The unique identifier for the client application.
     */
    client_id?: string;
    /**
     * The name of the client application.
     */
    application_name?: string;
    /**
     * The list of API products approved for use by the client application.
     */
    api_products?: string;
    /**
     * The base64-encoded public cryptographic key used to validate the signature of the access token.  Validation ensures that the access token has not been tampered with and it originated from a known, trusted source.
     */
    public_key?: string;
});
export namespace ProviderAccessTokenResponse {
    /**
     * The status of the access token.
     */
    export enum status {
        APPROVED = 'approved',
        REVOKED = 'revoked',
    }
}

