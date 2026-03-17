/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The container image format.
 */
export type ShippingLabel_ImageFormat = {
    /**
     * Label image code that the labels are generated. Valid values: EPL = EPL2 SPL = SPL ZPL = ZPL GIF = gif images PNG = PNG images. Only EPL, SPL, ZPL and GIF are currently supported. For multi piece COD shipments, the label image format for the first package will always be a GIF for any form of label requested.
     */
    Code: string;
    /**
     * Description of the image format.
     */
    Description?: string;
};

