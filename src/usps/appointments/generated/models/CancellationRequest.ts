/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Cancellation Request details.
 */
export type CancellationRequest = {
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
    destinationEntry: CancellationRequest.destinationEntry;
    /**
     * The reason the appointment was cancelled. Only set when the appointment is cancelled.
     *
     * - `A` - Appointment made in error
     * - `D` - Delivery appointment Cancelled per request of consignee
     * - `E` - Product combined into another existing appointment
     * - `M` - Major change in expected delivery window
     * - `P` - Product not available
     *
     */
    cancelReasonCode: CancellationRequest.cancelReasonCode;
    /**
     * Comments the user enters upon appointment cancellation
     */
    cancelComments: string;
};
export namespace CancellationRequest {
    /**
     * Dropship is YES. Origin Entry is NO.
     */
    export enum destinationEntry {
        YES = 'YES',
        NO = 'NO',
    }
    /**
     * The reason the appointment was cancelled. Only set when the appointment is cancelled.
     *
     * - `A` - Appointment made in error
     * - `D` - Delivery appointment Cancelled per request of consignee
     * - `E` - Product combined into another existing appointment
     * - `M` - Major change in expected delivery window
     * - `P` - Product not available
     *
     */
    export enum cancelReasonCode {
        A = 'A',
        D = 'D',
        E = 'E',
        M = 'M',
        P = 'P',
    }
}

