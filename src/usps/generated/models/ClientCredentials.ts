/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenRequest } from './TokenRequest';
/**
 * The credentials of the client application that are verified by the authorization server.
 */
export type ClientCredentials = (TokenRequest & {
    /**
     * The unique identifier issued to the client application making the request. Used for authenticating the client application.
     *
     * You will need to add an app to get a client Id and secret. These are the Consumer Key and Consumer Secret values respectfully in the API developer portal.
     */
    client_id?: string;
    /**
     * The shared secret issued to the client application making the request. Used for authenticating the client application.
     *
     * You will need to add an app to get a client Id and secret. These are the Consumer Key and Consumer Secret values respectfully in the API developer portal.
     */
    client_secret?: string;
} & {
    /**
     * The unique identifier issued to the client application making the request. Used for authenticating the client application.
     *
     * You will need to add an app to get a client Id and secret. These are the Consumer Key and Consumer Secret values respectfully in the API developer portal.
     */
    client_id: string;
    /**
     * The shared secret issued to the client application making the request. Used for authenticating the client application.
     *
     * You will need to add an app to get a client Id and secret. These are the Consumer Key and Consumer Secret values respectfully in the API developer portal.
     */
    client_secret: string;
});

