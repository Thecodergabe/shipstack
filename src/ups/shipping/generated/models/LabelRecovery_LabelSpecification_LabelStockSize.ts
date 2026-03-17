/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container to hold Label Height and Width information.  Applicable if Label Image Code is ZPL, EPL and SPL. Ignored for other Label Image Code types.
 */
export type LabelRecovery_LabelSpecification_LabelStockSize = {
    /**
     * Height of the Label.  Only valid values are 6 or 8.
     *
     * Note: Label Image will only scale up to 4 X 6, even when requesting 4 X 8.
     *
     */
    Height: string;
    /**
     * Width of the Label.  Valid value is 4.
     *
     * Note: Label Image will only scale up to 4 X 6, even when requesting 4 X 8.
     *
     */
    Width: string;
};

