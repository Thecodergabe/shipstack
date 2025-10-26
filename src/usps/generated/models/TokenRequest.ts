/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The base object for an OAuth token request, in accordance with OAuth industry standards.
 */
export type TokenRequest = {
    /**
     * The OAuth standard flow being requested by the client application.
     */
    grant_type: TokenRequest.grant_type;
    /**
     * The OAuth scope being requested by the client application, specified as a list of space-delimited, case-sensitive strings.  If ommitted then the default scope configured for the client application will be used.
     */
    scope?: string;
};
export namespace TokenRequest {
    /**
     * The OAuth standard flow being requested by the client application.
     */
    export enum grant_type {
        AUTHORIZATION_CODE = 'authorization_code',
        CLIENT_CREDENTIALS = 'client_credentials',
        REFRESH_TOKEN = 'refresh_token',
        PASSWORD = 'password',
    }
}

