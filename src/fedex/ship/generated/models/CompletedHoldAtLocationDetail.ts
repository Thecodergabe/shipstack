/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JustContactAndAddress } from './JustContactAndAddress';
/**
 * This is default holding location information when HOLD_AT_LOCATION special service is requested and the client does not specify the hold location address.
 */
export type CompletedHoldAtLocationDetail = {
    /**
     * Indicates the type of the FedEx holding location <br>Example: FEDEX_STAFFED
     */
    holdingLocationType?: string;
    /**
     * Indicate the physical address of the FedEx holding location.
     */
    holdingLocation?: JustContactAndAddress;
};

