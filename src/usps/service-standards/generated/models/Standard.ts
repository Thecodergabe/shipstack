/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A Service standard for a unique Mail Class, Acceptance Location, and Delivery Location.
 */
export type Standard = {
    /**
     * The requested mail class.
     */
    mailClass?: string;
    /**
     * When a mailClass will be returned with more than one standard the notes will be returned with information on what differentiates the two standards.
     */
    notes?: Standard.notes;
    /**
     * The ZIP Code&#8482; of the origin address.
     */
    originZIPCode?: string;
    /**
     * The ZIP Code&#8482; of the destination address.
     */
    destinationZIPCode?: string;
    /**
     * The number of days it will take for the package or mail piece will be delivered.
     */
    days?: number;
    /**
     * This is the effective acceptance date of the package or mail piece.
     */
    effectiveAcceptanceDate?: string;
    /**
     * This is the scheduled delivery date of the package or mail piece.
     */
    scheduledDeliveryDate?: string;
    /**
     * Indicates whether the service standard information is for Presort mail.
     */
    presort?: boolean;
    /**
     * Indicates if the standard is for Priority Mail Next Day service.
     */
    isPriorityMailNextDay?: boolean;
};
export namespace Standard {
    /**
     * When a mailClass will be returned with more than one standard the notes will be returned with information on what differentiates the two standards.
     */
    export enum notes {
        WEIGHT_LESS_THAN_1_POUND = 'WEIGHT_LESS_THAN_1_POUND',
        WEIGHT_GREATER_THAN_OR_EQUAL_TO_1_POUND = 'WEIGHT_GREATER_THAN_OR_EQUAL_TO_1_POUND',
    }
}

