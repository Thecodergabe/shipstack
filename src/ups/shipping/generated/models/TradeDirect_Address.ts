/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Contains the address details including street address, city, state or province code, postal code, and country code.
 */
export type TradeDirect_Address = {
    /**
     * Primary address line includes street number and street name (when applicable).
     */
    AddressLine: string;
    /**
     * The name of the city for the address.
     */
    City: string;
    /**
     * The code for the state or province for the address.
     */
    StateProvinceCode?: string;
    /**
     * The postal code for the address.
     */
    PostalCode?: string;
    /**
     * The code for the country for the address
     */
    CountryCode: string;
};

