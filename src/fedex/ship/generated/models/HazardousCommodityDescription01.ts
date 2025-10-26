/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HazardousCommodityPackingDetail01 } from './HazardousCommodityPackingDetail01';
/**
 * Required<br>Details of hazardous commodity description.
 */
export type HazardousCommodityDescription01 = {
    /**
     * Required<br>Specify the sequence number.<br>Example: 9812
     */
    sequenceNumber?: number;
    /**
     * Indicates any special processing options to be applied to the description of the dangerous goods commodity <br> Example: ["INCLUDE_SPECIAL_PROVISIONS"]
     */
    processingOptions?: Array<'INCLUDE_SPECIAL_PROVISIONS'>;
    /**
     * Required
     *
     * Indicates list of subsidiary classes<br>Example: ["Subsidiary Classes"]
     */
    subsidiaryClasses?: Array<string>;
    /**
     * Specifies the text for the label.
     */
    labelText?: string;
    /**
     * Specifies the technical name for the hazardous material.
     */
    technicalName?: string;
    packingDetails?: HazardousCommodityPackingDetail01;
    /**
     * Information related to quantity limitations and operator or state variations as may be applicable to the dangerous goods commodity.
     */
    authorization?: string;
    /**
     * Reportable Quantity
     */
    reportableQuantity: boolean;
    /**
     * Percentage<br>Example: 12.45
     */
    percentage?: number;
    /**
     * ID<br>Example: 123
     */
    id?: string;
    /**
     * Identifies DOT packing group for a hazardous commodity
     */
    packingGroup: HazardousCommodityDescription01.packingGroup;
    /**
     * The proper shipping name as defined by the regulation. The name can also include qualifying words<br>Example: properShippingName
     */
    properShippingName?: string;
    /**
     * Specifies the hazard class for the commodity<br>Example: hazard Class
     *
     */
    hazardClass?: string;
};
export namespace HazardousCommodityDescription01 {
    /**
     * Identifies DOT packing group for a hazardous commodity
     */
    export enum packingGroup {
        DEFAULT = 'DEFAULT',
        I = 'I',
        II = 'II',
        III = 'III',
    }
}

