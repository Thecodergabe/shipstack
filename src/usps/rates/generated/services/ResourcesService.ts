/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseRateOption } from '../models/BaseRateOption';
import type { BaseRatesQuery } from '../models/BaseRatesQuery';
import type { BaseRatesQueryResult } from '../models/BaseRatesQueryResult';
import type { ExtraServiceRateDetails } from '../models/ExtraServiceRateDetails';
import type { ExtraServiceRateQuery } from '../models/ExtraServiceRateQuery';
import type { ExtraServiceRateQueryWithSingleExtraService } from '../models/ExtraServiceRateQueryWithSingleExtraService';
import type { LetterRatesOption } from '../models/LetterRatesOption';
import type { LetterRatesQuery } from '../models/LetterRatesQuery';
import type { RateListQuery } from '../models/RateListQuery';
import type { TotalRatesQuery } from '../models/TotalRatesQuery';
import type { TotalRatesQueryResult } from '../models/TotalRatesQueryResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourcesService {
    /**
     * Performs a search for base price using the submitted rate ingredients.
     * Returns an eligible price given a set of package rate ingredients.
     * @param requestBody The search parameters to be used for the query.
     * @returns BaseRateOption Successful Response
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static postBaseRatesSearch(
        requestBody?: BaseRatesQuery,
    ): CancelablePromise<BaseRateOption | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/base-rates/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                404: `Resource Not Found`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable`,
            },
        });
    }
    /**
     * Search for extra services using rate ingredients.
     * Returns eligible extra service prices, descriptions, and SKUs given a set of package rate ingredients.
     * NOTE: The request using an integer (instead of an array) for extraServices is deprecated and will be removed in June 2025.
     *
     * @param requestBody The search parameters to be used for the query.
     * @returns ExtraServiceRateDetails Successful Response
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static postExtraServiceRatesSearch(
        requestBody?: (ExtraServiceRateQuery | ExtraServiceRateQueryWithSingleExtraService),
    ): CancelablePromise<ExtraServiceRateDetails | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/extra-service-rates/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                404: `Resource Not Found`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable`,
            },
        });
    }
    /**
     * Search for eligible products using rate ingredients.
     * Returns a list of eligible prices given dimensions/weight/destination of pieces.
     *
     * Search for contract prices; either by:
     *
     * * Enterprise Payment System (EPS) account
     * * Meter number
     * * Permit number
     *
     * A specific mail class is required when searching for contract prices.
     *
     * @param requestBody The search parameters to be used for the query.
     * @returns BaseRatesQueryResult Successful Response
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static postRateList(
        requestBody?: RateListQuery,
    ): CancelablePromise<BaseRatesQueryResult | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/base-rates-list/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                404: `Resource Not Found`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable`,
            },
        });
    }
    /**
     * Returns a list of eligible prices including extra service fees given a set of package rate ingredients.
     * This API returns a list of eligible prices, including extra service fees, given the dimensions, weight, origin and destination of your package.
     * @param requestBody The search parameters to be used for the query.
     * @returns TotalRatesQueryResult Successful Response
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static postTotalRatesSearch(
        requestBody?: TotalRatesQuery,
    ): CancelablePromise<TotalRatesQueryResult | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/total-rates/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                404: `Resource Not Found`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable`,
            },
        });
    }
    /**
     * Performs a search for First-Class Mail letter prices using the submitted rate ingredients.
     * Returns an eligible price given a set of letter rate ingredients for First-Class Mail.
     *
     * @param requestBody The search parameters to be used for the query.
     * @returns LetterRatesOption Successful Response
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static postLetterRatesSearch(
        requestBody?: LetterRatesQuery,
    ): CancelablePromise<LetterRatesOption | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/letter-rates/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                404: `Resource Not Found`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable`,
            },
        });
    }
}
