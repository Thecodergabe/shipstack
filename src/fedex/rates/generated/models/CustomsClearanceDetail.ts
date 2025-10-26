/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BrokerDetail } from './BrokerDetail';
import type { CommercialInvoice } from './CommercialInvoice';
import type { Commodity } from './Commodity';
import type { Payment } from './Payment';
/**
 * This is Customs clearance data, used for both international and intra-country shipping and rating. Customs commodity data is required for international and intra-country rating.
 */
export type CustomsClearanceDetail = {
    /**
     * Conditional.<br>Required if BROKER_SELECT_OPTION is specified as a shipment special service type.  A country code must be specified in addition to one of the following address items: postal code, city, or location id.
     */
    brokers?: Array<BrokerDetail>;
    commercialInvoice?: CommercialInvoice;
    /**
     *  Indicates Freight on value for customs.
     */
    freightOnValue?: CustomsClearanceDetail.freightOnValue;
    dutiesPayment?: Payment;
    /**
     * Indicates the details about the dutiable packages. Maximum upto 999 commodities per shipment.
     */
    commodities: Array<Commodity>;
};
export namespace CustomsClearanceDetail {
    /**
     *  Indicates Freight on value for customs.
     */
    export enum freightOnValue {
        CARRIER_RISK = 'CARRIER_RISK',
        OWN_RISK = 'OWN_RISK',
    }
}

