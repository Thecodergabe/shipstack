/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LabelReprintImageInfo = {
    /**
     * The type of label image requested. If omitted then the default image type is PDF.
     * * 'PDF'
     * * 'TIFF'
     * * 'JPG'
     * * 'PNG'
     * * 'GIF'
     * * 'SVG'
     * * 'ZPL203DPI'
     * * 'ZPL300DPI'
     *
     * Note:
     * - Labels with customs forms only support formats of `PDF`, `TIFF`, `ZPL203DPI`, and `ZPL300DPI`.
     *
     */
    imageType?: LabelReprintImageInfo.imageType;
    /**
     * Ability to select the label image size. If omitted then the default label size is `4X6LABEL`.
     *
     * Note:
     * * Currently, customs forms only support `4X6LABEL`.
     * * The `labelType` of `2X7LABEL` is not supported with the `imageType` of `ZPL203DPI` or `ZPL300DPI`.
     *
     */
    labelType?: LabelReprintImageInfo.labelType;
    /**
     * Indicates if postage is printed on the label. If omitted then the request will be defaulted to true.
     *
     */
    suppressPostage?: boolean;
    /**
     * Indicates if the `mailingDate` is printed on the label.  If omitted then the value will default to true.
     *
     * Note:
     * * Mail Date cannot be suppressed on Domestic Customs Forms. The customs form will always display the Date of Mailing.
     * * The date the label was created cannot be suppressed and will always print on the label.
     *
     */
    suppressMailDate?: boolean;
    /**
     * The format of label branding images to be shown on the generated label image.
     *
     * Note:
     * * Label branding images will not be shown on labels with customs forms.
     * * Label branding images are not currently supported with an `imageType` of `ZPL203DPI` or `ZPL300DPI`.
     * * Label branding images are not currently supported with a `labelType` of `4X4LABEL`.
     * * When a `brandingImageFormat` is provided with a Destination Entry Facility, the Drop-Off Location will not be displayed on the label.
     * * When a `brandingImageFormat` of `RECTANGLE` is provided, Customer Reference #3-#4 cannot be provided since they will not be shown.
     * * When a `brandingImageFormat` of `ONE_SQUARE` or `TWO_SQUARES` is provided, Customer Reference numbers will be shifted to the right to accommodate the image.
     * * When a `brandingImageFormat` of `RECTANGLE` is provided, Customer Reference numbers, package number, and total packages will not be displayed on the label.
     * * A `brandingImageFormat` of `ONE_SQUARE` is currently only supported with `labelType` of `4X6LABEL`, `4X5LABEL`, `6X4LABEL`, and `2X7LABEL` for both outbound and return labels.
     * * A `brandingImageFormat` of `TWO_SQUARES` is currently only supported with `labelType` of `4X6LABEL`, `4X5LABEL`, and `6X4LABEL` for both outbound and return labels.
     * * A `brandingImageFormat` of `RECTANGLE` is currently only supported with `labelType` of `4X6LABEL`, `4X5LABEL`, and `6X4LABEL` for outbound labels and `4X5LABEL` and `6X4LABEL` for return labels.
     *
     */
    brandingImageFormat?: LabelReprintImageInfo.brandingImageFormat;
    /**
     * The UUIDs associated with custom images uploaded in the Logo Branding endpoint: /branding
     *
     * Note:
     * * These UUIDs must have been created with the same Payment Authorization Label Owner CRID in use when creating the label
     * * When using `ONE_SQUARE` or `RECTANGLE` the brandingImageUUIDs list should include only one imageUUID string.
     * * When using `TWO_SQUARES` the brandingImageUUIDs list should include only two imageUUID strings.
     *
     */
    brandingImageUUIDs?: Array<string>;
    /**
     * The package number in a series such as 1 of 3, 2 of 3, etc.  If `totalPackages` is populated then `packageNumber` is required.  `packageNumber` must be less than or equal to `totalPackages`.  This feature is not supported on the 2x7 or 4x4 label format.
     *
     * Note:
     * * When `packageNumber` is provided with a Destination Entry Facility, the Drop-Off Location will not be displayed on the label.
     */
    packageNumber?: number;
    /**
     * The total number of packages in a series such as 999.  If packageNumber is populated then totalPackages is required.  totalPackages must be greater than or equal to packageNumber.  This feature is not supported by the 2x7 or 4x4 label format.
     */
    totalPackages?: number;
};
export namespace LabelReprintImageInfo {
    /**
     * The type of label image requested. If omitted then the default image type is PDF.
     * * 'PDF'
     * * 'TIFF'
     * * 'JPG'
     * * 'PNG'
     * * 'GIF'
     * * 'SVG'
     * * 'ZPL203DPI'
     * * 'ZPL300DPI'
     *
     * Note:
     * - Labels with customs forms only support formats of `PDF`, `TIFF`, `ZPL203DPI`, and `ZPL300DPI`.
     *
     */
    export enum imageType {
        PDF = 'PDF',
        TIFF = 'TIFF',
        JPG = 'JPG',
        PNG = 'PNG',
        GIF = 'GIF',
        SVG = 'SVG',
        ZPL203DPI = 'ZPL203DPI',
        ZPL300DPI = 'ZPL300DPI',
    }
    /**
     * Ability to select the label image size. If omitted then the default label size is `4X6LABEL`.
     *
     * Note:
     * * Currently, customs forms only support `4X6LABEL`.
     * * The `labelType` of `2X7LABEL` is not supported with the `imageType` of `ZPL203DPI` or `ZPL300DPI`.
     *
     */
    export enum labelType {
        _4X4LABEL = '4X4LABEL',
        _4X5LABEL = '4X5LABEL',
        _4X6LABEL = '4X6LABEL',
        _6X4LABEL = '6X4LABEL',
        _2X7LABEL = '2X7LABEL',
    }
    /**
     * The format of label branding images to be shown on the generated label image.
     *
     * Note:
     * * Label branding images will not be shown on labels with customs forms.
     * * Label branding images are not currently supported with an `imageType` of `ZPL203DPI` or `ZPL300DPI`.
     * * Label branding images are not currently supported with a `labelType` of `4X4LABEL`.
     * * When a `brandingImageFormat` is provided with a Destination Entry Facility, the Drop-Off Location will not be displayed on the label.
     * * When a `brandingImageFormat` of `RECTANGLE` is provided, Customer Reference #3-#4 cannot be provided since they will not be shown.
     * * When a `brandingImageFormat` of `ONE_SQUARE` or `TWO_SQUARES` is provided, Customer Reference numbers will be shifted to the right to accommodate the image.
     * * When a `brandingImageFormat` of `RECTANGLE` is provided, Customer Reference numbers, package number, and total packages will not be displayed on the label.
     * * A `brandingImageFormat` of `ONE_SQUARE` is currently only supported with `labelType` of `4X6LABEL`, `4X5LABEL`, `6X4LABEL`, and `2X7LABEL` for both outbound and return labels.
     * * A `brandingImageFormat` of `TWO_SQUARES` is currently only supported with `labelType` of `4X6LABEL`, `4X5LABEL`, and `6X4LABEL` for both outbound and return labels.
     * * A `brandingImageFormat` of `RECTANGLE` is currently only supported with `labelType` of `4X6LABEL`, `4X5LABEL`, and `6X4LABEL` for outbound labels and `4X5LABEL` and `6X4LABEL` for return labels.
     *
     */
    export enum brandingImageFormat {
        ONE_SQUARE = 'ONE_SQUARE',
        TWO_SQUARES = 'TWO_SQUARES',
        RECTANGLE = 'RECTANGLE',
        NONE = 'NONE',
    }
}

