/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ValidatedHazardousCommodityContent } from './ValidatedHazardousCommodityContent';
/**
 * Specifies the details of a container used to package dangerous goods commodities.
 */
export type ValidatedHazardousContainer = {
    /**
     * Indicates that the quantity of the dangerous goods packaged is permissible for shipping. This is used to ensure that the dangerous goods commodities do not exceed the net quantity per package restrictions.<br>Example: 2.0
     */
    QValue?: number;
    /**
     * Indicates the details of the hazardous commodities in the completed package.
     */
    hazardousCommodities?: Array<ValidatedHazardousCommodityContent>;
};

