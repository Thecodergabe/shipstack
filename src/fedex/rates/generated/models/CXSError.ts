/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Parameter } from './Parameter';
export type CXSError = {
    /**
     * Indicates the error code.<br>Example:<br>ACCOUNT.NUMBER.MISMATCH<br>
     */
    code?: string;
    /**
     * List of parameters which indicates the properties of the alert message.
     */
    parameterList?: Array<Parameter>;
    /**
     * Indicates the description of error alert message.<br>Example: When payment Type is SENDER, ShippingChargesPayment Payor AccountNumber should match the shipper account number.
     */
    message?: string;
};

