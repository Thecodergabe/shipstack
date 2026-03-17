/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressVO_1 } from './AddressVO_1';
import type { ContactVO_1 } from './ContactVO_1';
/**
 * Location Contact And Address.
 */
export type ContactAndAddress_1 = {
    contact: ContactVO_1;
    /**
     * Required.
     *
     * Descriptive data for a physical location.  may be used as an actual physical address(place to which one could go), or a container of 'address parts' which should be handled as a unit(such as a city-state-zip combination within the US).
     *
     * Conditional when used with Payor object.  Required if entering using RECIPIENT or THIRD_PARTY.  Required if not-authenticated and SENDER is selected
     */
    address: AddressVO_1;
};

