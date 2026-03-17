/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactAndAddress1 } from './ContactAndAddress1';
/**
 * Location details for the fedex facility.
 */
export type LocationDetail_origin = {
    /**
     * Location Identification for facilities identified by an alpha numeric location code. Passing Location Id of the Hold at Location (HAL) address is strongly recommended to ensure packages are delivered to the correct address.<br> Example: SEA
     */
    locationId?: string;
    locationContactAndAddress?: ContactAndAddress1;
};

