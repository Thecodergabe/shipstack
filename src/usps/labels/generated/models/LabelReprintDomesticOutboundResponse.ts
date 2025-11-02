/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LabelMetadata } from './LabelMetadata';
import type { ReprintInfo } from './ReprintInfo';
/**
 * Response schema for outbound label reprint requests.
 */
export type LabelReprintDomesticOutboundResponse = {
    labelMetadata?: LabelMetadata;
    /**
     * Contains the Base64-encoded file contents of the label image.
     *
     */
    labelImage?: string;
    reprintInfo?: ReprintInfo;
};

