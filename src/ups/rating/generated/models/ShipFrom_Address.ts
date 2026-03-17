/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Address container for Ship From.  Address Container
 */
export type ShipFrom_Address = {
    /**
     * The origin street address including name and number (when applicable).  Length is not validated.
     */
    AddressLine?: Array<string>;
    /**
     * Origin city.  Required if country or territory does not utilize postal codes. Length is not validated.
     */
    City?: string;
    /**
     * Origin state code.  A StateProvinceCode and valid account number are required when requesting negotiated rates. Otherwise the StateProvinceCode is optional.
     *
     * If the TaxInformationIndicator flag is present in the request, a StateProvinceCode must be entered for tax charges to be accurately calculated in the response.
     *
     */
    StateProvinceCode?: string;
    /**
     * Origin postal code.  Required if country or territory utilizes postal codes (e.g. US and PR).
     */
    PostalCode?: string;
    /**
     * Origin country or territory code. Refer to the Supported Country or Territory Tables located in the Appendix.  Required, but defaults to US.
     */
    CountryCode: string;
};

