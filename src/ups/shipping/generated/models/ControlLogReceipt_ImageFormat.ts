/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for the High Value report format required if parent exist.
 */
export type ControlLogReceipt_ImageFormat = {
    /**
     * Code for the type of Graphic Image for the High Value Report.
     *
     * Valid values:
     * - EPL = EPL2 (when user requests label in EPL2 format)
     * - SPL = SPL (when user requests label in SPL format)
     * - ZPL = ZPL (when user requests label in ZPL format)
     * - HTML= HTML (when user requests label in HTML format)
     *
     */
    Code: string;
    /**
     * Description of the format code.
     */
    Description?: string;
};

