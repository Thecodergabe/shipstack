/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressVO } from './AddressVO';
import type { ContactVO } from './ContactVO';
/**
 * Location Contact And Address.
 */
export type ContactAndAddress = {
    contact: ContactVO;
    /**
     * Required.
     *
     * Descriptive data for a physical location.  may be used as an actual physical address(place to which one could go), or a container of 'address parts' which should be handled as a unit(such as a city-state-zip combination within the US).
     *
     * Conditional when used with Payor object.  Required if entering using RECIPIENT or THIRD_PARTY.  Required if not-authenticated and SENDER is selected
     */
    address: AddressVO;
};

