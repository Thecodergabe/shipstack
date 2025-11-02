/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressAdditionalInfo } from './AddressAdditionalInfo';
import type { AddressCorrections } from './AddressCorrections';
import type { AddressMatches } from './AddressMatches';
import type { DomesticAddress } from './DomesticAddress';
/**
 * Standardizes street addresses including city and street abbreviations, and provides missing information such as ZIP Code&#8482; and ZIP + 4&#174;.
 */
export type AddressResponse = {
    /**
     * This is the firm/business name at the address.
     */
    firm?: string;
    address?: DomesticAddress;
    additionalInfo?: AddressAdditionalInfo;
    corrections?: AddressCorrections;
    matches?: AddressMatches;
    warnings?: Array<string>;
};

