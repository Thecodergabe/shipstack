/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A phone number for a party. Numeric only
 */
export type PhoneNumber = {
    /**
     * Indicate the Area Code for the phone number.
     */
    areaCode?: string;
    /**
     * Indicate the extension for the phone number.
     */
    extension?: string;
    /**
     * The two-letter code used to identify a country.<br>Example: US<br><a onclick='loadDocReference("countrycodes")'>Click here to see Country Codes</a>
     */
    countryCode?: string;
    /**
     * Indicate the Personal Identification Number associated with the phone number.
     */
    personalIdentificationNumber?: string;
    /**
     * Indicate the local phone number for contacting in the event of an emergency.
     */
    localNumber?: string;
};

