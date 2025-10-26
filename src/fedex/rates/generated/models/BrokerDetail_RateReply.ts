/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Brokeraddress } from './Brokeraddress';
import type { BrokerDetailBroker_RateReply } from './BrokerDetailBroker_RateReply';
/**
 * These are Broker Detail for the rate quote.
 */
export type BrokerDetail_RateReply = {
    broker: BrokerDetailBroker_RateReply;
    /**
     * This is Broker Type.
     */
    type: BrokerDetail_RateReply.type;
    brokerAddress?: Brokeraddress;
};
export namespace BrokerDetail_RateReply {
    /**
     * This is Broker Type.
     */
    export enum type {
        EXPORT = 'EXPORT',
        IMPORT = 'IMPORT',
    }
}

