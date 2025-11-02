/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientCredentials } from './ClientCredentials';
/**
 * The credentials of the client application that are verified by the authorization server.
 */
export type AuthorizationCodeCredentials = (ClientCredentials & {
    /**
     * The authorization code.
     */
    code?: string;
    /**
     * The authorization code redirect URI ( Uniform Resource Identifier) for the third-party application to receive the authorization code.
     */
    redirect_uri?: string;
} & {
    /**
     * The authorization code.
     */
    code: string;
    /**
     * The authorization code redirect URI ( Uniform Resource Identifier) for the third-party application to receive the authorization code.
     */
    redirect_uri: string;
});

