/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressVO1 } from './AddressVO1';
import type { DelayDetail } from './DelayDetail';
import type { StatusAncillaryDetail } from './StatusAncillaryDetail';
/**
 * Specifies details about the status of the track information for the shipment being tracked.  AncilliaryDetails may also be available which describe the cause of exception along with any action that needs to taken by customer.
 */
export type StatusDetail = {
    /**
     * Address information related to the associated Status.
     */
    scanLocation?: AddressVO1;
    /**
     * A code that identifies this type of status.<br> Example:PU,DE,DP,HL,OC
     */
    code?: string;
    /**
     * Specifies the latest status detail code of the package.<br> Example:PU,DE,DP,HL,OC
     */
    derivedCode?: string;
    /**
     * Specifies the cause of exception along with any action that needs to taken by customer.
     */
    ancillaryDetails?: Array<StatusAncillaryDetail>;
    /**
     * This is the latest tracking status by locale.<br> Example: Picked up
     */
    statusByLocale?: string;
    /**
     * A human-readable description of this status.<br> Example: Picked up
     */
    description?: string;
    delayDetail?: DelayDetail;
};

