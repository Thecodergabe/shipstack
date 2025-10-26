/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The Commercial Invoice element is required for electronic upload of CI data. It will serve to create/transmit an electronic Commercial Invoice through the FedEx system.<br>Customers are responsible for printing their own Commercial Invoice.<br>If you would like FedEx to generate a Commercial Invoice and transmit it to Customs for clearance purposes, you need to specify that in the 'ETDDetail/RequesteDocumentCopies' element.<br> Support consists of a Maximum of 99 commodity line items.
 */
export type CommercialInvoice = {
    /**
     * The reason for the shipment.  Note: SOLD is not a valid purpose for a Proforma Invoice.
     */
    shipmentPurpose?: CommercialInvoice.shipmentPurpose;
};
export namespace CommercialInvoice {
    /**
     * The reason for the shipment.  Note: SOLD is not a valid purpose for a Proforma Invoice.
     */
    export enum shipmentPurpose {
        GIFT = 'GIFT',
        NOT_SOLD = 'NOT_SOLD',
        PERSONAL_EFFECTS = 'PERSONAL_EFFECTS',
        REPAIR_AND_RETURN = 'REPAIR_AND_RETURN',
        SAMPLE = 'SAMPLE',
        SOLD = 'SOLD',
        COMMERCIAL = 'COMMERCIAL',
        RETURN_AND_REPAIR = 'RETURN_AND_REPAIR',
        PERSONAL_USE = 'PERSONAL_USE',
    }
}

