/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specify the Hold at location contact details.
 */
export type TransitTimeRequestedShipment_shipmentSpecialServices_holdAtLocationDetail_locationContactAndAddress_contact = {
    /**
     * Specify contact name.<br>Note: Recommended Length is 70. There's no specific validation for the length.<br> Example: John Taylor
     */
    personName?: string;
    /**
     * Specify contact email address. Maximum length is 80. <br> Example: sample@company.com
     */
    emailAddress?: string;
    /**
     * Specify contact phone number. Maximum length is 15. <br> Example: 1234567890
     */
    phoneNumber?: string;
    /**
     * Specify contact phone extension. Maximum length is 6. <br> Example: 1234
     */
    phoneExtension?: string;
    /**
     * Specify contact fax number. Maximum length is 15. <br> Example: 1234567890
     */
    faxNumber?: string;
    /**
     * Specify contact company name. Maximum length is 35.
     */
    companyName?: string;
};

