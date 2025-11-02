/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressResponse } from '../models/AddressResponse';
import type { CityStateResponse } from '../models/CityStateResponse';
import type { ZIPCodeResponse } from '../models/ZIPCodeResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourcesService {
    /**
     * Returns the best standardized address for a given address.
     * Standardizes street addresses including city and street abbreviations as well as providing missing information such as ZIP Code&#8482; and ZIP + 4&#174;.
     *
     * Must specify a street address, a state, and either a city or a ZIP Code&#8482;.
     * @param streetAddress The number of a building along with the name of the road or street on which it is located.
     * @param state The two-character state code of the address.
     * @param firm Firm/business corresponding to the address.
     * @param secondaryAddress The secondary unit designator, such as apartment(APT) or suite(STE) number, defining the exact location of the address within a building.  For more information please see [Postal Explorer](https://pe.usps.com/text/pub28/28c2_003.htm).
     * @param city This is the city name of the address.
     * @param urbanization This is the urbanization code relevant only for Puerto Rico addresses.
     * @param zipCode This is the 5-digit ZIP code.
     * @param zipPlus4 This is the 4-digit component of the ZIP+4 code. Using the correct ZIP+4 reduces the number of times your mail is handled and can decrease the chance of a misdelivery or error.
     * @returns AddressResponse Successful operation.
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static getAddress(
        streetAddress: string,
        state: string,
        firm?: string,
        secondaryAddress?: string,
        city?: string,
        urbanization?: string,
        zipCode?: string,
        zipPlus4?: string,
    ): CancelablePromise<AddressResponse | any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/address',
            query: {
                'firm': firm,
                'streetAddress': streetAddress,
                'secondaryAddress': secondaryAddress,
                'city': city,
                'state': state,
                'urbanization': urbanization,
                'ZIPCode': zipCode,
                'ZIPPlus4': zipPlus4,
            },
            errors: {
                400: `Bad Request. There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                404: `Address Not Found.`,
                429: `Too Many Requests. Too many requests have been received from the client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
    /**
     * Returns the city and state for a given ZIP Code.
     * Returns the city and state corresponding to the given ZIP Code&#8482;.
     * @param zipCode This is the 5-digit ZIP code.
     * @returns CityStateResponse Successful operation.
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static getCityState(
        zipCode: string,
    ): CancelablePromise<CityStateResponse | any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/city-state',
            query: {
                'ZIPCode': zipCode,
            },
            errors: {
                400: `A bad request was received.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from the client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
    /**
     * Returns the ZIP Code for a given address.
     * Returns the ZIP Code&#8482; and ZIP + 4&#174; corresponding to the given address, city, and state (use USPS state abbreviations).
     * @param streetAddress The number of a building along with the name of the road or street on which it is located.
     * @param city This is the city name of the address.
     * @param state This is the two-character state code of the address.
     * @param firm Firm/business corresponding to the address.
     * @param secondaryAddress The secondary unit designator, such as apartment(APT) or suite(STE) number, defining the exact location of the address within a building.  For more information please see [Postal Explorer](https://pe.usps.com/text/pub28/28c2_003.htm).
     * @param zipCode This is the 5-digit ZIP code.
     * @param zipPlus4 This is the 4-digit component of the ZIP+4 code. Using the correct ZIP+4 reduces the number of times your mail is handled and can decrease the chance of a misdelivery or error.
     * @returns ZIPCodeResponse Successful operation.
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static getZipCode(
        streetAddress: string,
        city: string,
        state: string,
        firm?: string,
        secondaryAddress?: string,
        zipCode?: string,
        zipPlus4?: string,
    ): CancelablePromise<ZIPCodeResponse | any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/zipcode',
            query: {
                'firm': firm,
                'streetAddress': streetAddress,
                'secondaryAddress': secondaryAddress,
                'city': city,
                'state': state,
                'ZIPCode': zipCode,
                'ZIPPlus4': zipPlus4,
            },
            errors: {
                400: `There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from the client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
}
