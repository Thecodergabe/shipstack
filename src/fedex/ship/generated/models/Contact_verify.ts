/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicate the contact details of the shipper.
 */
export type Contact_verify = {
    /**
     * Specify contact person name.<br>Recommended length is 70.<br>Note: There's no specific validation for the person name.<br> Example: John Taylor
     */
    personName?: string;
    /**
     * Specify contact email address. Maximum length is 80. <br> Example: sample@company.com
     */
    emailAddress?: string;
    /**
     * Specify contact phone number. <br>Minimum length is 10 and supports maximum of 15 for certain countries using longer phone numbers. <br>Note: Recommended Maximum length is 15 and there's no specific validation will be done for the phone number. <br> Example: 918xxxxx890
     */
    phoneNumber?: string;
    /**
     * Specify contact phone extension. <br>Note: Recommended length is 6. There's no specific validation for the phone extension. <br> Example: 1234
     */
    phoneExtension?: string;
    /**
     * Specify contact fax number.<br>Note: Recommended length is 15. There's no specific validation for the fax number.<br> Example: 1234567890
     */
    faxNumber?: string;
    /**
     * Specify contact company name.<br>Recommended length is 35.<br>Note: There's no specific validation for the company name.
     */
    companyName?: string;
};

