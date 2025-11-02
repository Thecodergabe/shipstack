/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InternationalLabelMetadata } from './InternationalLabelMetadata';
import type { ReprintInfo } from './ReprintInfo';
export type LabelReprintInternationalMultipartResponse = {
    labelMetadata?: InternationalLabelMetadata;
    /**
     * Contains the Base64-encoded file contents of the label image. Provided only when `imageInfo.imageType` is not `NONE`.
     *
     */
    labelImage?: string;
    reprintInfo?: ReprintInfo;
};

