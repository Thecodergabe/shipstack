/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This is the internal FedEx-system recognized address and location details.
 */
export type CleansedAddressandLocationDetail = {
    /**
     * This is the FedEx recognized service area code.
     */
    serviceArea?: string;
    /**
     * This represents the FedEx-system recognized country code.<br>Example: US<br><a onclick='loadDocReference("countrycodes")'>Click here to see Country Codes</a>
     */
    countryCode?: string;
    /**
     * This is the unique FedEx location identifier.
     */
    locationId?: string;
    /**
     * This is a FedEx unique identifier for the Airport.
     */
    airportId?: string;
    /**
     * This represents the FedEx-system recognized postal code.
     */
    postalCode?: string;
    /**
     * This represents the FedEx-system recognized state or province code.
     */
    stateOrProvinceCode?: string;
    /**
     * The op-co specific numeric identifier for a FedEx location.
     */
    locationNumber?: number;
};

