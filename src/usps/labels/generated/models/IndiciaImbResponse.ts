/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IndiciaImbAddress } from './IndiciaImbAddress';
export type IndiciaImbResponse = {
    indiciaMetadata?: {
        /**
         * Human-readable form of the intelligent mail barcode (IMB) value.
         */
        imb?: string;
        /**
         * The barcode construct code associated with the tracking number.
         *
         * Notes:
         * - This field will be absent from the response if the request does not include extra services.
         *
         */
        constructCode?: string;
        /**
         * Human-readable form of the intelligent mail package barcode (IMPB) value.
         *
         * Notes:
         * - This field will be absent from the response if the request does not include extra services.
         *
         */
        trackingNumber?: string;
        /**
         * Pricing SKU
         */
        SKU?: string;
        /**
         * Total price of the indicia, including postage and any fees.
         */
        totalPrice?: number;
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
        /**
         * Extra services requested on the mailpiece.
         */
        extraServices?: Array<{
            /**
             * Name of the extra service.
             */
            name?: string;
            /**
             * SKU of the extra service.
             */
            SKU?: string;
            /**
             * The price for the extra service.
             */
            price?: number;
        }>;
        /**
         * The Service Type Code associated with the mailpiece. A list of Service Type Codes can be found at: [https://postalpro.usps.com/IMPB_Service_Type_Codes](https://postalpro.usps.com/IMPB_Service_Type_Codes)
         *
         */
        serviceTypeCode?: string;
        /**
         * Banner text printed on the label.
         */
        bannerText?: string;
        /**
         * The mail class of the indicia.
         */
        mailClass?: IndiciaImbResponse.mailClass;
        /**
         * The `toAddress` from the request that will be printed on the letter, flat, or card.
         */
        toAddress?: IndiciaImbAddress;
        /**
         * The `returnAddress` from the request that will be printed on the letter, flat, or card.
         */
        returnAddress?: IndiciaImbAddress;
        /**
         * Base64 encoded string of the binary data used to create the Intelligent Mail Indicia (IMI) Data Matrix. Only populated if `imageInfo.labelType` is `IMI_DATA_ONLY`.
         */
        indiciaIMI?: any;
    };
    /**
     * Contains the Base64-encoded file contents of the indicia image. Provided only when `imageInfo.labelType` is not `IMI_DATA_ONLY`.
     *
     */
    indiciaImage?: string;
    /**
     * Contains the Base64-encoded file contents of the indicia receipt image. Provided only when `imageInfo.receiptOption` is `SEPARATE_PAGE`.
     *
     */
    receiptImage?: string;
};
export namespace IndiciaImbResponse {
    /**
     * The mail class of the indicia.
     */
    export enum mailClass {
        FIRST_CLASS = 'FIRST-CLASS',
    }
}

