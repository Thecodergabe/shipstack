/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dimensions_UnitOfMeasurement } from './Dimensions_UnitOfMeasurement';
/**
 * Dimensions information container. Note: Currently dimensions are not applicable to Ground Freight Pricing.  Length + 2*(Width + Height) must be less than or equal to 165 IN or 330 CM. Required for Heavy Goods service. Package Dimension will be ignored for Simple Rate
 */
export type Package_Dimensions = {
    UnitOfMeasurement: Dimensions_UnitOfMeasurement;
    /**
     * Package length. Length must be the longest dimension of the container.  Valid values are 0 to 108 IN and 0 to 270 CM.
     */
    Length: string;
    /**
     * Package width.
     */
    Width: string;
    /**
     * Package height.
     */
    Height: string;
};

