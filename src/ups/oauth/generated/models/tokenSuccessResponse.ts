/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type tokenSuccessResponse = {
    /**
     * Container for token response.
     */
    token_type?: string;
    /**
     * Issue time of requested token.
     */
    issued_at?: string;
    /**
     * Client id for requested token.
     */
    client_id?: string;
    /**
     * Token to be used in API requests.
     */
    access_token?: string;
    /**
     * Scope for requested token.
     */
    scope?: string;
    /**
     * Expire time for requested token in seconds.
     */
    expires_in?: string;
    /**
     * Number of refreshes for requested token.
     */
    refresh_count?: string;
    /**
     * Status for requested token.
     */
    status?: string;
};

