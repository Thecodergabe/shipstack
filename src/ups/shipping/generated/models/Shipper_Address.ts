/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Address tag Container.  The package should be returned to this address if the package is undeliverable.
 *
 * This address appears on the upper left hand corner of the label.
 *
 * Note: If the ShipFrom container is not present then this address will be used as the ShipFrom address. If this address is used as the ShipFrom the shipment will be rated from this origin address.
 *
 */
export type Shipper_Address = {
    /**
     * The Shipper street address including name and number (when applicable). Up to three occurrences are allowed; only the first is printed on the label.
     *
     * 35 characters are accepted, but for the first occurrence, only 30 characters will be printed on the label for return shipments.
     *
     */
    AddressLine: Array<string>;
    /**
     * Shipper's City.   For forward Shipment 30 characters are accepted, but only 15 characters will be printed on the label.
     */
    City: string;
    /**
     * Shipper's state or province code.
     *
     * For forward Shipment 5 characters are accepted, but only 2 characters will be printed on the label.  For US, PR and CA accounts, the account must be either a daily pickup account, an occasional account, or a customer B.I.N account.
     *
     */
    StateProvinceCode?: string;
    /**
     * Shipper's postal code.
     */
    PostalCode?: string;
    /**
     * Shipper's country or territory code.
     *
     * Refer to country or territory Codes in the Appendix for valid values.
     *
     * Drop Shipper accounts are valid for return service shipments only if the account is Trade Direct (TD) enabled.
     *
     */
    CountryCode: string;
};

