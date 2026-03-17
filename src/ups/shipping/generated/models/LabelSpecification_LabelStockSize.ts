/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for the EPL2, ZPL or SPL label size.  Valid for EPL2, ZPL and SPL Labels.
 */
export type LabelSpecification_LabelStockSize = {
    /**
     * Height of the label image. For IN, use whole inches.  For EPL2, ZPL and SPL Labels. Only valid values are 6 or 8. Note: Label Image will only scale up to 4 X 6, even when requesting 4 X 8.
     */
    Height: string;
    /**
     * Width of the label image. For IN, use whole inches.  For EPL2, ZPL and SPL Labels. Valid value is 4. Note: Label Image will only scale up to 4 X 6, even when requesting 4 X 8.
     */
    Width: string;
};

