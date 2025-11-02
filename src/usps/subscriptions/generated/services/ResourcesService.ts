/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginationMetadata } from '../models/PaginationMetadata';
import type { Subscriptions } from '../models/Subscriptions';
import type { TrackingSubscription } from '../models/TrackingSubscription';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourcesService {
    /**
     * Get list of all Subscriptions.
     * Get list of all Tracking Subscriptions you have created, by MID or Tracking Number.
     * @param mid Filter by MID. Comma-separated list of values.
     * @param trackingNumber Filter by tracking number. Comma-separated list of values.
     * @param offset The number of items to skip before returning the results
     * @param limit The number of items to return
     * @returns any This will return a list of subscriptions based on the given values of the query parameters.
     * @throws ApiError
     */
    public static getSubscriptionsTracking(
        mid?: Array<string>,
        trackingNumber?: Array<string>,
        offset?: number,
        limit: number = 20,
    ): CancelablePromise<{
        subscriptions?: Subscriptions;
        metadata?: PaginationMetadata;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions',
            query: {
                'MID': mid,
                'trackingNumber': trackingNumber,
                'offset': offset,
                'limit': limit,
            },
            errors: {
                400: `Invalid label request information.`,
                401: `Unauthorized.`,
                403: `Access Denied.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amout of time.`,
                503: `Service Unavailable.`,
            },
        });
    }
    /**
     * Create a Subscription.
     * Create a Subscription to Tracking Events Topic. A subscription can be created for a mailer id or a tracking number.  You also can specify what type of tracking events you want to receive.
     * @param requestBody The input parameters corresponding to the supported grant types.
     * @returns any Other unanticipated errors that may occur.
     * @returns TrackingSubscription Subscription Created.
     * @throws ApiError
     */
    public static postSubscriptionsTracking(
        requestBody: TrackingSubscription,
    ): CancelablePromise<any | TrackingSubscription> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid request information.`,
                401: `Unauthorized.`,
                403: `Access Denied.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service Unavailable.`,
            },
        });
    }
    /**
     * Get a Subscription by ID.
     * Get a previously created subscription by its unique id.
     * @param subscriptionId The unique identifier of the subscription.
     * @returns TrackingSubscription This will return the unique subscription.
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static getSubscriptionsTrackingId(
        subscriptionId: string,
    ): CancelablePromise<TrackingSubscription | any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
            },
            errors: {
                400: `Bad Request.`,
                401: `Unauthorized.`,
                403: `Forbidden.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service Unavailable.`,
            },
        });
    }
    /**
     * Edit Subscription by ID.
     * Use this endpoint to update the callback url, secret, or status.  If filter properties need to change, a new subscription needs to be created.
     * @param subscriptionId The unique identifier of the subscription.
     * @param ifMatch The value of the entity tag indicating the version of the resource to get or update. All DELETE and PUT operations require an ETag to be supplied as the If-Match parameter.  The ETag is returned in the GET operation and is good for one hour or until it is used in a DELETE or PUT operation.
     * @param requestBody The input parameters corresponding to the supported grant types.
     * @returns TrackingSubscription Subscription Updated
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static putSubscriptionsTrackingId(
        subscriptionId: string,
        ifMatch: string,
        requestBody: TrackingSubscription,
    ): CancelablePromise<TrackingSubscription | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
            },
            headers: {
                'If-Match': ifMatch,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.`,
                401: `Unauthorized.`,
                403: `Forbidden.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amout of time.`,
                503: `Service Unavailable.`,
            },
        });
    }
    /**
     * Delete a Subscription by ID.
     * Use this endpoint to delete a Subscription by its unique identifier.
     * @param subscriptionId The unique identifier of the subscription.
     * @param ifMatch The value of the entity tag indicating the version of the resource to get or update. All DELETE and PUT operations require an ETag to be supplied as the If-Match parameter.  The ETag is returned in the GET operation and is good for one hour or until it is used in a DELETE or PUT operation.
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static deleteSubscriptionsTrackingId(
        subscriptionId: string,
        ifMatch: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscriptions/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
            },
            headers: {
                'If-Match': ifMatch,
            },
            errors: {
                400: `Bad Request.`,
                401: `Unauthorized.`,
                403: `Access Denied.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amout of time.`,
                503: `Service Unavailable.`,
            },
        });
    }
}
