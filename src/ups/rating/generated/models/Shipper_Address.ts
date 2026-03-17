/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Address Container.  If the ShipFrom container is not present then this address will be used as the ShipFrom. If this address is used as the ShipFrom, the shipment will be rated from this origin address.
 */
export type Shipper_Address = {
    /**
     * Shipper's street address including name and number (when applicable).  Maximum Occurrence should be three. Length is not validated. Note:Required if requesting Roadie Service
     */
    AddressLine: Array<string>;
    /**
     * Shipper's city.  Required if country or territory does not utilize postal codes. Length is not validated.
     */
    City?: string;
    /**
     * Shipper's state code.  Length is not validated.
     */
    StateProvinceCode?: string;
    /**
     * Shipper's postal code.  Length is not validated.
     */
    PostalCode?: string;
    /**
     * Country or Territory code. Refer to the Supported Country or Territory Tables located in Appendix.
     */
    CountryCode: string;
};

