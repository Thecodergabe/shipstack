/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Cancellation Response details.
 */
export type CancellationResponse = {
    /**
     * FAST appointment ID.
     */
    consigneeAppointmentID: string;
    /**
     * Mailer assigned ID.
     */
    shipperAppointmentRequestID: string;
    /**
     * The CRID of the appointment scheduler.
     */
    CRID: string;
    /**
     * Identifies the submitting application.
     */
    systemID?: string;
    /**
     * Dropship is YES. Origin Entry is NO.
     */
    destinationEntry: CancellationResponse.destinationEntry;
    /**
     * The reason the appointment was cancelled. Only set when the appointment is cancelled A = Appointment made in error, D = Delivery appointment Cancelled per request of consignee, E = Product combined into another existing appointment, M = Major change in expected delivery window, P = Product not available
     */
    cancelReasonCode: CancellationResponse.cancelReasonCode;
    /**
     * Comments the user enters upon appointment cancellation
     */
    cancelComments: string;
    /**
     * The cancellation number of an appointment. Used in response only.
     */
    cancelNumber?: string;
};
export namespace CancellationResponse {
    /**
     * Dropship is YES. Origin Entry is NO.
     */
    export enum destinationEntry {
        YES = 'YES',
        NO = 'NO',
    }
    /**
     * The reason the appointment was cancelled. Only set when the appointment is cancelled A = Appointment made in error, D = Delivery appointment Cancelled per request of consignee, E = Product combined into another existing appointment, M = Major change in expected delivery window, P = Product not available
     */
    export enum cancelReasonCode {
        A = 'A',
        D = 'D',
        E = 'E',
        M = 'M',
        P = 'P',
    }
}

