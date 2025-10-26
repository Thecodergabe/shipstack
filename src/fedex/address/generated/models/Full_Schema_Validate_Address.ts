/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressResolutionControlParameters } from './AddressResolutionControlParameters';
import type { ResolveContactAndAddress } from './ResolveContactAndAddress';
/**
 * The request elements for address resolution.
 */
export type Full_Schema_Validate_Address = {
    /**
     * This can be used to request the characteristics of an address had at a particular time in history. This defaults to current date time (of the Address Validation System). This is useful because the AddressValidation database is dynamic and stores historical data. Characteristics such as Business/Residential indicator may change over time.<br> Example: 2019-09-06
     */
    inEffectAsOfTimestamp?: string;
    validateAddressControlParameters?: AddressResolutionControlParameters;
    /**
     * Indicate the address to be validated and resolved. This includes the address details, such as streetline, state or province code, country code and postal code. <br><br><i>Note: Up to 100 of these can be submitted in a single request.</i>
     */
    addressesToValidate: Array<ResolveContactAndAddress>;
};

