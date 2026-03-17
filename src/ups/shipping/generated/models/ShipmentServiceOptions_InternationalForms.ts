/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InternationalForms_BlanketPeriod } from './InternationalForms_BlanketPeriod';
import type { InternationalForms_CN22Form } from './InternationalForms_CN22Form';
import type { InternationalForms_Contacts } from './InternationalForms_Contacts';
import type { InternationalForms_Discount } from './InternationalForms_Discount';
import type { InternationalForms_EEIFilingOption } from './InternationalForms_EEIFilingOption';
import type { InternationalForms_FreightCharges } from './InternationalForms_FreightCharges';
import type { InternationalForms_InsuranceCharges } from './InternationalForms_InsuranceCharges';
import type { InternationalForms_OtherCharges } from './InternationalForms_OtherCharges';
import type { InternationalForms_Product } from './InternationalForms_Product';
import type { InternationalForms_UPSPremiumCareForm } from './InternationalForms_UPSPremiumCareForm';
import type { InternationalForms_UserCreatedForm } from './InternationalForms_UserCreatedForm';
/**
 * International Forms information. This is applicable to Trade Direct SMALLPACKAGE International Child movements and not applicable to Trade Direct Master or Trade Direct LTL Child movements.
 */
export type ShipmentServiceOptions_InternationalForms = {
    /**
     * Indicates the name of the International Form requested.
     *
     * Valid values:
     * - 01 - Invoice
     * - 03 - CO
     * - 04 - USMCA
     * - 05 - Partial Invoice
     * - 06 - Packinglist
     * - 07 - Customer Generated Forms
     * - 08 – Air Freight Packing List
     * - 09 - CN22 Form
     * - 10 – UPS Premium Care Form
     * - 11 - EEI
     *
     * For shipment with return service, 05 or 10 are the only valid values.
     *
     * Note: 01 and 05 are mutually exclusive and 05 are only valid for return shipments only.
     *
     */
    FormType: Array<string>;
    UserCreatedForm?: InternationalForms_UserCreatedForm;
    UPSPremiumCareForm?: InternationalForms_UPSPremiumCareForm;
    CN22Form?: InternationalForms_CN22Form;
    /**
     * Presence of the indicator means user will supply additional document, such as EEI, USMCA or CO.  This indicator should be set when the shipper intends to utilize UPS paperless invoice functionality AND the shipper has SELF-PREPARED other International Forms (EEI, CO, USMCA) to accompany the shipment.
     * It is evaluated only when:
     * 1. Account is paperless enabled.
     * 2. Movement requires an invoice.
     * 3. Destination country or territory accepts paperless invoice.
     * 4. Invoice data is supplied by the client and the data passes validation.
     */
    AdditionalDocumentIndicator?: string;
    /**
     * Contains description text which identifies the group of International forms. This element does not appear on the forms.
     */
    FormGroupIdName?: string;
    EEIFilingOption?: InternationalForms_EEIFilingOption;
    Contacts?: InternationalForms_Contacts;
    Product: Array<InternationalForms_Product>;
    /**
     * Commercial Invoice number assigned by the exporter.  Applies to Invoice and Partial Invoice forms only. Required for Invoice forms and optional for Partial Invoice.
     */
    InvoiceNumber?: string;
    /**
     * Date when the Invoice is created. Ideally this is the same as the ship date.  Applies to Invoice and Partial Invoice forms only. Required for Invoice forms and optional for Partial Invoice. Required for Invoice form for forward shipments. For shipment with return service, the user input will be ignored, and the field will be blank on the invoice. Format is yyyyMMdd.
     */
    InvoiceDate?: string;
    /**
     * The customer's order reference number.  Applies to Invoice and Partial Invoice forms only.
     */
    PurchaseOrderNumber?: string;
    /**
     * Indicates the rights to the seller from the buyer. Also, it refers to Terms of Sale.  Applies to Invoice and Partial Invoice forms only.
     *
     * Valid values:
     * CFR: Cost and Freight
     * CIF: Cost Insurance and Freight
     * CIP: Carriage and Insurance Paid
     * CPT: Carriage Paid To
     * DAF: Delivered at Frontier
     * DDP: Delivery Duty Paid
     * DAP: Delivery at Place
     * DEQ: Delivered Ex Quay
     * DES: Delivered Ex Ship
     * EXW: Ex Works
     * FAS: Free Alongside Ship
     * FCA: Free Carrier
     * FOB: Free On Board
     */
    TermsOfShipment?: string;
    /**
     * A reason to export the current international shipment.
     * Valid values: SALE, GIFT, SAMPLE, RETURN, REPAIR, INTERCOMPANYDATA, Any other reason.  Applies to Invoice and Partial Invoice forms only. Required for Invoice forms and Optional for Partial Invoice. No validation.
     */
    ReasonForExport?: string;
    /**
     * Any extra information about the current shipment.  Applies to Invoice and Partial Invoice forms only.
     */
    Comments?: string;
    /**
     * This is the legal explanation, used by Customs, for the delivering of this shipment. It must be identical to the set of declarations actually used by Customs. Examples of declarations that might be entered in this field are: I hereby certify that the goods covered by this shipment qualify as originating goods for purposes of preferential tariff treatment under the USMCA. I hereby certify that the information on this invoice is true and correct and the contents and value of this shipment is as stated above.  EEA statement:  The exporter of the products covered by this document declares that except where otherwise clearly indicated these products are of EEA preferential origin.  Applies to Invoice and Partial Invoice forms only. On the invoice for return shipment, the verbiage is as follows (user input is ignored): The exporter of the products covered by this document declares that except where otherwise clearly indicated these products are of EEA preferential origin
     */
    DeclarationStatement?: string;
    Discount?: InternationalForms_Discount;
    FreightCharges?: InternationalForms_FreightCharges;
    InsuranceCharges?: InternationalForms_InsuranceCharges;
    OtherCharges?: InternationalForms_OtherCharges;
    /**
     * Currency code for all the monetary values of the Invoice form.  Applies to Invoice and Partial Invoice forms only.
     */
    CurrencyCode?: string;
    BlanketPeriod?: InternationalForms_BlanketPeriod;
    /**
     * The date the goods will be exiting the country or territory.  Applies to CO and EEI forms only. Required for CO and EEI forms. Format is yyyyMMdd.
     */
    ExportDate?: string;
    /**
     * The name of the carrier that is exporting the shipment. The vessels flag number should also be entered, if the carrier is a vessel.
     *
     * If value is empty, it will be set to default value as 'UPS' for EEI forms.  Applies to CO and EEI forms only. Required for CO forms.
     *
     */
    ExportingCarrier?: string;
    /**
     * The four-character Standard Carrier Alpha Code (SCAC) for vessel, rail, and truck shipments. For air shipment, enter the two or three character International Air Transport Association (IATA) code.  Applies to EEI forms only. No Validations.
     */
    CarrierID?: string;
    /**
     * The two-character In Bond Code.  Applies to EEI forms only. Required for EEI forms. Valid values for EEI are: 70: Not in bond; 67: IE from a FTZ; 68: T&E from a FTZ.
     */
    InBondCode?: string;
    /**
     * The Import Entry Number when the export transaction is used as proof of export for import transactions (examples: In Bond, Temporary Import Bond or Drawbacks).  Applies to EEI forms only. Conditionally Required for EEI forms when In bond code value is other than 70 (Not In Bond)
     */
    EntryNumber?: string;
    /**
     * Contains one of the following:  The two-digit U.S. Postal Service abbreviation for the state from which the goods were shipped to the port of export. The state that is the source for the good with the highest value. The state of consolidation. The Foreign Trade Zone number of the zone from where the exports are leaving.  If the goods were shipped from Puerto Rico, enter PR.  Applies to EEI forms only. Required for EEI.
     */
    PointOfOrigin?: string;
    /**
     * Valid values are : S (for state postal code abbreviation) , F : FTZ Identifier  Applies EEI forms only. Required for EEI form.
     */
    PointOfOriginType?: string;
    /**
     * Mode of transport by which the goods are exported. Valid values: Air, AirContainerized, Auto, FixedTransportInstallations, Mail, PassengerHandcarried, Pedestrian, Rail, Rail, Containerized, RoadOther, SeaBarge, SeaContainerized, SeaNoncontainerized, Truck, TruckContainerized.  Applies to EEI forms only.  Required for EEI.  Only allowed values can be entered. Only 10 Characters can appear on the form. Anything greater than 10 characters will be truncated on the form.
     */
    ModeOfTransport?: string;
    /**
     * Should be one of the following-Overland: The U.S. Customs port where the carrier crosses the U.S. border, Vessel and Air: The U.S. Customs port where the goods are loaded on the carrier to be exported from the U.S., Postal: The U.S. Postal Office from where the goods are mailed.  Applies to EEI forms only. No validation is performed.
     */
    PortOfExport?: string;
    /**
     * The country or territory and the port where the goods will be unloaded from the exporting carrier. For vessel and air shipments only.  Applies to EEI forms only. No validation is performed.
     */
    PortOfUnloading?: string;
    /**
     * Pier where goods are loaded. For vessel shipments only.  Applies to EEI forms only. No validation is performed.
     */
    LoadingPier?: string;
    /**
     * Information about parties to transaction. Use Related, if the parties to the transaction are related. A related party is an export from a U.S. businessperson or business to a foreign business or from a U.S. business to a foreign person or business where the person has at least 10 percent of the voting shares of the business during the fiscal year. If unincorporated, then an equivalent interest in the business.  Applies to EEI forms only.
     *
     * Valid values:
     * - R - Related
     * - N - Non-related.
     *
     * Parties to transaction is required if EEIFilingOption Code is 3 and if valid UPSFiled POA Code present in request.
     *
     * Default will be set to N - Non-related if invalid code present with length of one.
     *
     */
    PartiesToTransaction?: string;
    /**
     * If Present, indicates that it is a routed export transaction. A routed export transaction is one, where the foreign principal party in interest authorizes a U.S. forwarding (or other) agent to export the merchandise outside the U.S.  Applies to EEI forms only.
     */
    RoutedExportTransactionIndicator?: string;
    /**
     * If present indicates that the goods are containerized. This applies to vessel shipments only.  Applies to EEI forms only.
     */
    ContainerizedIndicator?: string;
    /**
     * The application will automatically provide a copy of the invoice or USMCA with each response regardless of whether the user has enabled Paperless account. The user now has the option to print or ignore the copy provided.
     */
    OverridePaperlessIndicator?: string;
    /**
     * Text for the shipper to add additional information.  Forward shipment only.
     */
    ShipperMemo?: string;
    /**
     * This is an empty tag. Presence of the indicator for EEI form means shipment contains hazardous material.
     */
    HazardousMaterialsIndicator?: string;
};

