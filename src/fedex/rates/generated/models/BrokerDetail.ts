/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BrokerDetailBroker } from './BrokerDetailBroker';
/**
 * These are Broker Detail for the rate quote.
 */
export type BrokerDetail = {
    broker: BrokerDetailBroker;
    /**
     * This is Broker Type.Example:IMPORT
     */
    type: BrokerDetail.type;
};
export namespace BrokerDetail {
    /**
     * This is Broker Type.Example:IMPORT
     */
    export enum type {
        IMPORT = 'IMPORT',
    }
}

