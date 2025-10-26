/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicate the phone number. Only numeric values allowed.<br> Note that phoneNumber is mandatory when homedeliveryPremiumType is DATE_CERTAIN or EVENING.
 */
export type PhoneNumber1 = {
    /**
     * Area-Code<br>Example: 901
     */
    areaCode?: string;
    /**
     * Local Number<br>Example: 3575012
     */
    localNumber?: string;
    /**
     * Extension<br>Example: 200
     */
    extension?: string;
    /**
     * Personal Identification Number<br>Example: 98712345
     */
    personalIdentificationNumber?: string;
};

