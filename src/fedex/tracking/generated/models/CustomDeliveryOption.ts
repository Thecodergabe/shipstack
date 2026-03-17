/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RequestedAppointmentDetail } from './RequestedAppointmentDetail';
/**
 * List of delivery options that can be used to customize the delivery of the package.
 */
export type CustomDeliveryOption = {
    requestedAppointmentDetail?: RequestedAppointmentDetail;
    /**
     * Field which specifies the description of the custom delivery option requested <br> Example: Redirect the package to the hold location.
     */
    description?: string;
    /**
     * Field which specifies the type of the custom delivery option requested.<br> Example: REDIRECT_TO_HOLD_AT_LOCATION
     */
    type?: CustomDeliveryOption.type;
    /**
     * Field which specifies the status of the custom delivery option requested.<br> Example: HELD
     */
    status?: string;
};
export namespace CustomDeliveryOption {
    /**
     * Field which specifies the type of the custom delivery option requested.<br> Example: REDIRECT_TO_HOLD_AT_LOCATION
     */
    export enum type {
        REROUTE = 'REROUTE',
        APPOINTMENT = 'APPOINTMENT',
        DATE_CERTAIN = 'DATE_CERTAIN',
        EVENING = 'EVENING',
        REDIRECT_TO_HOLD_AT_LOCATION = 'REDIRECT_TO_HOLD_AT_LOCATION',
        ELECTRONIC_SIGNATURE_RELEASE = 'ELECTRONIC_SIGNATURE_RELEASE',
    }
}

