/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Vendor Information Container
 */
export type ShipFrom_VendorInfo = {
    /**
     * Code that identifies the type of Vendor Collect ID Number. Valid Values
     * - 0000 = Unknown/Other
     * - 0356 = IOSS Registration Number
     * - 0357 = VOEC Registration Number
     * - 0358 = Deprecated
     * - 0359 = PVA Registration Number
     * - 1051 = Singapore GST Registration Number
     * - 1052 = ARN Registration Number
     * - 1053 = IRD Registration Number
     * - 1054 = Malaysia Low Value Goods Sales Tax Registration Number
     *
     * Vendor Collect ID Number type code will be printed on commercial invoice if present.
     *
     */
    VendorCollectIDTypeCode: string;
    /**
     * Shipper's VAT Tax collection registration number to be entered by Shipper at time of shipment creation. Presence of this number as part of the shipment information implies the shipper has collected/paid the required VAT tax (outside of UPS/UPS systems). Vendor Colect ID Number will be printed on commercial invoice if present.
     *
     * Sample Values:   'IMDEU1234567' (IOSS #),  'VOEC1234567' (VOEC #),  'GB1234567' (HMRC #)
     *
     * Required if the shipment is subject to Vendor Collect ID collection
     *
     */
    VendorCollectIDNumber: string;
    /**
     * Consignee Type. 01 = Business  02 = Consumer NA = Not Applicable
     */
    ConsigneeType?: string;
};

