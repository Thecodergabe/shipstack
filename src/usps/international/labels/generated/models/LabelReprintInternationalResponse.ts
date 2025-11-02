/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InternationalLabelMetadata } from './InternationalLabelMetadata';
import type { ReprintInfo } from './ReprintInfo';
/**
 * Response schema for International label reprint requests.
 */
export type LabelReprintInternationalResponse = {
    labelMetadata?: InternationalLabelMetadata;
    /**
     * Contains the Base64-encoded file contents of the label image.
     */
    labelImage?: string;
    reprintInfo?: ReprintInfo;
};

