/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Address container for Alternate Delivery Address.
 */
export type AlternateDeliveryAddress_Address = {
    /**
     * The UPS Access Point's street address, including name and number (when applicable).  Length is not validated.
     */
    AddressLine?: Array<string>;
    /**
     * UPS Access Point city.
     */
    City?: string;
    /**
     * UPS Access Point State or Province code.
     */
    StateProvinceCode?: string;
    /**
     * UPS Access Point Postal code.
     */
    PostalCode?: string;
    /**
     * UPS Access Point country or territory code.
     */
    CountryCode: string;
    /**
     * Presence/Absence Indicator. Any value inside is ignored.This field is a flag to indicate if the Alternate Delivery location is a residential location. True if ResidentialAddressIndicator tag exists.  For future use.
     */
    ResidentialAddressIndicator?: string;
    /**
     * Presence/Absence Indicator. Any value inside is ignored.
     *
     * This field is a flag to indicate if the Alternate Delivery location is a PO box location.
     *
     * True if POBoxIndicator tag exists; false otherwise.  Not valid with Shipment Indication Types:
     * - 01 - Hold for Pickup at UPS Access Point
     * - 02 - UPS Access Point™ Delivery
     *
     */
    POBoxIndicator?: string;
};

