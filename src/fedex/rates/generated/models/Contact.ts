/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicates the contact details.
 */
export type Contact = {
    /**
     * Specifies contact name.<br>Note: Recommended Length is 70. There's no specific validation for the length.<br> Example: John Taylor
     */
    personName?: string;
    /**
     * Specifies contact email address. Maximum length is 80. <br> Example: sample@company.com
     */
    emailAddress?: string;
    /**
     * Specifies contact phone number. Maximum length is 15. <br> Example: 1234567890
     */
    phoneNumber?: string;
    /**
     * Specifies contact phone extension. Maximum length is 6. <br> Example: 1234
     */
    phoneExtension?: string;
    /**
     * Specifies contact fax number. Maximum length is 15. <br> Example: 1234567890
     */
    faxNumber?: string;
    /**
     * Specifies contact company name. Maximum length is 35.
     */
    companyName?: string;
};

