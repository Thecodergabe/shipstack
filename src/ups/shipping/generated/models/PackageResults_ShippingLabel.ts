/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShippingLabel_ImageFormat } from './ShippingLabel_ImageFormat';
/**
 * The container for UPS shipping label. Returned for following shipments -
 * Forward shipments,
 * Shipments with PRL returns service,
 * Electronic Return Label or Electronic Import Control Label shipments with SubVersion greater than or equal to 1707. Shipping label wont be returned if BarCodeImageIndicator is present.
 */
export type PackageResults_ShippingLabel = {
    ImageFormat: ShippingLabel_ImageFormat;
    /**
     * Base 64 encoded graphic image.
     */
    GraphicImage: string;
    /**
     * Base 64 encoded graphic image. Applicable only for Mail Innovations CN22 Combination Forward Label with more than 3 commodities.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    GraphicImagePart?: Array<string>;
    /**
     * Base 64 encoded graphic image of the Warsaw text and signature box. EPL2, ZPL and SPL labels. The image will be returned for non-US based shipments. One image will be given per shipment and it will be in the first PackageResults container.
     */
    InternationalSignatureGraphicImage?: string;
    /**
     * Base 64 encoded html browser image rendering software. This is only returned for gif and png image formats.
     */
    HTMLImage?: string;
    /**
     * PDF-417 is a two-dimensional barcode, which can store up to about 1,800 printable ASCII characters or 1,100 binary characters per symbol. The symbol is rectangular. The image is Base 64 encoded and returned if the LabelImageFormat code is GIF. Shipment with PRL return service only.
     */
    PDF417?: string;
};

