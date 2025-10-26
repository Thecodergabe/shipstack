/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Message } from './Message';
import type { RegulatoryWaiver } from './RegulatoryWaiver';
export type RegulatoryProhibition = {
    /**
     * Indicates the derived harmonized code value<br>Example: 01
     */
    derivedHarmonizedCode?: string;
    advisory?: Message;
    /**
     * Indicates one based index identifying the associated commodity.<br>Example: 12
     */
    commodityIndex?: number;
    /**
     * Indicates the prohibition source type.<br>Example: source
     */
    source?: string;
    /**
     * Indicate the shipment rule type.<br>Example: ["categories"]
     */
    categories?: Array<string>;
    /**
     * Indicates the prohibition type.<br>Example: type
     */
    type?: string;
    waiver?: RegulatoryWaiver;
    /**
     * Indicates the prohibitory status.<br>Example: status
     */
    status?: string;
};

