/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Notifications to the end user that provide additional information relevant to the tracked shipment. For example, a notification may indicate that a change in behavior has occurred.
 */
export type InformationNoteDetail = {
    /**
     * Field which holds the code that designates the type of informational message being returned. <br>Example: 'CLEARANCE_ENTRY_FEE_APPLIES'
     */
    code?: string;
    /**
     * Field which holds the The informational message in human readable form.<br> Example: this is an informational message
     */
    description?: string;
};

