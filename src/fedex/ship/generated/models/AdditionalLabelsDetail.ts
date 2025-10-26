/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AdditionalLabelsDetail = {
    /**
     * Specify the type of additional  details to be added on the label.<br>Example:MANIFEST
     */
    type?: AdditionalLabelsDetail.type;
    /**
     * Specifies the count of label to return.<br>Example:1
     */
    count?: number;
};
export namespace AdditionalLabelsDetail {
    /**
     * Specify the type of additional  details to be added on the label.<br>Example:MANIFEST
     */
    export enum type {
        BROKER = 'BROKER',
        CONSIGNEE = 'CONSIGNEE',
        CUSTOMS = 'CUSTOMS',
        DESTINATION = 'DESTINATION',
        DESTINATION_CONTROL_STATEMENT = 'DESTINATION_CONTROL_STATEMENT',
        FREIGHT_REFERENCE = 'FREIGHT_REFERENCE',
        MANIFEST = 'MANIFEST',
        ORIGIN = 'ORIGIN',
        RECIPIENT = 'RECIPIENT',
        SECOND_ADDRESS = 'SECOND_ADDRESS',
        SHIPPER = 'SHIPPER',
    }
}

