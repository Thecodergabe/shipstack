/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Ship from Address Container.  The package will be originating from or being shipped from this address. The shipment will be rated from this origin address to the destination ship to address.
 */
export type ShipFrom_Address = {
    /**
     * The Ship from street address including name and number (when applicable). 35 characters are accepted, but for return Shipment only 30 characters will be printed on the label.
     */
    AddressLine: Array<string>;
    /**
     * The Ship from city.
     *
     * 30 characters are accepted, but for return Shipment only 15 characters will be printed on the label.  Required if ShipFrom is supplied
     *
     */
    City: string;
    /**
     * Origin location's state or province code.  Required if ShipFrom is supplied, and ShipFrom country or territory is US.
     *
     * If ShipFrom country or territory is US or CA, then the value must be a valid US State/ Canadian Province code. If the country or territory is Ireland, the StateProvinceCode will contain the county or territory.
     *
     */
    StateProvinceCode?: string;
    /**
     * The ship from locations postal code.
     * 9 characters are accepted.  Required if ShipFrom is supplied and the ShipFrom country or territory is the US and Puerto Rico.
     *
     * For US and Puerto Rico, it must be valid 5 or 9 digit postal code. The character "-" may be used to separate the first five digits and the last four digits.
     *
     * If the ShipFrom country or territory is CA, then the postal code must be 6 alphanumeric characters whose format is A#A#A# where A is an uppercase letter and # is a digit.
     *
     * For all other countries or territories the postal code is optional and must be no more than 9 alphanumeric characters long.
     *
     */
    PostalCode?: string;
    /**
     * Origin locations country or territory code.  Required if ShipFrom tag is supplied. For Return Shipment the country or territory code must meet the following conditions:
     *
     * - At least two of the following country or territory codes are the same: ShipTo, ShipFrom, and Shipper.
     * - None of the following country or territory codes are the same and are a member of the EU: ShipTo, ShipFrom, and Shipper.
     * - If any of the two following country or territory codes: ShipTo/ShipFrom/ Shipper are members in EU otherwise check if the shipper has Third country or territory Contract.
     *
     */
    CountryCode: string;
};

