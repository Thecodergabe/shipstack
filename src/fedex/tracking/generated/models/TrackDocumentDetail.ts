/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies the tracking document details.
 */
export type TrackDocumentDetail = {
    /**
     * Indicate the Tracking Document. <br>Valid values are SIGNATURE_PROOF_OF_DELIVERY, BILL_OF_LADING and FREIGHT_BILLING_DOCUMENT.<br>Example: SIGNATURE_PROOF_OF_DELIVERY.<br><i>Note: The SPOD information will be presented as a byte array instead of an image. The byte array is a base64 encoded string, which should be decoded to get the final signature image in PDF or PNG format</i>
     */
    documentType: string;
    /**
     * Specifies the format of tracking document. <br>Valid values are PDF or PNG.<br>The values are key sensitive.<br>Note: documentTypes BILL_OF_LADING and FREIGHT_BILLING_DOCUMENT does not support PNG.
     */
    documentFormat?: string;
};

