/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This contains the ADR license information, which identifies the license number, the effective date and the expiration date under which the customer is allowed to ship.
 */
export type LicenseOrPermitDetail = {
    /**
     * Specifies license or permit detail number.<br>Example: 12345
     */
    number?: string;
    /**
     * Specifies the effective date of the license.<br>The format is [YYYY-MM-DD].<br>Example: 2019-08-09
     */
    effectiveDate?: string;
    /**
     * Specifies the expiration date of the license.<br>The format is [YYYY-MM-DD].<br>Example: 2019-04-09
     */
    expirationDate?: string;
};

