/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are email disposition details. Provides the type and email addresses of e-mail recipients. If returnedDispositionDetail in labelSpecification is set as true then email will be send with label and documents copy.
 */
export type ShipEmailDispositionDetail = {
    /**
     * This is email Address.<br>Example: xxxx@xxx.com
     */
    emailAddress?: string;
    /**
     * Specify the email status.<br>Example: EMAILED
     */
    type?: string;
    /**
     * Specify the recipient Type.<br>Example: SHIPPER/BROKER
     */
    recipientType?: string;
};

