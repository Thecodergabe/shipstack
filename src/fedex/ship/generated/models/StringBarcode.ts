/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Each instance of this data type represents a barcode whose content must be represented as ASCII text (i.e. not binary data).
 */
export type StringBarcode = {
    /**
     * The kind of barcode data in this instance. example valid values are:<br>ADDRESS - Represents the recipient address<br>GROUND - FedEx Ground parcel barcode<br>Example: ADDRESS
     */
    type?: string;
    /**
     * This is the value.<br>Example: 1010062512241535917900794953544894
     */
    value?: string;
};

