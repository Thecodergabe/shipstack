/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Address Container.
 */
export type ShipTo_Address = {
    /**
     * Address Line of the consignee. All three Address Lines will be printed on the label.
     */
    AddressLine: Array<string>;
    /**
     * Consignee's city. 30 characters are accepted, but only 15 characters will be printed on the label.
     */
    City: string;
    /**
     * Consignee's state or province code. Required for US or Canada.  If destination is US or CA, then the value must be a valid US State/ Canadian Province code.
     *
     * If the country or territory is Ireland, the StateProvinceCode will contain the county.
     *
     */
    StateProvinceCode?: string;
    /**
     * Consignee's postal code.  If the ShipTo country or territory is US or Puerto Rico, 5 or 9 digits are required.
     *
     * If the ShipTo country or territory is CA, then the postal code is required and must be 6 alphanumeric characters whose format is A#A#A# where A is an uppercase letter and # is a digit.
     *
     * Otherwise optional. For all other countries or territories the postal code is optional and must be no more than 9 alphanumeric characters long.
     *
     */
    PostalCode?: string;
    /**
     * Consignee's country or territory code.  Must be a valid UPS Billing country or territory code.
     * For Return Shipment the country or territory code must meet the following conditions:
     * - At least two of the following country or territory codes are the same: ShipTo, ShipFrom, and Shipper.
     * - None of the following country or territory codes are the same and are a member of the EU: ShipTo, ShipFrom, and Shipper.
     * - If any of the two following country or territory codes: ShipTo/ ShipFrom/ Shipper are members in EU otherwise check if the shipper has Third country or territory Contract.
     *
     */
    CountryCode: string;
    /**
     * This field is a flag to indicate if the receiver is a residential location.
     * True if ResidentialAddressIndicator tag exists.  This is an empty tag, any value inside is ignored.
     */
    ResidentialAddressIndicator?: string;
    /**
     * This field is a flag to indicate if the receiver address has PO box indicator. True if POBoxIndicator tag exists; false otherwise.
     */
    POBoxIndicator?: string;
};

