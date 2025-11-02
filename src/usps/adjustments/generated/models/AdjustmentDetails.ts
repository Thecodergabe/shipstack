/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Details on adjustments that will be or have been issued to a customer account. Fields will only be provided if they differed from the original manifested data.
 */
export type AdjustmentDetails = {
    /**
     * The trackingNumber of the package.
     */
    trackingNumber?: string;
    /**
     * The manifest number (or electronic file number/EFN) of the package.
     */
    manifestNumber?: string;
    /**
     * Array of root causes that contributed to the adjustment
     */
    rootCause?: Array<'CENSUS' | 'DUPLICATE' | 'UNMANIFESTED'>;
    pricingCharacteristics?: Array<{
        /**
         * | Enumeration | Format | Example |
         * | -- | -- | -- |
         * | WEIGHT | number | 4.1 |
         * | DIM_WEIGHT | number | 11.8 |
         * | LENGTH | number | 8.6 |
         * | WIDTH | number | 4.2 |
         * | HEIGHT | number | 3.5 |
         * | ORIGIN_ZIP_CODE | string | 20260 |
         * | DESTINATION_ZIP_CODE | string | 20260 |
         * | ZONE | string | 01 |
         * | DESTINATION_ENTRY_FACILITY_TYPE | string | Temp |
         * | RATE_INDICATOR | string | SP |
         * | MAIL_CLASS | string | PRIORITY_MAIL |
         */
        pricingCharacteristic?: 'WEIGHT' | 'DIM_WEIGHT' | 'LENGTH' | 'WIDTH' | 'HEIGHT' | 'ORIGIN_ZIP_CODE' | 'DESTINATION_ZIP_CODE' | 'ZONE' | 'DESTINATION_ENTRY_FACILITY_TYPE' | 'RATE_INDICATOR' | 'MAIL_CLASS';
        claimed?: string;
        assessed?: string;
    }>;
    /**
     * USPS Packaging used for the shipment
     */
    USPSPackagingBarcode?: string;
    /**
     * The postage charged for the adjustment
     */
    postageAdjustment?: number;
    /**
     * The claimed and assessed total postage for the package.
     */
    totalPostage?: {
        claimed?: number;
        assessed?: number;
    };
    /**
     * The claimed and assessed base postage for the package (minus fees and extra services).
     */
    basePostage?: {
        claimed?: number;
        assessed?: number;
    };
    /**
     * The claimed and assessed fees for the package.
     */
    fees?: Array<{
        name?: 'Nonstandard Dimension: Length > 22' | 'Nonstandard Dimension: Length > 30' | 'Nonstandard Dimension: Volume > 2 cubic feet' | 'Nonstandard Dimension: Non-Compliance';
        claimedPostage?: number;
        assessedPostage?: number;
    }>;
    /**
     * The Enterprise Payment Account the adjustment was charged to.
     */
    accountNumber?: string;
    /**
     * The Enterprise Payment System Transaction ID the adjustment was charged to.
     */
    transactionID?: string;
    /**
     * Earliest Datetime USPS scanned the package.
     */
    earliestScanDate?: string;
    /**
     * Mailer ID used in the barcode to identify the Mail Owner associated to a shipment.
     */
    MID?: string;
    /**
     * Customer Registration ID used to identify the business location associated to a shipment.
     */
    CRID?: string;
    adjustmentStatus?: AdjustmentDetails.adjustmentStatus;
};
export namespace AdjustmentDetails {
    export enum adjustmentStatus {
        PENDING = 'PENDING',
        CHARGED = 'CHARGED',
        REMOVED = 'REMOVED',
    }
}

