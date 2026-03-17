/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dimensions_UnitOfMeasurement } from './Dimensions_UnitOfMeasurement';
/**
 * Dimensions Container. This container is not applicable for GFP Rating request.  Required for Heavy Goods service. Package Dimension will be ignored for Simple Rate
 */
export type Package_Dimensions = {
    UnitOfMeasurement: Dimensions_UnitOfMeasurement;
    /**
     * Length of the package used to determine dimensional weight.  Required for GB to GB and Poland to Poland shipments.
     *
     * 6 digits in length with 2 digits of significance after the decimal point.
     *
     */
    Length: string;
    /**
     * Width of the package used to determine dimensional weight.  Required for GB to GB and Poland to Poland shipments.
     *
     * 6 digits in length with 2 digits of significance after the decimal point.
     *
     */
    Width: string;
    /**
     * Height of the package used to determine dimensional weight.  Required for GB to GB and Poland to Poland shipments.
     *
     * 6 digits in length with 2 digits of significance after the decimal point.
     *
     */
    Height: string;
};

