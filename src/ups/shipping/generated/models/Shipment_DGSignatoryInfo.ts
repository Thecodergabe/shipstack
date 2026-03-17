/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DGSignatoryInfo Container  DGPaperImage will be returned if DGSignatoryInfo container present
 */
export type Shipment_DGSignatoryInfo = {
    /**
     * Name of the person signing the declaration.
     *
     * Note: The name of person or department he/she is employed with, are both acceptable.
     */
    Name?: string;
    /**
     * Title of the person signing the declaration.
     * Note: The title of the person or department he/she is employed with, are both acceptable.
     */
    Title?: string;
    /**
     * The city of the Signatory.
     */
    Place?: string;
    /**
     * Date of signing the declaration form.  Valid format is YYYYMMDD.
     */
    Date?: string;
    /**
     * Valid values:
     * 01 = Shipment level
     * 02 = Package level
     * Valid only for the Shipper Declaration paper. If missing or invalid DGPaperImage will be returned at package level.
     */
    ShipperDeclaration?: string;
    /**
     * Dangerous Goods Paper Upload Only Indicator. DG Paper will not be returned in response if UploadOnlyIndicator present.
     */
    UploadOnlyIndicator?: string;
};

