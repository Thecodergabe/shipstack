/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReturnLabelMetadata } from './ReturnLabelMetadata';
export type ReturnLabelMultiPartResponse = {
    returnLabelMetadata?: ReturnLabelMetadata;
    /**
     * Contains the Base64-encoded file contents of the return label image. Provided only when `imageInfo.imageType` is not `NONE`.
     *
     */
    returnLabelImage?: string;
    /**
     * Contains the Base64-encoded file contents of the return receipt image. Provided only when `imageInfo.receiptOption` is `SEPARATE_PAGE`.
     *
     * Note:
     * - When `imageInfo.imageType` is `ZPL203DPI` or `ZPL300DPI` and `imageInfo.receiptOption` is `SEPARATE_PAGE`, the receipt will be returned as an additional label segment within the single ZPL payload in `labelImage`. In this case, `receiptImage` will not be populated.
     *
     */
    returnReceiptImage?: string;
    /**
     * The Label Broker QR Code image, Base64 encoded file contents. Only provided if `imageType` in the `imageInfo` is set to `LABEL_BROKER`.
     */
    labelBrokerQR?: string;
};

