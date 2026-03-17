/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * LTL Reference number.
 */
export type LTL_Reference_Number = {
    /**
     * Reference number code supplied by customer.
     *
     * Valid values are:
     *
     * - PO = Purchase Order Number
     * - REF =    Reference Number
     * - INV = Invoice Number
     *
     */
    Code: LTL_Reference_Number.Code;
    /**
     * Reference number supplied by customer.
     */
    Value: string;
};
export namespace LTL_Reference_Number {
    /**
     * Reference number code supplied by customer.
     *
     * Valid values are:
     *
     * - PO = Purchase Order Number
     * - REF =    Reference Number
     * - INV = Invoice Number
     *
     */
    export enum Code {
        PO = 'PO',
        REF = 'REF',
        INV = 'INV',
    }
}

