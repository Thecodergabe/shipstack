/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The file format of the label and receipt. Defaults to HTML format if this node does not exist.
 */
export type LabelRecovery_LabelSpecification_LabelImageFormat = {
    /**
     * File type that the label is to be generated in. Valid values are:
     * - GIF -- label is in HTML format.
     * - PDF -- label is in PDF format.
     * - ZPL -- Thermal label in ZPL format.
     * - EPL -- Thermal label in EPL2 format.
     * - SPL -- Thermal label in SPL format.
     *
     * Default is GIF
     *
     */
    Code: string;
    /**
     * Description of the label image format code.
     */
    Description?: string;
};

