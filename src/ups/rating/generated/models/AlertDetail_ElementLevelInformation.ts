/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ElementLevelInformation_ElementIdentifier } from './ElementLevelInformation_ElementIdentifier';
/**
 * Provides more information about the element that represents the alert.
 */
export type AlertDetail_ElementLevelInformation = {
    /**
     * Define type of element in request. Possible values are -
     * - 'H' for the header details level,
     * - 'S' for the shipment level,
     * - 'P' for the package level,
     * - 'C' for the commodity level.
     *
     */
    Level: string;
    /**
     * Contains more information about the type of element. Returned if Level is 'P' or 'C'.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    ElementIdentifier?: Array<ElementLevelInformation_ElementIdentifier>;
};

