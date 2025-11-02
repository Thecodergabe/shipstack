/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReprintInfo } from './ReprintInfo';
import type { ReturnLabelMetadata } from './ReturnLabelMetadata';
/**
 * Response schema for return label reprint requests.
 */
export type LabelReprintDomesticReturnResponse = {
    returnLabelMetadata?: ReturnLabelMetadata;
    /**
     * Contains the Base64-encoded file contents of the return label image.
     *
     */
    returnLabelImage?: string;
    reprintInfo?: ReprintInfo;
};

