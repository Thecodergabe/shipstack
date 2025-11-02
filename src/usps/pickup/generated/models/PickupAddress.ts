/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Addressee } from './Addressee';
import type { DomesticAddress } from './DomesticAddress';
import type { NotificationMethod } from './NotificationMethod';
/**
 * This is the point of contact information for a potential pickup.
 */
export type PickupAddress = (Addressee & {
    address?: DomesticAddress;
    /**
     * One or more contact methods used to facilitate package pickup.
     */
    contact?: Array<NotificationMethod>;
} & {
    /**
     * One or more contact methods used to facilitate package pickup.
     */
    contact: Array<NotificationMethod>;
});

