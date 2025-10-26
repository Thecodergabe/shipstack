/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The postal code specified in a form that is supported by USPS as base, secondary and tertiary.<ul><li>Base</li><li>AddOn</li><li>DeliveryPoint</li></ul>Example: 75063-8659
 */
export type ParsedPostalCode = {
    /**
     * Indicates the base.<br> Example: 00926
     */
    base?: string;
    /**
     * Indicates the secondary value in Postal Code.<br> Example: 2716
     */
    addOn?: string;
    /**
     * Indicates the tertiary value in Postal Code.<br> Example: 50
     */
    deliveryPoint?: string;
};

