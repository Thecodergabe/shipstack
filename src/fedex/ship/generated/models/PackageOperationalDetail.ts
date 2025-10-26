/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OperationalInstructions } from './OperationalInstructions';
import type { PackageBarcodes } from './PackageBarcodes';
/**
 * Package-level data required for labeling and/or movement.
 */
export type PackageOperationalDetail = {
    /**
     * Human-readable text for pre-January 2011 clients.<br>Example: astraHandlingText
     */
    astraHandlingText?: string;
    barcodes?: PackageBarcodes;
    /**
     * These are operational instruction such as Ground Information printed on a given area of the label, one-dimensional barcode with only x-axis that contains the details of the shipment in encrypted form, COD Return operational instructions data such as COD amount, SECURED or UNSECURED.
     */
    operationalInstructions?: Array<OperationalInstructions>;
};

