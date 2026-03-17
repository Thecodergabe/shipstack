/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Shipment_AlternateDeliveryAddress } from './Shipment_AlternateDeliveryAddress';
import type { Shipment_DGSignatoryInfo } from './Shipment_DGSignatoryInfo';
import type { Shipment_FreightShipmentInformation } from './Shipment_FreightShipmentInformation';
import type { Shipment_FRSPaymentInformation } from './Shipment_FRSPaymentInformation';
import type { Shipment_GlobalTaxInformation } from './Shipment_GlobalTaxInformation';
import type { Shipment_InvoiceLineTotal } from './Shipment_InvoiceLineTotal';
import type { Shipment_Package } from './Shipment_Package';
import type { Shipment_PaymentInformation } from './Shipment_PaymentInformation';
import type { Shipment_PromotionalDiscountInformation } from './Shipment_PromotionalDiscountInformation';
import type { Shipment_ReferenceNumber } from './Shipment_ReferenceNumber';
import type { Shipment_ReturnService } from './Shipment_ReturnService';
import type { Shipment_Service } from './Shipment_Service';
import type { Shipment_ShipFrom } from './Shipment_ShipFrom';
import type { Shipment_ShipmentIndicationType } from './Shipment_ShipmentIndicationType';
import type { Shipment_ShipmentRatingOptions } from './Shipment_ShipmentRatingOptions';
import type { Shipment_ShipmentServiceOptions } from './Shipment_ShipmentServiceOptions';
import type { Shipment_Shipper } from './Shipment_Shipper';
import type { Shipment_ShipTo } from './Shipment_ShipTo';
import type { Shipment_TradeDirect } from './Shipment_TradeDirect';
import type { Shipment_WorldEase } from './Shipment_WorldEase';
/**
 * Shipment Container
 */
