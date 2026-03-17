/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipmentResults_BillingWeight } from './ShipmentResults_BillingWeight';
import type { ShipmentResults_CODTurnInPage } from './ShipmentResults_CODTurnInPage';
import type { ShipmentResults_ControlLogReceipt } from './ShipmentResults_ControlLogReceipt';
import type { ShipmentResults_Disclaimer } from './ShipmentResults_Disclaimer';
import type { ShipmentResults_Form } from './ShipmentResults_Form';
import type { ShipmentResults_FRSShipmentData } from './ShipmentResults_FRSShipmentData';
import type { ShipmentResults_HighValueReport } from './ShipmentResults_HighValueReport';
import type { ShipmentResults_NegotiatedRateCharges } from './ShipmentResults_NegotiatedRateCharges';
import type { ShipmentResults_PackageResults } from './ShipmentResults_PackageResults';
import type { ShipmentResults_PalletLabel } from './ShipmentResults_PalletLabel';
import type { ShipmentResults_ShipmentCharges } from './ShipmentResults_ShipmentCharges';
/**
 * Shipment Results container.
 */
export type ShipmentResponse_ShipmentResults = {
    /**
     * Disclaimer would be used to provide more information to shipper regarding the processed shipment. This would be used to notify shipper about possible taxes and duties that might have been added or might apply to the shipment. This field would be returned only if TaxInformationIndicator is present in a request.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    Disclaimer?: Array<ShipmentResults_Disclaimer>;
    ShipmentCharges?: ShipmentResults_ShipmentCharges;
    NegotiatedRateCharges?: ShipmentResults_NegotiatedRateCharges;
    FRSShipmentData?: ShipmentResults_FRSShipmentData;
    /**
     * RatingMethod is to indicate whether the Shipment was rated as shipment level or package level. This information will be returned only if RatingMethodRequestedIndicator is present in the request.  Valid values:
     * 01 = Shipment level
     * 02 = Package level
     */
    RatingMethod?: string;
    /**
     * BillableWeightCalculationMethod is to indicate whether the billable weight calculation method utilized was - the package level or shipment level. This information will be returned only if RatingMethodRequestedIndicator is present in the request.  Valid values:
     * 01 = Shipment Billable Weight
     * 02 = Package Billable Weight
     */
    BillableWeightCalculationMethod?: string;
    BillingWeight: ShipmentResults_BillingWeight;
    /**
     * Returned UPS shipment ID number.1Z Number of the first package in the shipment.
     */
    ShipmentIdentificationNumber?: string;
    /**
     * MIDualReturnShipmentKey is unique key required to process Mail Innovations Dual Return Shipment.
     *
     * The unique identifier (key) would be returned in response of first phase of Mail Innovations Dual Return Shipments.
     *
     * This unique identifier (key) would be part of request for second phase of Mail Innovations Dual Return Shipments and would be played back in response for second phase of Mail Innovations Dual Return Shipment.  If the shipment is a Package return shipment, the package tracking number will be concatenated with the system time (in the format YYYY-MM-DDHH.MM.SS.NNN) and followed by service code.
     *
     * If the shipment is an MI Returns shipment, the Mail Manifest ID (MMI) will be concatenated with the system time.
     */
    MIDualReturnShipmentKey?: string;
    /**
     * Bar Code Image will be returned as Base 64 encoded graphic image. Bar Code Image will be returned if BarCodeImageIndicator or BarCodeAndLabelIndicator is present.
     */
    BarCodeImage?: string;
    /**
     * Returned Package Information.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    PackageResults?: Array<ShipmentResults_PackageResults>;
    /**
     * Container for the High Value reports when forward shipments have declared value between $999 and $50,000 USD. \nTwo copies of high value report needs to be pointed out.
     *
     * **NOTE:** For versions >= v2409, this element will always be returned as an array. For requests using versions < v2409, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    ControlLogReceipt?: Array<ShipmentResults_ControlLogReceipt>;
    Form?: ShipmentResults_Form;
    CODTurnInPage?: ShipmentResults_CODTurnInPage;
    HighValueReport?: ShipmentResults_HighValueReport;
    /**
     * URL will point to a page wherein label, receipt and other documents, if applicable, such as HighValueReport, CustomsInvoice and ImportControl instructions can be requested. LabelURL is returned only if the LabelLinksIndicator is requested for following shipments:
     * Print/Electronic ImportControl shipment
     * Print/Electronic Return shipment.
     * Forward shipment except for Mail Innovations Forward.
     */
    LabelURL?: string;
    /**
     * URL will point to a page wherein label, receipt and other documents, if applicable, such as HighValueReport, CustomsInvoice and ImportControl instructions can be requested. LocalLanguageLabelURL is returned only if the LabelLinksIndicator is requested for following shipments:
     * Print/Electronic ImportControl shipment
     * Print/Electronic Return shipment.
     * Forward shipment except for Mail Innovations Forward.  Not returned if LabelLinksIndicator is requested with Locale element.
     */
    LocalLanguageLabelURL?: string;
    /**
     * URL will point to a page wherein label, receipt and other documents, if applicable, such as HighValueReport, CustomsInvoice and ImportControl instructions can be requested. ReceiptURL is returned only if the LabelLinksIndicator is requested for following shipments:
     * Print/Electronic ImportControl shipment
     * Print/Electronic Return shipment.
     */
    ReceiptURL?: string;
    /**
     * URL will point to a page wherein label, receipt and other documents, if applicable, such as HighValueReport, CustomsInvoice and ImportControl instructions can be requested. LocalLanguageReceiptURL is returned only if the LabelLinksIndicator is requested for following shipments:
     * Print/Electronic ImportControl shipment
     * Print/Electronic Return shipment.   Not returned if LabelLinksIndicator is requested with Locale element.
     */
    LocalLanguageReceiptURL?: string;
    /**
     * Dangerous Good Paper Image in pdf format. One multipage PDF document will be returned that will contain all required Dangrous Goods shipping paper copies for all Dangerous Goods packages. Only returned when DGSignatoryInfo is present.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    DGPaperImage?: Array<string>;
    /**
     * Master Carton ID. MasterCartonID will be return if MasterCartonIndicator is present in request.
     */
    MasterCartonID?: string;
    /**
     * Informational only
     */
    RoarRatedIndicator?: string;
    /**
     * Global Consolidation Carton Number
     */
    GCCN?: string;
    /**
     * The unique shipment identifier (USI) is used to create Master, LTL and Child shipments. Used for Freight shipments.
     */
    USI?: string;
    /**
     * A message indicating the status or result of the operation.
     */
    Message?: string;
    /**
     * The sub PRO number associated with the LTL shipment.
     */
    SubProNumber?: string;
    PalletLabel?: ShipmentResults_PalletLabel;
    /**
     * Base64-encoded image data.
     */
    BillOfLading?: string;
};

