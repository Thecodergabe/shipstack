/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerImageUsage } from './CustomerImageUsage';
import type { Party_3 } from './Party_3';
import type { RetrieveDateRange } from './RetrieveDateRange';
import type { ShippingDocumentFormat } from './ShippingDocumentFormat';
/**
 * The instructions indicating how to print the USMCA Certificate of Origin (e.g. whether or not to include the instructions, image type, etc ...).
 */
export type UsmcaCertificationOfOriginDetail = {
    /**
     * Specifies the usage and identification of customer supplied images to be used on this document.
     */
    customerImageUsages?: Array<CustomerImageUsage>;
    documentFormat?: ShippingDocumentFormat;
    /**
     * This is certifier specification.
     */
    certifierSpecification?: UsmcaCertificationOfOriginDetail.certifierSpecification;
    /**
     * This is importer specification.
     */
    importerSpecification?: UsmcaCertificationOfOriginDetail.importerSpecification;
    /**
     * This is producer specification.
     */
    producerSpecification?: UsmcaCertificationOfOriginDetail.producerSpecification;
    producer?: Party_3;
    blanketPeriod?: RetrieveDateRange;
    /**
     * Specify the job title of the certifier
     */
    certifierJobTitle?: string;
};
export namespace UsmcaCertificationOfOriginDetail {
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

