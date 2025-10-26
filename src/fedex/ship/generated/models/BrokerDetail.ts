/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Party_1 } from './Party_1';
/**
 * These are broker details for the shipment.
 */
export type BrokerDetail = {
    /**
     * These are broker details for the shipment with physical address, contact and account number information.
     */
    broker?: Party_1;
    /**
     * Identifies the type of Broker.<br>Example: IMPORT
     */
    type?: BrokerDetail.type;
};
export namespace BrokerDetail {
    /**
     * Identifies the type of Broker.<br>Example: IMPORT
     */
    export enum type {
        IMPORT = 'IMPORT',
    }
}

