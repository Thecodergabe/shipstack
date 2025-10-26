/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies the Estimated duties and taxes detail.
 */
export type EdtTaxDetail = {
    /**
     * Specifies the Estimated duties and taxes type. <br> Example: TaxType
     */
    edtTaxType?: string;
    /**
     * Specifies the amount for the estimated duties and taxes type.<br> Example: 785.12
     */
    amount?: number;
    /**
     * Specifies the Estimated duties and taxes taxable Value.<br> Example: 562.23
     */
    taxableValue?: number;
    /**
     * Indicates the name for the Etd tax.
     */
    name?: string;
    /**
     * Indicates the description for the Etd tax.
     */
    description?: string;
    /**
     * Indicates the formula.
     */
    formula?: string;
    /**
     * Specifies the Estimated duties and taxes effective date. Format [YYYY-MM-DD].<br>  Example: 2019-12-06
     */
    effectiveDate?: string;
};

