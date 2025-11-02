/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomesticAddress } from './DomesticAddress';
import type { FacilityCloseTimes } from './FacilityCloseTimes';
/**
 * This is USPS&#174; facility information.
 */
export type Facility = (DomesticAddress & {
    /**
     * This is the facility's name.
     */
    facilityName?: string;
    /**
     * This is the type of facility at the location.
     */
    facilityType?: Facility.facilityType;
    closes?: FacilityCloseTimes;
});
export namespace Facility {
    /**
     * This is the type of facility at the location.
     */
    export enum facilityType {
        POST_OFFICE = 'POST_OFFICE',
        EXPRESS_MAIL_COLLECTION_BOX = 'EXPRESS_MAIL_COLLECTION_BOX',
        AIR_MAIL_FACILITY = 'AIR_MAIL_FACILITY',
        CONTRACT_POSTAL_UNIT = 'CONTRACT_POSTAL_UNIT',
    }
}

