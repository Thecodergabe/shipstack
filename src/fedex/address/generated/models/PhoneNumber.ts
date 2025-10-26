/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * PhoneNumber Model
 */
export type PhoneNumber = {
    /**
     * Area-Code of given area
     */
    areaCode: string;
    /**
     * Extension of the phone number
     */
    extension?: string;
    /**
     * The two-letter code used to identify a country.
     */
    countryCode: string;
    /**
     * Personal Identification Number
     */
    personalIdentificationNumber?: string;
    /**
     * Local Number of the person
     */
    localNumber: string;
};

