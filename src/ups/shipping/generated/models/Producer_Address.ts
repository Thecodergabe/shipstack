/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Address information of the Producer.  Applies to USMCA. Only applicable if producer option is empty or not present. Conditionally required for: USMCA, when Producer option is not specified.
 */
export type Producer_Address = {
    /**
     * Address line of the Producer.
     */
    AddressLine: Array<string>;
    /**
     * City of the Producer.  Applies to USMCA. Conditionally required for: USMCA, when Producer option is not specified.
     */
    City: string;
    /**
     * State of the Producer.  Applies to USMCA. Required for certain countries or territories.
     */
    StateProvinceCode?: string;
    /**
     * Town of the Producer.
     */
    Town?: string;
    /**
     * Postal code of the Producer.  Applies to USMCA. Required for certain countries or territories. The length of the postal code depends on the country or territory code.
     */
    PostalCode?: string;
    /**
     * Country or Territory code of the Producer.  Applies to USMCA.
     */
    CountryCode: string;
};

