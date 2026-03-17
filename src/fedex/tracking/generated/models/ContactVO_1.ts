/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicate the contact details for this package.<br>Note: contact is shown in response only in secured flow. For non secured flow, contact is not shown in the response.'
 */
export type ContactVO_1 = {
    /**
     * Identifies the contact person's name. Max Length is 70.<br> Example: John Taylor
     */
    personName?: string;
    /**
     * Identifies the phone number associated with this contact. Max length is 15. <br>Example: '1234567890'
     */
    phoneNumber?: string;
    /**
     * Identifies the company this contact is associated with. Max length is 35. <br> Example: Fedex
     */
    companyName?: string;
};

