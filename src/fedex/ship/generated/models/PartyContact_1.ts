/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicate the contact details for this shipment.
 */
export type PartyContact_1 = {
    /**
     * Specify contact name. Maximum length is 70. <br> Example: John Taylor
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
     * Specify contact phone number. <br>Minimum length is 10 and supports Maximum as 15 for certain countries using longer phone numbers. <br>Note: Recommended Maximum length is 15 and there's no specific validation will be done for the phone number. <br> Example: 918xxxxx890
     */
    phoneNumber?: string;
    /**
     * Specify contact company name.<br>Recommended length is 35.<br>Note: There's no specific validation of the company name.
     */
    companyName?: string;
    /**
     * Specify contact person's fax number. Maximum length is 15.
     */
    faxNumber?: string;
};

