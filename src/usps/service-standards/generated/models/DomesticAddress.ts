/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
/**
 * Address fields for US locations.
 */
export type DomesticAddress = (Address & {
    /**
     * City Name.
     */
    city?: string;
    /**
     * 2-letter USPS state abbreviation.
     */
    state?: string;
    /**
     * 5-digit ZIP code.
     */
    ZIPCode?: string;
    /**
     * ZIP+4 extension.
     */
    ZIPPlus4?: string;
    /**
     * An area, sector, or residential development within a geographic area (typically used for addresses in Puerto Rico).
     */
    urbanization?: string;
});

