/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicates the telephone number to use for contact in the event of an emergency.
 */
export type PhoneNumber = {
    /**
     * Indicates the area code.
     */
    areaCode: string;
    /**
     * Indicates the Extension.
     */
    extension?: string;
    /**
     * The two-letter code used to identify a country.<br>Example: US
     */
    countryCode: string;
    /**
     * Indicates the Personal Identification Number.
     */
    personalIdentificationNumber?: string;
    /**
     * Telephone number to use for contact in the event of an emergency.
     */
    localNumber?: string;
};

