/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Receipt_Image } from './Receipt_Image';
/**
 * Container for the HTML receipt and the receipt link.
 */
export type LabelResults_Receipt = {
    /**
     * Base 64 encoded html browser image.
     */
    HTMLImage?: string;
    Image?: Receipt_Image;
    /**
     * Receipt's url  Applicable for following types of shipments:
     * Print/Electronic Return Label
     * Print/Electronic Import Control Label
     */
    URL?: string;
};

