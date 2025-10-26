/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicate the contact details for this shipment.
 */
export type PartyContact = {
    /**
     * Specify contact name. Maximum length is 70. <br>Note: Either the companyName or personName is mandatory.<br> Example: John Taylor
     */
    personName?: string;
    /**
     * Specify contact email address. Maximum length is 80. <br> Example: sample@company.com
     */
    emailAddress?: string;
    /**
     * Specify contact phone extension. Maximum length is 6. <br> Example: 1234
     */
    phoneExtension?: string;
    /**
     * The shipper's phone number. <br>Minimum length is 10 and supports maximum of 15 for certain countries using longer phone numbers.<br>Note: For US and CA, a phone number must have exactly 10 digits, plus an optional leading country code of '1' or '+1'.<br>Example: 918xxxxx890
     */
    phoneNumber: string;
    /**
     * The shipper's company name. Max length is 35.<br>Example: FedEx
     */
    companyName?: string;
};

