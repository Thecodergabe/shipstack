/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specify the contact information.
 */
export type Contact = {
    /**
     * Specify person name.<br>Example: John Taylor
     */
    personName?: string;
    /**
     * Specify email address.<br>Example: sample@company.com
     */
    emailAddress?: string;
    /**
     * The shippers phone number. <br>Minimum length is 10 and supports maximum of 15 for certain countries using longer phone numbers.<br>Note: For US and CA, a phone number must have exactly 10 digits, plus an optional leading country code of 1 or +1.<br>Example: 918xxxxx890
     */
    phoneNumber?: string;
    /**
     * The shipper's phone extension. Max length is 6.<br>Example: 91
     */
    phoneExtension?: string;
    /**
     * Specify company name.
     */
    companyName?: string;
};

