/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Receipt_Image_ImageFormat } from './Receipt_Image_ImageFormat';
/**
 * Container for the receipt in the format other than HTML.
 */
export type Receipt_Image = {
    ImageFormat: Receipt_Image_ImageFormat;
    /**
     * Base 64 encoded graphic image
     */
    GraphicImage: string;
};

