/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LabelImage_LabelImageFormat } from './LabelImage_LabelImageFormat';
/**
 * The elements needed to render a label on a printer or in a browser. Specifies the format in which GraphicImage is represented. If LabelImageFormat is GIF, LabelImage contains GraphicImage and HTMLImage. Otherwise, it contains only GraphicImage. If LabelImageFormat is PDF, LabelImage is only returned at the first package result. If entered in the request, the response mirrors, else the default values are returned.  Returned only if TrackingNumber or Combination of Reference Number and Shipper Number present in request.
 */
export type LabelResults_LabelImage = {
    LabelImageFormat: LabelImage_LabelImageFormat;
    /**
     * Base 64 encoded graphic image.
     */
    GraphicImage: string;
    /**
     * Base 64 encoded html browser image rendering software. This is only returned for GIF image formats.
     */
    HTMLImage?: string;
    /**
     * PDF-417 is a two-dimensional barcode, which can store up to about 1,800 printable ASCII characters or 1,100 binary characters per symbol. The symbol is rectangular.
     *
     * The PDF417 image will be returned when the shipment is trans-border and the service option is one of the following: Standard Express, Saver Express Plus. The image is Base 64 encoded and only returned for GIF image format.
     */
    PDF417?: string;
    /**
     * Base 64 encoded graphic image of the Warsaw text and signature box.
     */
    InternationalSignatureGraphicImage?: string;
    /**
     * This is only returned if the label link is requested to be returned and only at the first package result  Applicable for following types of shipments:
     * Print/Electronic Return Label
     * Print/Electronic Import Control Label
     * Forward shipment except for Mail Innovations Forward
     */
    URL?: string;
};

