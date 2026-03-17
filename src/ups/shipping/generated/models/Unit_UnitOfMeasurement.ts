/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container tag for the Unit of measurement for the commodity.  Required for Invoice forms and optional for Partial Invoice.
 */
export type Unit_UnitOfMeasurement = {
    /**
     * Code for the Unit of measurement of the commodity units.  Required for Invoice forms and optional for Partial Invoice.
     *
     * Refer to Product Unit of Measure Codes in the Appendix for valid values.
     *
     */
    Code: string;
    /**
     * The Unit of Measure if OTH (Other) is entered as the UnitOfMeasurement code.  Applies to Invoice and Partial Invoice forms.  Conditionally Required for the Invoice and Partial Invoice form if OTH is entered as the units UnitOfMeasurement Code.
     */
    Description?: string;
};

