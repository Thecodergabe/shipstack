/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * specifies additional address details for the physical location
 */
export type AddressAncillaryDetail = {
    /**
     * This is the Subdivision or community within a city for the given address.<br> Forester subdivision
     */
    locationInCity?: string;
    /**
     * This is the suite information for the given address.
     */
    suite?: string;
    /**
     * Specifies the reason to override address verification.<br> Valid values:  CUSTOMER_PREFERENCE, CUSTOMER_PROVIDED_PROOF, MANUAL_VALIDATION
     */
    addressVerificationOverrideReason?: string;
    /**
     * This is location in a campus, such as exterior building annex A.<br> Example: south west of main office entrance.
     */
    locationInProperty?: string;
    /**
     * Specifies any additional information about the given address.<br>Example: north door
     */
    addtionalDescriptions?: string;
    /**
     * This is the department for the given address.<br>Example: Claims department
     */
    department?: string;
    /**
     * This is to specify the room or floor information for the given address.<br>Example: 5th floor
     */
    roomFloor?: string;
    /**
     * This is the cross street information for the given address.<br>Example: Union and Main
     */
    crossStreet?: string;
    /**
     * This is the building information for the given address.<br>Example: Building 300
     */
    building?: string;
    /**
     * This is the apartment information for the given address.<br>Example: Apartment 1503
     */
    apartment?: string;
    /**
     * This is room specific information for the given address.<br>Example: Room B-23
     */
    room?: string;
};

