/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Product_DDSReferenceNumber } from './Product_DDSReferenceNumber';
import type { Product_EEIInformation } from './Product_EEIInformation';
import type { Product_ExcludeFromForm } from './Product_ExcludeFromForm';
import type { Product_NetCostDateRange } from './Product_NetCostDateRange';
import type { Product_PackingListInfo } from './Product_PackingListInfo';
import type { Product_ProductWeight } from './Product_ProductWeight';
import type { Product_ScheduleB } from './Product_ScheduleB';
import type { Product_Unit } from './Product_Unit';
/**
 * Contains the commodity/product information.  Applies to EEI, Invoice, Partial Invoice, CO and USMCA. When any International form is requested, at least one Product must be present.
 *
 * Maximum number of products allowed for different forms are:
 *
 * 50: Package Packing List
 *
 * 100: Commercial Invoice, USMCA, CO, EEI
 *
 * 1000: Air Freight packing list
 *
 * Note: For Partial Invoice this container is optional.
 */
export type InternationalForms_Product = {
    /**
     * Description of the product.  Applies to all International Forms. Optional for Partial Invoice. Must be present at least once and can occur for a maximum of 3 times.
     */
    Description: Array<string>;
    Unit?: Product_Unit;
    /**
     * 6-to-15-alphanumeric commodity code. Customs uses this code to determine what duties should be assessed on the commodity.  Applies to Invoice, Partial Invoice and USMCA. Required for USMCA and optional for Partial Invoice. Should be at least 6 alphanumeric. For USMCA: For each good described in Description of Goods field, identify the H.S. tariff classification to six digits. If the good is subject to a specific rule of origin in Annex 401 that requires eight digits, identify to eight digits, using the H.S. tariff classification of the country or territory into whose territory the good is imported.
     */
    CommodityCode?: string;
    /**
     * The part number or reference number for the product contained in the invoice line, as indicated on the customs invoice.  Applies to Invoice and Partial Invoice. Required for Invoice forms and optional for Partial Invoice.
     */
    PartNumber?: string;
    /**
     * The country or territory in which the good was manufactured, produced or grown. For detailed information on country or territory of origin, certificate of origin, rules of origin, and any related matters, please refer to the U.S. Customs and Border Protection Web site at www.customs.gov or contact your country or territory's Customs authority.
     */
    OriginCountryCode?: string;
    /**
     * If present, JNT will be used as the origin of country or territory code on the USMCA form and the Product/Origincountry or territoryCode tag will be ignored.  Applies to USMCA only.
     */
    JointProductionIndicator?: string;
    /**
     * For each good described in the Description of Goods field, where the good is subject to a regional value content (RVC) requirement, indicate NC if the RVC is calculated according to the net cost method; otherwise, indicate NO. If the RVC is calculated over a period of time then indicate "NC with begin/end date" by passing code "ND"  Applies to USMCA only. Required for USMCA.  Valid values:
     * - NC
     * - ND
     * - NO
     *
     */
    NetCostCode?: string;
    NetCostDateRange?: Product_NetCostDateRange;
    /**
     * Indicates the criterion (A through F) for each good described in the Description of Goods field if applicable.
     *
     * The rules of origin are contained in Chapter Four and Annex 401.
     *
     * Additional rules are described in Annex 703.2 (certain agricultural goods), Annex 300-B, Appendix 6 (certain textile goods) and Annex 308.1 (certain automatic data processing goods and their parts).  Applies to USMCA only.
     */
    PreferenceCriteria?: string;
    /**
     * Indicate the following:  Yes - If shipper is the producer of the good. If not, state 02, 03, and 04 depending on whether this certificate was based upon:
     * No [1] - Knowledge of whether the good qualifies as an originating good.
     * No [2] - Reliance on the producers written representation (other than a Certificate of Origin) that the good qualifies as an originating good.
     * No [3] - A completed and signed Certificate for the good voluntarily provided to the exporter by the producer.  Applicable for USMCA and is required. Valid values: Yes, No [1], No [2], and No [3].
     */
    ProducerInfo?: string;
    /**
     * Any special marks, codes, and numbers that may appear on package.  Applies to CO Only.
     */
    MarksAndNumbers?: string;
    /**
     * The total number of packages, cartons, or containers for the commodity.  Applicable for CO and is required. Should be numeric. Valid characters are 0 -9.
     */
    NumberOfPackagesPerCommodity?: string;
    ProductWeight?: Product_ProductWeight;
    /**
     * Includes the following information for used self-propelled vehicles as defined in Customs regulations 19 CFR 192.1: The unique Vehicle Identification Number (VIN) in the proper format. Or The Product Identification Number (PIN) for those used self-propelled vehicles for which there are no VINs.  Or the Vehicle Title Number.  Applies to EEI forms only.
     */
    VehicleID?: string;
    ScheduleB?: Product_ScheduleB;
    /**
     * Code indicating Domestic: Exports that have been produced, manufactured, or grown in the United States or Puerto Rico. This includes imported merchandise which has been enhanced in value or changed from the form in which imported by further manufacture or processing in the United States or Puerto Rico. Foreign: Merchandise that has entered the United States and is being exported again in the same condition as when imported.   Applies to EEI forms only. Required for EEI form.  Valid values:  D: Domestic; F: Foreign.
     */
    ExportType?: string;
    /**
     * This amount will always be USD.  Applies to EEI forms only. Required for EEI form. Valid characters are 0-9 and \'.\' (Decimal point). Limit to 2 digit after the decimal. The maximum length of the field is 15 including \'.\' and can hold up to 2 decimal places.
     *
     * Note: This value is calculated based on the Product/Unit/Value and /Product/Unit/Number (Number of Units * Price per Unit). If the total value is incorrect it will be replaced by the actual calculated total value.
     *
     */
    SEDTotalValue?: string;
    /**
     * Invoice Commodity Level Tax Collected Code for each shipment commodity line.Taxes paid Indicator is only applicable for shipments to Singapore. [TaxesPaid = 0 - No on Report], [TaxesPaid = 1 -Yes on Report], [TaxesPaid = empty - null on Report], [If TaxesPaid is not passed in input request = null on Report]
     */
    TaxesPaid?: string;
    ExcludeFromForm?: Product_ExcludeFromForm;
    PackingListInfo?: Product_PackingListInfo;
    EEIInformation?: Product_EEIInformation;
    DDSReferenceNumber?: Product_DDSReferenceNumber;
};

