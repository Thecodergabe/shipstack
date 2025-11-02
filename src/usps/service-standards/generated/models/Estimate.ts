/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Estimate_delivery } from './Estimate_delivery';
import type { Facility } from './Facility';
/**
 * Delivery estimate for the unique combination of Mail Class, Destination Type, Acceptance Location, and Delivery Time
 */
export type Estimate = {
    /**
     * MailClass from request  If left blank in the request then it will return standards for PRIORITY_MAIL_EXPRESS, PRIORITY_MAIL, FIRST_CLASS_PACKAGE_SERVICE, and PACKAGE_SERVICES which covers LIBRARY_MAIL, MEDIA_MAIL, and BOUND_PRINTED_MATTER.
     */
    mailClass?: string;
    /**
     * When a mailClass will be returned with more than one estimate the notes will be returned with information on what differentiates the two estimates.
     */
    notes?: Estimate.notes;
    /**
     * Destination type indicator for non-expedited mailing.
     */
    destinationType?: string;
    /**
     * The requested acceptance date and time in locale time at the entry location where the mailer intends to enter the pieces into the mail stream.
     */
    acceptanceDateTime?: string;
    /**
     * The effective acceptance date based on the requested acceptance date, time, and the facility cut-off times.
     */
    effectiveAcceptanceDate?: string;
    /**
     * The latest time packages may be entered at the acceptance location. Packages entered after the cut-off time will  have an effective date one day after the requested acceptance date and time.
     */
    cutOffTime?: string;
    /**
     * The service standard expected based on the origin, destination, and mail class.
     */
    serviceStandard?: string;
    /**
     * The service standard text corresponding to the code.
     */
    serviceStandardMessage?: string;
    acceptanceLocations?: Facility;
    delivery?: Estimate_delivery;
    /**
     * Indicates whether the service standard information is for Presort mail.
     */
    presort?: boolean;
    /**
     * Indicates if the estimate is for Priority Mail Next Day service.
     */
    isPriorityMailNextDay?: boolean;
};
export namespace Estimate {
    /**
     * When a mailClass will be returned with more than one estimate the notes will be returned with information on what differentiates the two estimates.
     */
    export enum notes {
        WEIGHT_LESS_THAN_1_POUND = 'WEIGHT_LESS_THAN_1_POUND',
        WEIGHT_GREATER_THAN_OR_EQUAL_TO_1_POUND = 'WEIGHT_GREATER_THAN_OR_EQUAL_TO_1_POUND',
    }
}

