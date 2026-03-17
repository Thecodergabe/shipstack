/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * GFP Payment Information Type container.  GFP only.
 */
export type FRSPaymentInformation_Type = {
    /**
     * Payer Type code for FRS Rate request. Valid Values are: 01 = Prepaid 02 = FreightCollect 03 = BillThirdParty
     */
    Code: string;
    /**
     * Text description of the code representing the GFP payment type.
     */
    Description?: string;
};

