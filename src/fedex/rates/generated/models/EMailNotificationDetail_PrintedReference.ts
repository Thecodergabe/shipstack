/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies Printed Reference.
 */
export type EMailNotificationDetail_PrintedReference = {
    /**
     * Indicates the printed reference type.
     */
    printedReferenceType?: EMailNotificationDetail_PrintedReference.printedReferenceType;
    /**
     * Specifies printed reference value.
     */
    value?: string;
};
export namespace EMailNotificationDetail_PrintedReference {
    /**
     * Indicates the printed reference type.
     */
    export enum printedReferenceType {
        BILL_OF_LADING = 'BILL_OF_LADING',
        CONSIGNEE_ID_NUMBER = 'CONSIGNEE_ID_NUMBER',
        INTERLINE_PRO_NUMBER = 'INTERLINE_PRO_NUMBER',
        PO_NUMBER = 'PO_NUMBER',
        SHIPPER_ID_NUMBER = 'SHIPPER_ID_NUMBER',
        SHIPPER_ID1_NUMBER = 'SHIPPER_ID1_NUMBER',
        SHIPPER_ID2_NUMBER = 'SHIPPER_ID2_NUMBER',
    }
}

