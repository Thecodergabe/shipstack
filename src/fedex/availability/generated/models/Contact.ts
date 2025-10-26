/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicate the contact details for this shipment.
 */
export type Contact = {
    /**
     * Specify contact name.Max Length is 70.
     */
    personName?: string;
    /**
     * Specify contact email address. Max length is 80.
     */
    emailAddress?: string;
    /**
     * Specify contact person's phone number. Max length is 15.
     */
    phoneNumber?: string;
    /**
     * Specify contact person's phone extension. Max length is 6.
     */
    phoneExtension?: string;
    /**
     * Specify contact person's fax number. Max length is 15.
     */
    faxNumber?: string;
};