export type ShipmentRequest_Shipment = {
    /**
     * The Description of Goods for the shipment. Applies to international and domestic shipments.
     *
     * Provide a detailed description of items being shipped for documents and non-documents.
     *
     * Examples: "annual reports" and "9 mm steel screws".  Required if all of the listed conditions are true:
     * ShipFrom and ShipTo countries or territories are not the same; The packaging type is not UPS Letter; The ShipFrom and or ShipTo countries or territories are not in the European Union or the ShipFrom and ShipTo countries or territories are both in the European Union and the shipments service type is not UPS Standard.
     */
    Description?: string;
    ReturnService?: Shipment_ReturnService;
    /**
     * Indicates a shipment contains written, typed, or printed communication of no commercial value.
     *
     * If DocumentsOnly is not specified then it implies that the shipment contains non documents or documents of commercial value.
     *
     * Default is a shipment contains non- documents or documents of commercial value.  This is an empty tag, any value inside is ignored.
     *
     * Valid only for shipments with different origin and destination countries or territories. The origin country or territory is not US, and the destination country or territory is not CA, PR or MX.
     */
    DocumentsOnlyIndicator?: string;
    Shipper: Shipment_Shipper;
    ShipTo: Shipment_ShipTo;
    AlternateDeliveryAddress?: Shipment_AlternateDeliveryAddress;
    ShipFrom?: Shipment_ShipFrom;
    PaymentInformation?: Shipment_PaymentInformation;
    FRSPaymentInformation?: Shipment_FRSPaymentInformation;
    GlobalTaxInformation?: Shipment_GlobalTaxInformation;
    WorldEase?: Shipment_WorldEase;
    FreightShipmentInformation?: Shipment_FreightShipmentInformation;
    /**
     * Goods Not In Free Circulation indicator.  This is an empty tag, any value inside is ignored. This indicator is invalid for a package type of UPS Letter and DocumentsOnly.
     */
    GoodsNotInFreeCirculationIndicator?: string;
    PromotionalDiscountInformation?: Shipment_PromotionalDiscountInformation;
    DGSignatoryInfo?: Shipment_DGSignatoryInfo;
    ShipmentRatingOptions?: Shipment_ShipmentRatingOptions;
    /**
     * Movement Reference Number (MRN) information.  Must contain alphanumeric characters only. Must be a length of 18 characters. The 3rd and 4th Characters must be the Shipper country or territory ISO Code.
     */
    MovementReferenceNumber?: string;
    ReferenceNumber?: Array<Shipment_ReferenceNumber>;
    Service: Shipment_Service;
    InvoiceLineTotal?: Shipment_InvoiceLineTotal;
    /**
     * Code that identifies the risk of the Shipment entering the European Union (EU).
     * Values: 01 = AT RISK of Entering the EU
     * 02 = NOT AT RISK of Entering the EU
     * 03 = RISK UNKNOWN of Entering the EU
     */
    ShipmentRiskEnteringEU?: string;
    /**
     * Total number of pieces in all pallets in a UPS Worldwide Express Freight Shipment.  It is required for UPS Worldwide Express Freight and UPS Worldwide Express Freight Midday Shipment. Valid values are 1 to 99999.
     */
    NumOfPiecesInShipment?: string;
    /**
     * USPS Endorsement.
     * Valid values:
     * 1 = Return Service Requested
     * 2 = Forwarding Service Requested
     * 3 = Address Service Requested
     * 4 = Change Service Requested and
     * 5 = No Service Selected.
     * Note: For International Mail Innovations shipments use No Service Selected. International Mail Innovations shipments are applicable for Priority Mail Innovations and Mail Innovations Economy Mail Innovations services only.  Required for Mail Innovations forward shipments.
     */
    USPSEndorsement?: string;
    /**
     * Indicates single label with both MI label and CN22 form.  International CN22 form is required.
     */
    MILabelCN22Indicator?: string;
    /**
     * A component encoded on the barcode of the Mail Innovations label.   Valid values:
     * IR = Irregular
     * MA = Machineable
     * SubClass is only required if the customer's contract have them subclass the package not UPS.
     */
    SubClassification?: string;
    /**
     * Customer assigned identifier for report and billing summarization displays to the right of the Cost Center title.  Required for Mail Innovations Return shipments. It is shown on the bottom of the shipping label as reference 2.
     *
     * Cost Center length is alphanumeric with a max length of 30 for Mail Innovations forward shipments.
     *
     * Cost Center length is numeric with a max length of 4 for Mail Innovations Return shipments.
     */
    CostCenter?: string;
    /**
     * Presence/Absence indicator. Presence of this indicator means that the customer is requesting for the CostCenter field to be barcoded at the bottom of the label.
     */
    CostCenterBarcodeIndicator?: string;
    /**
     * Customer-assigned unique piece identifier that returns visibility events.  Required only for Mail Innovations forward shipments. Alpha numeric values only. It is shown on the bottom of the shipping label as reference 1.
     */
    PackageID?: string;
    /**
     * Presence/Absence indicator. Presence of this indicator means that the customer is requesting for the PackageID field to be barcoded at the bottom of the label.
     */
    PackageIDBarcodeIndicator?: string;
    /**
     * Mail classification defined by the USPS.   Valid values:
     * 1 = Balloon
     * 2 = Oversize
     * 3 = Not Applicable
     */
    IrregularIndicator?: string;
    ShipmentIndicationType?: Array<Shipment_ShipmentIndicationType>;
    /**
     * MIDualReturnShipmentKey is unique key required to process Mail Innovations Dual Return Shipment.
     *
     * The unique identifier (key) would be returned in response of first phase of Mail Innovations Dual Return Shipments.
     *
     * This unique identifier (key) would be part of request for second phase of Mail Innovations Dual Return Shipments.
     *
     * Format:
     * For Package return shipments, the package tracking number is concatenated with the system time (YYYY-MM-DDHH.MM.SS.NNN), followed by service code.
     *
     * For MI Return shipments, the Mail Manifest ID (MMI) is concatenated with the system time.  The unique identifier (key) is required to link the package and the Mail Innovations portion of Dual Return shipment.
     *
     * If unique identifier (key) is empty in the request for UPS Mail Innovations Return Service, the request will be treated as the first phase of the Mail Innovations Dual Returns Request.
     *
     * If the MIDualReturnShipmentIndicator is present with empty or null MIDualReturnShipmentKey in UPS Package Return Shipment, the request will be treated as the first phase of Dual MI Return Label Shipment.
     *
     * This field would be ignored if MIDualReturnShipmentIndicator is not present in UPS Package Return Shipment request.
     */
    MIDualReturnShipmentKey?: string;
    /**
     * MIDualReturnShipmentIndicator is an indicator to identify a Package Shipment is part of UPS Mail Innovations Dual Label Shipment.
     *
     * Its presence means Package Shipment is part of UPS Mail Innovations Dual Label shipment.  If the indicator is present in Package Shipment request, shipment would be considered as part of a Dual Mail Innovations Returns.
     *
     * This indicator is not valid with UPS Mail Innovations Returns Service code.
     */
    MIDualReturnShipmentIndicator?: string;
    /**
     * Presence/Absence Indicator. Any value inside is ignored. RatingMethodRequestedIndicator is an indicator.
     * If present, Billable Weight Calculation method information and Rating Method information would be returned in response.
     */
    RatingMethodRequestedIndicator?: string;
    /**
     * Presence/Absence Indicator. Any value inside is ignored. TaxInformationIndicator is an indicator. If present, any taxes that may be applicable to a shipment would be returned in response. If this indicator is requested with NegotiatedRatesIndicator, Tax related information, if applicable, would be returned only for Negotiated Rates and not for Published Rates. The Tax related information includes any type of Taxes, corresponding Monetary Values, Total Charges with Taxes and disclaimers (if applicable) would be returned in response.
     */
    TaxInformationIndicator?: string;
    ShipmentServiceOptions?: Shipment_ShipmentServiceOptions;
    /**
     * Represents 5 character ISO Locale that allows the user to request Reference Number Code on Label, Label instructions and Receipt instructions (if applicable) in desired language.
     * Locale is specified by the combination of language code and country or territory code - 2 character language code and 2 character country or territory code seperated by an underscore ('_') character.  If Locale element is requested along with LabelLinksIndicator, the URL to retrieve Label and Receipts (if applicable) will be returned in the requested Locale. Please note only LabelURL and ReceiptURL (if applicable) will be returned. LocalLanguageLabelURL and LocalLanguageReceiptURL will not be returned if Locale element is present in request.
     * Queen's English (en_GB) is the default
     */
    Locale?: string;
    /**
     * Shipment Value Threshold Code. 01 = Shipment value is below or equals to threshold value
     * 02 = Shipment value is above threshold value.     NA = Not Applicable
     */
    ShipmentValueThresholdCode?: string;
    /**
     * Shipment Value for ShipperType. 01 = Business 02 = Consumer/Individual  NA = Not Applicable
     * Required for EU Inbound Shipments
     */
    ShipperType?: string;
    /**
     * Shipment Value for ConsigneeType. 01 = Business 02 = Consumer/Individual  NA = Not Applicable
     * Required for EU Inbound Shipments
     */
    ConsigneeType?: string;
    /**
     * Master Carton ID. If Economy Service (17 or 72) : Economy Shipment will be associated with given Master Carton ID. If Non-Economy Service: Master Carton Shipment will be created for given Master Carton ID.
     */
    MasterCartonID?: string;
    /**
     * Master Carton Indicator. Presence of the indicator means Master Carton ID will be created and returned to client.
     * This is an empty tag, any value inside is ignored.                                                                  MasterCartonIndicator is only valid with Econmoy Shipment (Service Code 17 or 72). Will be ignored if master carton id present.
     */
    MasterCartonIndicator?: string;
    /**
     * User can send up to 7 days in the future with current date as day zero. Format: YYYYMMDD
     */
    ShipmentDate?: string;
    Package: Array<Shipment_Package>;
    /**
     * This field is used to pass the Quote ID generated from the Global Checkout API. This is mandatory to validate your Global Checkout Guaranteed Landed Cost.
     */
    QuoteID?: string;
    TradeDirect?: Shipment_TradeDirect;
};

