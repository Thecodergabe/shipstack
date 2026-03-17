/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * LabelImageFormat Container.
 */
export type LabelSpecification_LabelImageFormat = {
    /**
     * Label print method code determines the format in which Labels are to be generated. For EPL2 formatted Labels use EPL, for SPL formatted Labels use SPL, for ZPL formatted Labels use ZPL and for image formats use GIF.  For shipments without return service the valid value is GIF, ZPL, EPL and SPL. For shipments with PRL return service, the valid values are EPL, ZPL, SPL and GIF. For UPS Premier Silver shipment only ZPL is supported.
     */
    Code: string;
    /**
     * Description of the label image format code.
     */
    Description?: string;
};

