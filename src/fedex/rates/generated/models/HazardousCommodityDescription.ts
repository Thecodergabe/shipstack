/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HazardousCommodityPackingDetail } from './HazardousCommodityPackingDetail';
/**
 * Identifies and describes an individual hazardous commodity.
 */
export type HazardousCommodityDescription = {
    /**
     * In conjunction with the regulatory identifier, this field uniquely identifies a specific hazardous materials commodity.
     */
    sequenceNumber?: number;
    /**
     * Indicates any special processing options to be applied to the description of the dangerous goods commodity.
     */
    processingOptions?: Array<'INCLUDE_SPECIAL_PROVISIONS'>;
    /**
     * Specifies the hazardous material subsidiary classes.
     */
    subsidiaryClasses?: Array<string>;
    /**
     * Specifies the DOT diamond hazard label type. This element can also include limited quantity or exemption number.
     */
    labelText?: string;
    /**
     * Specify the technical name for the hazardous commodity.
     */
    technicalName?: string;
    packingDetails?: HazardousCommodityPackingDetail;
    /**
     * Information related to quantity limitations and operator or state variations as may be applicable to the dangerous goods commodity.
     */
    authorization?: string;
    /**
     * The element specifies the reportable quantity of the hazardous material.
     */
    reportableQuantity?: boolean;
    /**
     * Indicates the percentage.
     */
    percentage?: number;
    /**
     * Specifies the ID of label text.
     */
    id?: string;
    /**
     * Identifies IATA packing group for a hazardous commodity.
     */
    packingGroup?: HazardousCommodityDescription.packingGroup;
    /**
     * The proper shipping name as defined by the regulation.<br>The name can also include qualifying words.
     */
    properShippingName?: string;
    /**
     * Specify hazard class for commodity.
     */
    hazardClass?: string;
};
export namespace HazardousCommodityDescription {
    /**
     * Identifies IATA packing group for a hazardous commodity.
     */
    export enum packingGroup {
        DEFAULT = 'DEFAULT',
        I = 'I',
        II = 'II',
        III = 'III',
    }
}

