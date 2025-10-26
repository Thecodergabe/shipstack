/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerImageUsage } from './CustomerImageUsage';
import type { Party_3 } from './Party_3';
import type { ShippingDocumentFormat } from './ShippingDocumentFormat';
/**
 * The instructions indicating commercial invoice certification of origin.
 */
export type UsmcaCommercialInvoiceCertificationOfOriginDetail = {
    /**
     * Specifies the usage and identification of customer supplied images to be used on this document.
     */
    customerImageUsages?: Array<CustomerImageUsage>;
    documentFormat?: ShippingDocumentFormat;
    /**
     * This is certifier specification.
     */
    certifierSpecification?: UsmcaCommercialInvoiceCertificationOfOriginDetail.certifierSpecification;
    /**
     * This is importer specification.
     */
    importerSpecification?: UsmcaCommercialInvoiceCertificationOfOriginDetail.importerSpecification;
    /**
     * This is producer specification.
     */
    producerSpecification?: UsmcaCommercialInvoiceCertificationOfOriginDetail.producerSpecification;
    producer?: Party_3;
    /**
     * Specify the job title of the certifier
     */
    certifierJobTitle?: string;
};
export namespace UsmcaCommercialInvoiceCertificationOfOriginDetail {
    /**
     * This is certifier specification.
     */
    export enum certifierSpecification {
        EXPORTER = 'EXPORTER',
        IMPORTER = 'IMPORTER',
        PRODUCER = 'PRODUCER',
    }
    /**
     * This is importer specification.
     */
    export enum importerSpecification {
        UNKNOWN = 'UNKNOWN',
        VARIOUS = 'VARIOUS',
    }
    /**
     * This is producer specification.
     */
    export enum producerSpecification {
        AVAILABLE_UPON_REQUEST = 'AVAILABLE_UPON_REQUEST',
        VARIOUS = 'VARIOUS',
        SAME_AS_EXPORTER = 'SAME_AS_EXPORTER',
    }
}

