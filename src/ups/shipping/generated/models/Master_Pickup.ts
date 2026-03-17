/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TradeDirect_Address } from './TradeDirect_Address';
import type { TradeDirect_Phone } from './TradeDirect_Phone';
/**
 * Contains the address and contact details of the shipments.
 */
export type Master_Pickup = {
    /**
     * Master Pickup Company Name.
     */
    Name: string;
    /**
     * Master Pickup Contact Name.
     */
    AttentionName?: string;
    Phone?: TradeDirect_Phone;
    Address: TradeDirect_Address;
    /**
     * Master Pickup Email Address
     */
    EMailAddress: string;
};

