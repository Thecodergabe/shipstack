/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The Image Object defines label characteristics
 */
export type ImageInfo = {
    /**
     * The type of label image requested.
     * * 'LABEL_BROKER'- Request a USPS QR code to allow your customers with no access to a printer to print at participating Post Office Locations. All USPS API users and third party integrators utilizing QR codes are subject to the [Label Broker terms and conditions](https://www.usps.com/terms-conditions/label-broker.htm). For more information please see the Label Broker guide available on [GitHub](https://github.com/USPS/api-examples/blob/main/USPS%20APIs%20Domestic%20Labels%20API%20Documentation_2023_0901%20Published.pdf).
     * * 'PDF'
     * * 'TIFF'
     * * 'ZPL203DPI'
     * * 'ZPL300DPI'
     * * 'NONE'
     */
    imageType?: ImageInfo.imageType;
    /**
     * The requested label image size to generate.
     */
    labelType?: ImageInfo.labelType;
    /**
     * This field is deprecated and will be removed in a future release.
     * By default, all international packages are manifested at the end of the day.
     * Use `packageDescription.packageOptions.immediateManifest` to trigger an immediate manifest.
     *
     * @deprecated
     */
    holdForManifest?: boolean;
    /**
     * Indicates if Insured Fees and Postal Charges/Fees should be
     * omitted from the label image.  If true, Insured Fees and Postal
     * Charges/Fees values will be removed.
     *
     */
    suppressPostage?: boolean;
    /**
     * Applicable only when `imageType` is `LABEL_BROKER`. When `includeLabelBrokerPDF` is `true`, two label images will be returned in the multi-part and vendor response as `labelBrokerQR` and `labelImage`. `labelBrokerQR` will contain the base64 PNG of the Label Broker QR Code and `labelImage` will contain the base64 PDF of the Label stored in Label Broker. When `includeLabelBrokerPDF` is `false`, one image will be returned in the multi-part and vendor response as `labelImage` as the base64 PNG of the Label Broker QR Code.
     *
     */
    includeLabelBrokerPDF?: boolean;
    /**
     * Applicable only when `imageType` is `ZPL203DPI` or `ZPL300DPI`.  When `addZPLComments` is `true`, comments will be visible within the ZPL text response to the user to denote different sections of their label.  When `addZPLComments` is `false`, no comments will be included in the ZPL text response.  This will be ignored for any other `imageType`.
     *
     * Example of a ZPL comment:
     * `^FX Start of label. 123e4567-e89b-12d3-a456-426614174000 ^FS`
     *
     */
    addZPLComments?: boolean;
};
export namespace ImageInfo {
    /**
     * The type of label image requested.
     * * 'LABEL_BROKER'- Request a USPS QR code to allow your customers with no access to a printer to print at participating Post Office Locations. All USPS API users and third party integrators utilizing QR codes are subject to the [Label Broker terms and conditions](https://www.usps.com/terms-conditions/label-broker.htm). For more information please see the Label Broker guide available on [GitHub](https://github.com/USPS/api-examples/blob/main/USPS%20APIs%20Domestic%20Labels%20API%20Documentation_2023_0901%20Published.pdf).
     * * 'PDF'
     * * 'TIFF'
     * * 'ZPL203DPI'
     * * 'ZPL300DPI'
     * * 'NONE'
     */
    export enum imageType {
        LABEL_BROKER = 'LABEL_BROKER',
        PDF = 'PDF',
        TIFF = 'TIFF',
        ZPL203DPI = 'ZPL203DPI',
        ZPL300DPI = 'ZPL300DPI',
        NONE = 'NONE',
    }
    /**
     * The requested label image size to generate.
     */
    export enum labelType {
        _4X6LABEL = '4X6LABEL',
    }
}

