/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Adjustments } from '../models/Adjustments';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourcesService {
    /**
     * Adjustments for a tracking number
     * The Adjustments API enables users to receive USPS Ship adjustments by a Package Identification Code (PIC) aka Tracking Number.
     * @param crid Filter by CRID.
     * @param trackingNumber The human-readable representation of package barcode data, commonly known as its tracking number.
     *
     * @param eventType The type of event for the adjustment.
     * @param destinationZipCode The destination ZIP Code&#8482;.
     * @returns Adjustments Success
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static getAdjustments(
        crid: string,
        trackingNumber: string,
        eventType: 'CENSUS' | 'DUPLICATES' | 'UNMANIFESTED',
        destinationZipCode?: string,
    ): CancelablePromise<Adjustments | any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/adjustments/{CRID}/{trackingNumber}/{eventType}',
            path: {
                'CRID': crid,
                'trackingNumber': trackingNumber,
                'eventType': eventType,
            },
            query: {
                'destinationZIPCode': destinationZipCode,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                429: `Too Many Requests. Too many requests have been received from client in a short amout of time.`,
                503: `Service Unavailable`,
            },
        });
    }
}
