/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container to hold InvoiceLineTotal Information.  Required for forward shipments whose origin is the US and destination is Puerto Rico or Canada. Not available for any other shipments. FOR OTHER DESTINATIONS the InvoiceLineTotal in the International Forms Container must be used.
 */
export type Shipment_InvoiceLineTotal = {
    /**
     * Invoice Line Total currency type.
     */
    CurrencyCode: string;
    /**
     * Invoice Line Total amount for the entire shipment.  Valid values are from 1 to 99999999
     */
    MonetaryValue: string;
};

