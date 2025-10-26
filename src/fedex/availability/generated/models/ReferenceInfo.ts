/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Customers configurable reference Information for the shipment
 */
export type ReferenceInfo = {
    /**
     * Regulatory Reference Number for the shipment
     */
    regulatoryReferenceNumber?: string;
    /**
     * a customizable reference field for the shipment
     */
    yourReference?: string;
    /**
     * CountryCode of the ReferenceInfo
     */
    countryCode?: string;
    /**
     * PostalCode of the ReferenceInfo
     */
    postalCode?: string;
    /**
     * Purchase Order Number reference for the shipment
     */
    purchaseOrderNumber?: string;
    /**
     * Department Number reference for the shipment
     */
    departmentNumber?: string;
    /**
     * Invoice Number reference for the shipment
     */
    invoiceNumber?: string;
    /**
     * AccountNbr reference for the shipment
     */
    accountNbr?: string;
    /**
     * Ship Date for the shipment
     */
    shipDate?: string;
    /**
     * Reference Value attached to the shipment
     */
    referenceValue?: string;
};

