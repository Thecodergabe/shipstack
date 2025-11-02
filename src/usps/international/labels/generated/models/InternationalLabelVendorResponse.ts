/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InternationalLabelMetadata } from './InternationalLabelMetadata';
export type InternationalLabelVendorResponse = (InternationalLabelMetadata & {
    /**
     * Contains the Base64-encoded file contents of the label image. Provided only when `imageInfo.imageType` is not `NONE`.
     *
     */
    labelImage?: string;
    /**
     * The Label Broker QR Code image, Base64 encoded file contents. Only provided if `imageType` in the `imageInfo` is set to `LABEL_BROKER`.
     */
    labelBrokerQR?: string;
});

