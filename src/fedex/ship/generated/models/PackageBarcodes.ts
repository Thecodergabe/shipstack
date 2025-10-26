/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BinaryBarcode } from './BinaryBarcode';
import type { StringBarcode } from './StringBarcode';
/**
 * These are package barcode details. Each instance of this data type represents the set of barcodes (of all types) which are associated with a specific package.
 */
export type PackageBarcodes = {
    /**
     * This is binary-style barcodes used for the package identification.
     */
    binaryBarcodes?: Array<BinaryBarcode>;
    /**
     * This is string-style barcodes  used for package identification.
     */
    stringBarcodes?: Array<StringBarcode>;
};

