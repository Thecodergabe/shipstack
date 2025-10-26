/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These are email details for the return shipment.
 */
export type ReturnEmailDetail = {
    /**
     * This is the merchant phone number and required for Email Return Labels.<br>Example: 19012635656
     */
    merchantPhoneNumber: string;
    /**
     * Indicate the allowed (merchant-authorized) special services which may be selected when the subsequent shipment is created.<br>Only services represented in EmailLabelAllowedSpecialServiceType will be controlled by this list.
     */
    allowedSpecialService: Array<'SATURDAY_DELIVERY' | 'SATURDAY_PICKUP'>;
};

