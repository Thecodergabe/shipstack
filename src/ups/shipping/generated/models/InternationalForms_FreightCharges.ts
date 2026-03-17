/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container tag that holds the Freight Charges.  Applies to Invoice and Partial Invoice forms only.
 */
export type InternationalForms_FreightCharges = {
    /**
     * Cost to transport the shipment.  Applies to Invoice and Partial Invoice forms only. Required for Invoice forms and optional for Partial Invoice. Valid characters are 0-9 and '.'  (Decimal point). Limit to 2 digit after the decimal. The maximum length of the field is 15 including '.' and can hold up to 2 decimal places.
     */
    MonetaryValue: string;
};

