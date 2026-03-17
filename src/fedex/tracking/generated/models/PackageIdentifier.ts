/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The type and value of the package identifier that is to be used to retrieve the tracking information for a package or group of packages.
 */
export type PackageIdentifier = {
    /**
     * Indicate the package identifier to identify the package.<br> Example: SHIPPER_REFERENCE
     */
    type?: PackageIdentifier.type;
    /**
     * Field which holds the value of the identifier used to identify the package. <br>Example: 'ASJFGVAS'
     */
    value?: Array<string>;
    /**
     * Unique identifier used to distinguish duplicate FedEx tracking numbers. This value will be set by FedEx systems. <br> Example: 245822\~123456789012\~FDEG
     */
    trackingNumberUniqueId?: string;
};
export namespace PackageIdentifier {
    /**
     * Indicate the package identifier to identify the package.<br> Example: SHIPPER_REFERENCE
     */
    export enum type {
        BILL_OF_LADING = 'BILL_OF_LADING',
        COD_RETURN_TRACKING_NUMBER = 'COD_RETURN_TRACKING_NUMBER',
        CUSTOMER_AUTHORIZATION_NUMBER = 'CUSTOMER_AUTHORIZATION_NUMBER',
        CUSTOMER_REFERENCE = 'CUSTOMER_REFERENCE',
        DEPARTMENT = 'DEPARTMENT',
        DOCUMENT_AIRWAY_BILL = 'DOCUMENT_AIRWAY_BILL',
        EXPRESS_ALTERNATE_REFERENCE = 'EXPRESS_ALTERNATE_REFERENCE',
        FEDEX_OFFICE_JOB_ORDER_NUMBER = 'FEDEX_OFFICE_JOB_ORDER_NUMBER',
        FREE_FORM_REFERENCE = 'FREE_FORM_REFERENCE',
        GROUND_INTERNATIONAL = 'GROUND_INTERNATIONAL',
        GROUND_SHIPMENT_ID = 'GROUND_SHIPMENT_ID',
        GROUP_MPS = 'GROUP_MPS',
        INTERNATIONAL_DISTRIBUTION = 'INTERNATIONAL_DISTRIBUTION',
        INVOICE = 'INVOICE',
        JOB_GLOBAL_TRACKING_NUMBER = 'JOB_GLOBAL_TRACKING_NUMBER',
        ORDER_GLOBAL_TRACKING_NUMBER = 'ORDER_GLOBAL_TRACKING_NUMBER',
        ORDER_TO_PAY_NUMBER = 'ORDER_TO_PAY_NUMBER',
        OUTBOUND_LINK_TO_RETURN = 'OUTBOUND_LINK_TO_RETURN',
        PART_NUMBER = 'PART_NUMBER',
        PARTNER_CARRIER_NUMBER = 'PARTNER_CARRIER_NUMBER',
        PURCHASE_ORDER = 'PURCHASE_ORDER',
        REROUTE_TRACKING_NUMBER = 'REROUTE_TRACKING_NUMBER',
        RETURN_MATERIALS_AUTHORIZATION = 'RETURN_MATERIALS_AUTHORIZATION',
        RETURNED_TO_SHIPPER_TRACKING_NUMBER = 'RETURNED_TO_SHIPPER_TRACKING_NUMBER',
        SHIPPER_REFERENCE = 'SHIPPER_REFERENCE',
        STANDARD_MPS = 'STANDARD_MPS',
        TRACKING_CONTROL_NUMBER = 'TRACKING_CONTROL_NUMBER',
        TRACKING_NUMBER_OR_DOORTAG = 'TRACKING_NUMBER_OR_DOORTAG',
        TRANSBORDER_DISTRIBUTION = 'TRANSBORDER_DISTRIBUTION',
        TRANSPORTATION_CONTROL_NUMBER = 'TRANSPORTATION_CONTROL_NUMBER',
        VIRTUAL_CONSOLIDATION = 'VIRTUAL_CONSOLIDATION',
    }
}

