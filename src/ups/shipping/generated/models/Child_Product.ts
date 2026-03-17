/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Product_EEIInformation } from './Product_EEIInformation';
import type { Product_ExcludeFromForm } from './Product_ExcludeFromForm';
import type { Product_NetCostDateRange } from './Product_NetCostDateRange';
import type { Product_PackingListInfo } from './Product_PackingListInfo';
import type { Product_ProductWeight } from './Product_ProductWeight';
import type { Product_ScheduleB } from './Product_ScheduleB';
/**
 * This variable represents the product details. It is used to provide information about the product being shipped.
 */
export type Child_Product = {
    /**
     * Description of the product being shipped.
     */
    Description: string;
    /**
     * Price per unit of the product being shipped.
     */
    UnitPrice: string;
    /**
     * Number of units of the product being shipped.
     */
    NumberOfUnits: string;
    /**
     * Product number of the product being shipped.
     */
    ProductNumber: string;
    /**
     * Country code of the product being shipped.
     */
    CountryOriginCode: string;
    /**
     * Unit of Measure for the product being shipped.
     *
     * Valid values are :
     * - BA = Barrel
     * - BE = Bundle
     * - BG = Bag
     * - BH =    Bunch
     * - BOX = Box
     * - BT = Bolt
     * - LB =    Pound
     * - LBS = Pounds
     * - L = Liter
     * - M = Meter
     * - NMB = Number
     * - PA = Packet
     * - BU = Butt
     * - CI =    Canister
     * - CM =    Centimeter
     * - CON = Container
     * - CR = Crate
     * - CS =    Case
     * - CT =    Carton
     * - CY =    Cylinder
     * - DOZ = Dozen
     * - EA = Each
     * - EN =    Envelope
     * - FT =    Feet
     * - KG =    Kilogram
     * - KGS = Kilograms
     * - PAL = Pallet
     * - PC = Piece
     * - PCS = Pieces
     * - PF = Proof Liters
     * - OTH = Other
     * - PKG = Package
     * - PR = Pair
     * - PRS = Pairs
     * - RL = Roll
     * - SET = Set
     * - SME = Square Meters
     * - SYD = Square Yards
     * - TU =    Tube
     * - YD =    Yard
     *
     */
    UnitOfMeasure: Child_Product.UnitOfMeasure;
    /**
     * 6-to-15-alphanumeric commodity code. Customs uses this code to determine what duties should be assessed on the commodity.  Applies to Invoice, Partial Invoice and USMCA. Required for USMCA and optional for Partial Invoice. Should be at least 6 alphanumeric. For USMCA: For each good described in Description of Goods field, identify the H.S. tariff classification to six digits. If the good is subject to a specific rule of origin in Annex 401 that requires eight digits, identify to eight digits, using the H.S. tariff classification of the country or territory into whose territory the good is imported.
     */
    CommodityCode?: string;
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
};
export namespace Child_Product {
    /**
     * Unit of Measure for the product being shipped.
     *
     * Valid values are :
     * - BA = Barrel
     * - BE = Bundle
     * - BG = Bag
     * - BH =    Bunch
     * - BOX = Box
     * - BT = Bolt
     * - LB =    Pound
     * - LBS = Pounds
     * - L = Liter
     * - M = Meter
     * - NMB = Number
     * - PA = Packet
     * - BU = Butt
     * - CI =    Canister
     * - CM =    Centimeter
     * - CON = Container
     * - CR = Crate
     * - CS =    Case
     * - CT =    Carton
     * - CY =    Cylinder
     * - DOZ = Dozen
     * - EA = Each
     * - EN =    Envelope
     * - FT =    Feet
     * - KG =    Kilogram
     * - KGS = Kilograms
     * - PAL = Pallet
     * - PC = Piece
     * - PCS = Pieces
     * - PF = Proof Liters
     * - OTH = Other
     * - PKG = Package
     * - PR = Pair
     * - PRS = Pairs
     * - RL = Roll
     * - SET = Set
     * - SME = Square Meters
     * - SYD = Square Yards
     * - TU =    Tube
     * - YD =    Yard
     *
     */
    export enum UnitOfMeasure {
        BA = 'BA',
        BE = 'BE',
        BG = 'BG',
        BH = 'BH',
        BOX = 'BOX',
        BT = 'BT',
        LB = 'LB',
        LBS = 'LBS',
        L = 'L',
        M = 'M',
        NMB = 'NMB',
        PA = 'PA',
        BU = 'BU',
        CI = 'CI',
        CM = 'CM',
        CON = 'CON',
        CR = 'CR',
        CS = 'CS',
        CT = 'CT',
        CY = 'CY',
        DOZ = 'DOZ',
        EA = 'EA',
        EN = 'EN',
        FT = 'FT',
        KG = 'KG',
        KGS = 'KGS',
        PAL = 'PAL',
        PC = 'PC',
        PCS = 'PCS',
        PF = 'PF',
        OTH = 'OTH',
        PKG = 'PKG',
        PR = 'PR',
        PRS = 'PRS',
        RL = 'RL',
        SET = 'SET',
        SME = 'SME',
        SYD = 'SYD',
        TU = 'TU',
        YD = 'YD',
    }
}

