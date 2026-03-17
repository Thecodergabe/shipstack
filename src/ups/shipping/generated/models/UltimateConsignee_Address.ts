/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Address information of the Ultimate consignee.  Applicable for EEI form only.
 */
export type UltimateConsignee_Address = {
    /**
     * Address line of the Ultimate consignee.  Applicable for EEI form only.
     */
    AddressLine: Array<string>;
    /**
     * City of the Ultimate consignee.  Applicable for EEI form only.
     */
    City: string;
    /**
     * State of the Ultimate consignee.  Applicable for EEI form only. Required for certain countries or territories. The length of the postal code depends on the country or territory code
     */
    StateProvinceCode?: string;
    /**
     * Town of the Ultimate consignee.  Applicable for EEI form only.
     */
    Town?: string;
    /**
     * Postal code of the Ultimate consignee.  Applicable for EEI form only. Required for certain countries or territories. The length of the postal code depends on the country or territory code.
     */
    PostalCode?: string;
    /**
     * Country or Territory code of the Ultimate consignee.  Applicable for EEI form only.
     */
    CountryCode: string;
};

