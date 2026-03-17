/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Sold To Address Container.  Applies to USMCA.
 */
export type SoldTo_Address = {
    /**
     * SoldTo location's street address.  Applies to USMCA.
     */
    AddressLine: Array<string>;
    /**
     * SoldTo location's city.
     */
    City: string;
    /**
     * SoldTo location's state or province code.  Required for certain countries or territories.
     */
    StateProvinceCode?: string;
    /**
     * SoldTo location's town code.
     */
    Town?: string;
    /**
     * SoldTo location's postal code.
     */
    PostalCode?: string;
    /**
     * SoldTo location's country or territory code.
     */
    CountryCode: string;
};

