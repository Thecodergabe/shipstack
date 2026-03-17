/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
/**
 * The container array that has all the addresses associated with the package, such as the ship from (shipper), ship to (consignee), and delivery addresses
 */
export type PackageAddress = {
    address?: Address;
    /**
     * The specific name of an individual associated with the address segment.
     */
    attentionName?: string;
    /**
     * Ship-to name.
     */
    name?: string;
    /**
     * The type of address.
     */
    type?: string;
};

