/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type candidateAddress = {
    /**
     * Spelled out country name.
     */
    countryName: string;
    /**
     * Country code, follows ISO-defined country codes.
     */
    countryCode?: string;
    /**
     * Present on response when candidate value has a political division 1 value available.
     */
    stateProvince?: string;
    /**
     * Present on response when candidate value has a political division 2 value available.
     */
    city?: string;
    /**
     * Present on response when candidate value has a political division 3 value available.
     */
    town?: string;
    /**
     * Present on response when candidate has a postal code value available
     */
    postalCode?: string;
    /**
     * Present on response when candidate value has a postal code range value available. This is the postal range low value.
     */
    postalCodeLow?: string;
    /**
     * Present on response when candidate value has a postal code range value available. This is the postal range high value.
     */
    postalCodeHigh?: string;
};

