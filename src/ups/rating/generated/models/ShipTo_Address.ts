/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Address Container.
 */
export type ShipTo_Address = {
    /**
     * Destination street address including name and number (when applicable).  Max Occurrence can be 3. Length is not validated. Note:Required if requesting Roadie Service
     */
    AddressLine: Array<string>;
    /**
     * Destination city.  Required if country or territory does not utilize postal codes. Length is not validated.
     */
    City?: string;
    /**
     * Destination state code.
     */
    StateProvinceCode?: string;
    /**
     * Destination postal code.  Required if country or territory utilizes postal codes (i.e. US and PR).
     */
    PostalCode?: string;
    /**
     * Destination country or territory code. Refer to the Supported Country or Territory Tables located in the Appendix.
     */
    CountryCode: string;
    /**
     * Residential Address flag. This field is a flag to indicate if the destination is a residential location. True if ResidentialAddressIndicator tag exists; false otherwise. This element does not require a value and if one is entered it will be ignored.
     *
     * Note: When requesting TimeInTransit information, this indicator must be passed to determine if Three Day Select or Ground shipment is eligible for Saturday Delivery at no charge. If this indicator is not present, address will be considered as commercial. Empty Tag.
     *
     */
    ResidentialAddressIndicator?: string;
};

