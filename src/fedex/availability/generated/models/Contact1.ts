/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Contact details for the Party such as Name, Email, PhoneNumber
 */
export type Contact1 = {
    /**
     * Specify the recipient contact person's name. Max Length is 70.<br>Example: John Taylor
     */
    personName?: string;
    /**
     * Contact person's email address. Max length is 80.<br>Example: sample@company.com
     */
    emailAddress?: string;
    /**
     * Contact person's phone number. Max length is 15.<br>Example: 1234567890
     */
    phoneNumber?: string;
    /**
     * contact person's phone extension. Max length is 6.<br>Example: 91
     */
    phoneExtension?: string;
    /**
     * Contact person's fax number. Max length is 15.<br>Example: 956123
     */
    faxNumber?: string;
    /**
     * Specify contact person's company name. Max length is 35.<br>Example: FedEx
     */
    companyName?: string;
};

