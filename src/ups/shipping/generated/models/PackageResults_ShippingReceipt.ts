/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShippingReceipt_ImageFormat } from './ShippingReceipt_ImageFormat';
/**
 * Supported for following shipments -
 * PRL shipments,
 * Electronic Return Label or Electronic Import Control Label shipments with SubVersion greater than or equal to 1707.
 */
export type PackageResults_ShippingReceipt = {
    ImageFormat: ShippingReceipt_ImageFormat;
    /**
     * Base 64 encoded receipt in HTML format.
     *
     * The receipt image is only returned for the first 5 packages.
     */
    GraphicImage: string;
};

