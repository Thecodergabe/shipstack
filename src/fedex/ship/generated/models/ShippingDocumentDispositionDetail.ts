/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShippingDocumentEmailDetail } from './ShippingDocumentEmailDetail';
/**
 * These are document diposition details. Each occurrence of this class specifies a particular way in which a kind of shipping document is to be produced and provided.
 */
export type ShippingDocumentDispositionDetail = {
    eMailDetail?: ShippingDocumentEmailDetail;
    /**
     * Values in this field specify how to create and return the document.<br>Example:CONFIRMED
     */
    dispositionType?: ShippingDocumentDispositionDetail.dispositionType;
};
export namespace ShippingDocumentDispositionDetail {
    /**
     * Values in this field specify how to create and return the document.<br>Example:CONFIRMED
     */
    export enum dispositionType {
        CONFIRMED = 'CONFIRMED',
        DEFERRED_QUEUED = 'DEFERRED_QUEUED',
        DEFERRED_RETURNED = 'DEFERRED_RETURNED',
        DEFERRED_STORED = 'DEFERRED_STORED',
        EMAILED = 'EMAILED',
        QUEUED = 'QUEUED',
        RETURNED = 'RETURNED',
        STORED = 'STORED',
    }
}

