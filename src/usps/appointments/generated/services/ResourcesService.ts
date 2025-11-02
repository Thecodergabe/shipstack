/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppointmentFull } from '../models/AppointmentFull';
import type { CancellationRequest } from '../models/CancellationRequest';
import type { CancellationResponse } from '../models/CancellationResponse';
import type { SlotAvailability } from '../models/SlotAvailability';
import type { Slots } from '../models/Slots';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourcesService {
    /**
     * Create an appointment
     * Create Appointment Request provides the ability to create an appointment.
     *
     * @param requestBody The input parameters corresponding to the supported grant types.
     *
     * @returns any Other unanticipated errors that may occur.
     * @returns AppointmentFull Resource created
     * @throws ApiError
     */
    public static postFastAppointment(
        requestBody?: AppointmentFull,
    ): CancelablePromise<any | AppointmentFull> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fast-appointments/appointment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable`,
            },
        });
    }
    /**
     * Update an appointment
     * Update Appointment Request provides the ability to update an appointment.
     *
     * @param requestBody The input parameters corresponding to the supported grant types.
     *
     * @returns any Other unanticipated errors that may occur.
     * @returns AppointmentFull Resource created
     * @throws ApiError
     */
    public static putFastAppointment(
        requestBody?: AppointmentFull,
    ): CancelablePromise<any | AppointmentFull> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/fast-appointments/appointment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable`,
            },
        });
    }
    /**
     * Cancel an appointment
     * Cancel Appointment Request provides the ability to cancel an appointment.
     *
     * @param requestBody The input parameters corresponding to the supported grant types.
     *
     * @returns CancellationResponse Resource deleted
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static deleteFastAppointment(
        requestBody?: CancellationRequest,
    ): CancelablePromise<CancellationResponse | any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/fast-appointments/appointment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable`,
            },
        });
    }
    /**
     * Request to find available appointment times
     * Allows customers to check for appointment slots at the requested facility.
     *
     * @param requestBody The input parameters corresponding to the supported grant types.
     *
     * @returns Slots Successful Response
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static getAppointmentAvailability(
        requestBody?: SlotAvailability,
    ): CancelablePromise<Slots | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/appointment-availability',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable`,
            },
        });
    }
}
