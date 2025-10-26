/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * To be done.
 */
export type AuthorizationCodeRequest = {
    /**
     * The unique identifier of the third-party client application.
     */
    client_id: string;
    /**
     * The type of response requested.  Must be set to 'code'.
     */
    response_type: AuthorizationCodeRequest.response_type;
    /**
     * The authorization code redirect uri for the third-party application to receive the authorization code.  This is used to verify the identify of the requester. The request will not be redirected to this URI.
     */
    redirect_uri?: string;
    /**
     * A client application may request a limited scope based on the resource owner's consent choices.
     */
    scope?: string;
    /**
     * An opaque value used by the client to maintain
     * state between the request and callback.  The authorization
     * server includes this value when redirecting the user-agent back
     * to the client.  The parameter SHOULD be used for preventing
     * cross-site request forgery.
     *
     *
     * The client application should provide sufficient information to complete the authorization process in their application.  It may also include a nonce value for security purposes.
     *
     */
    state?: string;
};
export namespace AuthorizationCodeRequest {
    /**
     * The type of response requested.  Must be set to 'code'.
     */
    export enum response_type {
        CODE = 'code',
    }
}

