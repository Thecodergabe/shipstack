/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseRatesQuery } from '../models/BaseRatesQuery';
import type { ExtraServiceRateDetails } from '../models/ExtraServiceRateDetails';
import type { ExtraServiceRateQuery } from '../models/ExtraServiceRateQuery';
import type { InternationalLetterRatesQuery } from '../models/InternationalLetterRatesQuery';
import type { InternationalRateListQuery } from '../models/InternationalRateListQuery';
import type { InternationalRateListQueryResult } from '../models/InternationalRateListQueryResult';
import type { LetterRatesOption } from '../models/LetterRatesOption';
import type { RateOption } from '../models/RateOption';
import type { TotalRatesQuery } from '../models/TotalRatesQuery';
import type { TotalRatesQueryResult } from '../models/TotalRatesQueryResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourcesService {
    /**
     * Performs a search for international SKUs and price using the submitted rate ingredients.
     * Given a set of SSF or scan-based rate ingredients, returns a international rates.
     * Include contract-based rates in the results when the contractId and productId are present.
     *
     * @param requestBody The search parameters to be used for the query.
     * @returns RateOption Successful Response.
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static getInternationalBaseRatesSearch(
        requestBody?: BaseRatesQuery,
    ): CancelablePromise<RateOption | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/base-rates/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                404: `Resource Not Found.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
    /**
     * Performs a search for international extra service SKUs using the submitted rate ingredients.
     * Given a set of rate ingredients, returns international extra service rates.
     * If contractId and productId are present, include contract-based rates in the results.
     *
     * @param requestBody The search parameters to be used for the query.
     * @returns ExtraServiceRateDetails Successful Response.
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static getInternationalExtraServiceRatesSearch(
        requestBody?: ExtraServiceRateQuery,
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
                404: `Resource Not Found.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
    /**
     * Performs a search for a International rate (outbound only) using the submitted values.
     * Given size/weight/destination of pieces, returns a list of potential rates. Can also search for contract rates by providing mailer id, EPS, permit number or vendor number and account.     If searching for contract rates, then a specified mail class is required.
     *
     * @param requestBody The search parameters to be used for the query.
     * @returns InternationalRateListQueryResult Successful Response.
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static getRateList(
        requestBody?: InternationalRateListQuery,
    ): CancelablePromise<InternationalRateListQueryResult | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/base-rates-list/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                404: `Resource Not Found.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
    /**
     * Returns an eligible price given a set of package rate ingredients.
     * Performs a search for base price and extraServices using the submitted rate ingredients.  If itemValue is not included the response will not include insurance, registered mail, and collect on delivery extra services.  If the extraService array is not specified then all eligible extra services will be included.
     *
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
     * Performs a search for First-Class Mail International letter prices using the submitted rate ingredients.
     * Returns an eligible price given a set of letter rate ingredients for First-Class Mail International.
     *
     * @param requestBody The search parameters to be used for the query.
     * @returns LetterRatesOption Successful Response
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static postLetterRatesSearch(
        requestBody?: InternationalLetterRatesQuery,
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
