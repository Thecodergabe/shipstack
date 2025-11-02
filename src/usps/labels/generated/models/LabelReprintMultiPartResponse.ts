/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LabelMetadata } from './LabelMetadata';
import type { ReprintInfo } from './ReprintInfo';
import type { ReturnLabelMetadata } from './ReturnLabelMetadata';
export type LabelReprintMultiPartResponse = {
    labelMetadata?: LabelMetadata;
    returnLabelMetadata?: ReturnLabelMetadata;
    /**
     * Contains the Base64-encoded file contents of the label image.
     *
     */
    labelImage?: string;
    /**
     * Contains the Base64-encoded file contents of the return label image.
     *
     */
    returnLabelImage?: string;
    reprintInfo?: ReprintInfo;
};

