/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The authorization server responds with an HTTP 400 (Bad Request) status code (unless specified otherwise) and includes the following parameters with the response.
 */
export type StandardErrorResponse = {
    /**
     * See [The OAuth 2.0 Authorization Framework, Section 5.2](https://datatracker.ietf.org/doc/html/rfc6749#section-5.2), for information about the specific error codes.
     */
    error?: StandardErrorResponse.error;
    /**
     * A human-readable text providing additional information, used to assist the client developer in understanding the error that occurred.
     */
    error_description?: string;
    /**
     * A URI identifying a human-readable web page with information about the error, used to provide the client developer with additional information about the error.
     */
    error_uri?: string;
};
export namespace StandardErrorResponse {
    /**
     * See [The OAuth 2.0 Authorization Framework, Section 5.2](https://datatracker.ietf.org/doc/html/rfc6749#section-5.2), for information about the specific error codes.
     */
    export enum error {
        INVALID_REQUEST = 'invalid_request',
        INVALID_CLIENT = 'invalid_client',
        INVALID_GRANT = 'invalid_grant',
        UNAUTHORIZED_CLIENT = 'unauthorized_client',
        UNSUPPORTED_GRANT_TYPE = 'unsupported_grant_type',
        INVALID_SCOPE = 'invalid_scope',
    }
}

