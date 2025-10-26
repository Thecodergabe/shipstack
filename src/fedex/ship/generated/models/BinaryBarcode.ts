/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Each instance of this data type represents a barcode whose content must be represented as binary data (i.e. not ASCII text).
 */
export type BinaryBarcode = {
    /**
     * The kind of barcode data in this instance.<br> Example: COMMON-2D
     */
    type?: string;
    /**
     * This is the value.
     */
    value?: string;
};

