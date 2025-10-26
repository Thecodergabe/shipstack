/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CustomerReference = {
    /**
     * This is a customer reference type. Note: Use type as RMA_ASSOCIATION and value as the RMA Number to associate Ground Call Tag shipments to the outbound shipment.<br><a onclick='loadDocReference("customerreferencetypes")'>For more information, click here for Cutsomer References</a>
     */
    customerReferenceType?: CustomerReference.customerReferenceType;
    /**
     * This is a customer reference type value.<br>Example: 3686
     */
    value?: string;
};
export namespace CustomerReference {
    /**
     * This is a customer reference type. Note: Use type as RMA_ASSOCIATION and value as the RMA Number to associate Ground Call Tag shipments to the outbound shipment.<br><a onclick='loadDocReference("customerreferencetypes")'>For more information, click here for Cutsomer References</a>
     */
    export enum customerReferenceType {
        BILL_OF_LADING = 'BILL_OF_LADING',
        CUSTOMER_REFERENCE = 'CUSTOMER_REFERENCE',
        DEPARTMENT_NUMBER = 'DEPARTMENT_NUMBER',
        INVOICE_NUMBER = 'INVOICE_NUMBER',
        P_O_NUMBER = 'P_O_NUMBER',
        SHIPMENT_INTEGRITY = 'SHIPMENT_INTEGRITY',
        INTRACOUNTRY_REGULATORY_REFERENCE = 'INTRACOUNTRY_REGULATORY_REFERENCE',
        STORE_NUMBER = 'STORE_NUMBER',
        RMA_ASSOCIATION = 'RMA_ASSOCIATION',
        SHIPPER_ID1 = 'SHIPPER_ID1',
        SHIPPER_ID2 = 'SHIPPER_ID2',
    }
}

