/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PickupAddress } from '../models/PickupAddress';
import type { PickupConfirmation } from '../models/PickupConfirmation';
import type { SchedulePickupRequest } from '../models/SchedulePickupRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourcesService {
    /**
     * Check pick-up address eligibility.
     * Check carrier pickup service availability at the specified address.
     * Either the city and state or the ZIP Code&#8482; is required, in addition to the street address.
     * Successful responses include the USPS standardized address when this location is eligible for carrier pickup.
     * @param streetAddress The number of a building along with the name of the road or street on which it is located.
     * @param secondaryAddress The secondary unit designator, such as apartment(APT) or suite(STE) number, defining the exact location of the address within a building.  For more information please see [Postal Explorer](https://pe.usps.com/text/pub28/28c2_003.htm).
     * @param city This is the city name of the address.
     * @param state This is the state name or two-character state code of the address. The request accepts either the full state name or a two-character state code. The response will always return the two-character state code.
     * @param zipCode This is the 5-digit ZIP code.
     * @param zipPlus4 This is the 4-digit component of the ZIP+4 code. Using the correct Zip+4 reduces the number of times your mail is handled and can decrease the chance of a misdelivery or error.
     * @param urbanization This is the urbanization code relevant only for Puerto Rico addresses.
     * @returns PickupAddress Successful Operation.
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static getCarrierPickupEligibility(
        streetAddress: string,
        secondaryAddress?: string,
        city?: string,
        state?: string,
        zipCode?: string,
        zipPlus4?: string,
        urbanization?: string,
    ): CancelablePromise<PickupAddress | any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/carrier-pickup/eligibility',
            query: {
                'streetAddress': streetAddress,
                'secondaryAddress': secondaryAddress,
                'city': city,
                'state': state,
                'ZIPCode': zipCode,
                'ZIPPlus4': zipPlus4,
                'urbanization': urbanization,
            },
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
    /**
     * Schedule a carrier pickup.
     * Schedule a carrier pickup on a specified date.
     * You can schedule pickups Monday - Saturday until 2:00 AM CT on the day of the pickup. After 2:00 AM CT, same-day pickup is not available.
     * If the address is eligible for carrier pickup, then you can schedule your pickup up to one year in advance.
     * @param requestBody
     * @returns PickupConfirmation Successful Operation.
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static postCarrierPickup(
        requestBody: SchedulePickupRequest,
    ): CancelablePromise<PickupConfirmation | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carrier-pickup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
    /**
     * Get a previously scheduled carrier pickup.
     * Get the previously scheduled carrier pickup by confirmation number.
     * Responds with the entity tag (ETag) to use when updating or cancelling this pickup.
     * @param confirmationNumber This is the Carrier Pickup confirmation number.
     * @returns PickupConfirmation Successful Operation.
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static getCarrierPickupConfirmationNumber(
        confirmationNumber: string,
    ): CancelablePromise<Array<PickupConfirmation> | any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/carrier-pickup/{confirmationNumber}',
            path: {
                'confirmationNumber': confirmationNumber,
            },
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
    /**
     * Update a previously scheduled carrier pickup.
     * Update information contained in a previously scheduled carrier pickup such as the pickup date, the types and counts of packages for the carrier to pick up, the weight or the pickup location.
     * @param confirmationNumber This is the Carrier Pickup confirmation number.
     * @param ifMatch The value of the entity tag indicating the version of the resource to get or update. All DELETE and PUT operations require an ETag to be supplied as the If-Match parameter.  The ETag is returned in the GET operation and is good for one hour or until it is used in a DELETE or PUT operation.
     * @param requestBody
     * @returns PickupConfirmation Successful Operation.
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static putCarrierPickupConfirmationNumber(
        confirmationNumber: string,
        ifMatch: string,
        requestBody: PickupConfirmation,
    ): CancelablePromise<PickupConfirmation | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/carrier-pickup/{confirmationNumber}',
            path: {
                'confirmationNumber': confirmationNumber,
            },
            headers: {
                'If-Match': ifMatch,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
    /**
     * Cancel a previously scheduled carrier pickup.
     * Cancel a previously scheduled carrier pick up.
     * A carrier pickup can no longer be updated or cancelled once cancelled.
     * A successful response indicates the carrier pickup has been cancelled.
     * @param confirmationNumber This is the Carrier Pickup confirmation number.
     * @param ifMatch The value of the entity tag indicating the version of the resource to get or update. All DELETE and PUT operations require an ETag to be supplied as the If-Match parameter.  The ETag is returned in the GET operation and is good for one hour or until it is used in a DELETE or PUT operation.
     * @returns any Successful Operation.
     * @throws ApiError
     */
    public static deleteCarrierPickupConfirmationNumber(
        confirmationNumber: string,
        ifMatch: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/carrier-pickup/{confirmationNumber}',
            path: {
                'confirmationNumber': confirmationNumber,
            },
            headers: {
                'If-Match': ifMatch,
            },
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
}
