/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryPhoto } from './DeliveryPhoto';
import type { Signature } from './Signature';
/**
 * Container with all information related to the delivery of the package. Populated only when the package is delivered.
 */
export type DeliveryInformation = {
    deliveryPhoto?: DeliveryPhoto;
    /**
     * The location where the package was dropped off. For example: 'Front Door'
     */
    location?: string;
    /**
     * The individual who took possession of the package at delivery.
     */
    receivedBy?: string;
    signature?: Signature;
    /**
     * Container which contains Proof of Delivery.
     */
    pod?: {
        /**
         * The base64 encoded string representation of the Delivery Proof. Note: This is considered sensitive data and may only be returned for a user that has rights to the package.
         */
        content?: string;
    };
};

