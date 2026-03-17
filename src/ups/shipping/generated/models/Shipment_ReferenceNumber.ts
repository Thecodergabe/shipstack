/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Reference Number information container. Required for Trade Direct shipments.
 */
export type Shipment_ReferenceNumber = {
    /**
     * If the indicator is present then the reference number's value will be bar coded on the label.  This is an empty tag, any value inside is ignored. Only one shipment-level or package-level reference number can be bar coded per shipment. In order to barcode a reference number, its value must be no longer than 14 alphanumeric characters or 24 numeric characters and cannot contain spaces.
     */
    BarCodeIndicator?: string;
    /**
     * Shipment Reference number type code. The code specifies the Reference name. Refer to the Reference Number Code table.  Valid if the origin/destination pair is not US/US or PR/PR and character should be alpha-numeric.
     */
    Code?: string;
    /**
     * Customer supplied reference number.  Valid if the origin/destination pair is not US/US or PR/PR
     */
    Value: string;
};

