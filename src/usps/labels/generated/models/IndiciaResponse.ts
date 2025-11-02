/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The IndiciaResponse object contains metadata for the generated First-Class indicia.
 *
 */
export type IndiciaResponse = {
    /**
     * Metadata for the generated indicia.
     */
    indiciaMetadata?: {
        /**
         * Pricing SKU
         */
        SKU?: string;
        /**
         * Amount of postage required, does not include insurance or other extra service fees.
         */
        postage?: number;
        /**
         * Fees associated to the mailpiece.
         */
        fees?: Array<{
            /**
             * Name of the fee.
             */
            name?: string;
            /**
             * Pricing SKU for the fee.
             */
            SKU?: string;
            /**
             * The price for the fee.
             */
            price?: number;
        }>;
        /**
         * The mailpiece weight, in ounces.
         */
        weight?: number;
    };
    /**
     * Contains the Base64-encoded file contents of the indicia image.
     *
     */
    indiciaImage?: string;
    /**
     * Contains the Base64-encoded file contents of the label receipt image. Provided only when `imageInfo.receiptOption` is `SEPARATE_PAGE`.
     *
     */
    receiptImage?: string;
};

