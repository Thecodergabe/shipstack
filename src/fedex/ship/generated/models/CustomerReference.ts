/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CustomerReference = {
    /**
     * This is a customer reference type. Note: Use type Type, RMA_ASSOCIATION and value as the RMA Number to associate Ground Call Tag shipments to the outbound shipment.<br>Example: DEPARTMENT_NUMBER
     */
    customerReferenceType?: CustomerReference.customerReferenceType;
    /**
     * This is a customer reference type value.<br>Example: 3686 <ul><li>The P_O_NUMBER value must be specified in customerReferences under requestedPackageLineItems</li><li>The INVOICE_NUMBER value that is printed on the FedEx-supplied invoice must be specified in customerReferences under commercialInvoice. Value defined in this section will print on the label that is attached to the package</li><li>The RMA value sent by the customer is returned on the label in human readable form but also as a barcode. RMA_ASSOCIATION only prints on the label as a barcode for a Return shipment.</ul>NOTE:<ul><li> INTRACOUNTRY_REGULATORY_REFERENCE is applicable only in Intra-Brazil.</li><li>  Maximum length varies for value field depending on customerReferenceType.</li></ul> Maximum length for value is as follows: <ul><li>CUSTOMER_REFERENCE - 40(Express), 30(Ground)</li><li>DEPARTMENT_NUMBER - 30</li><li>INVOICE_NUMBER - 30</li><li>P_O_NUMBER - 30</li><li>INTRACOUNTRY_REGULATORY_REFERENCE - 30</li><li>RMA_ASSOCIATION - 20</li>
     */
    value?: string;
};
export namespace CustomerReference {
    /**
     * This is a customer reference type. Note: Use type Type, RMA_ASSOCIATION and value as the RMA Number to associate Ground Call Tag shipments to the outbound shipment.<br>Example: DEPARTMENT_NUMBER
     */
    export enum customerReferenceType {
        CUSTOMER_REFERENCE = 'CUSTOMER_REFERENCE',
        DEPARTMENT_NUMBER = 'DEPARTMENT_NUMBER',
        INVOICE_NUMBER = 'INVOICE_NUMBER',
        P_O_NUMBER = 'P_O_NUMBER',
        INTRACOUNTRY_REGULATORY_REFERENCE = 'INTRACOUNTRY_REGULATORY_REFERENCE',
        RMA_ASSOCIATION = 'RMA_ASSOCIATION',
    }
}

