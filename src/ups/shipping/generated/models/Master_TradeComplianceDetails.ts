/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Contains trade compliance details for the master shipment, such as invoice terms, export reasons, and declaration statements. It also includes additional comments or instructions for customs clearance.
 */
export type Master_TradeComplianceDetails = {
    /**
     * The terms of sale for the invoice.
     *
     * Valid values:
     *
     * - CFR =    Cost and Freight
     * - CIF =    Cost Insurance and Freight
     * - CIP =    Carriage and Insurance Paid
     * - CPT =    Carriage Paid To
     * - DAF =    Delivered at Frontier
     * - DAP =    Delivered at Place
     * - DAT =    Delivered at Terminal
     * - DDP =    Delivery Duty Paid
     * - DDU =    Delivery Duty Unpaid
     * - DEQ =    Delivered Ex Quay
     * - DES =    Delivered Ex Ship
     * - EXW =    Ex Works
     * - FAS =    Free Alongside Ship
     * - FCA =    Free Carrier
     * - FOB =    Free On Board
     *
     */
    TermsOfShipment?: Master_TradeComplianceDetails.TermsOfShipment;
    /**
     * The reason for export to go on the invoice.
     */
    ReasonForExport?: string;
    /**
     * Additional comments to be included on the invoice.
     */
    Comments?: string;
    /**
     * The type of declaration statement. Can be invoice or USMCA.
     *
     * Valid values:
     *
     * - Invoice =    Invoice declaration
     * - USMCA = USMCA declaration
     *
     */
    DeclarationStatement?: Master_TradeComplianceDetails.DeclarationStatement;
};
export namespace Master_TradeComplianceDetails {
    /**
     * The terms of sale for the invoice.
     *
     * Valid values:
     *
     * - CFR =    Cost and Freight
     * - CIF =    Cost Insurance and Freight
     * - CIP =    Carriage and Insurance Paid
     * - CPT =    Carriage Paid To
     * - DAF =    Delivered at Frontier
     * - DAP =    Delivered at Place
     * - DAT =    Delivered at Terminal
     * - DDP =    Delivery Duty Paid
     * - DDU =    Delivery Duty Unpaid
     * - DEQ =    Delivered Ex Quay
     * - DES =    Delivered Ex Ship
     * - EXW =    Ex Works
     * - FAS =    Free Alongside Ship
     * - FCA =    Free Carrier
     * - FOB =    Free On Board
     *
     */
    export enum TermsOfShipment {
        CFR = 'CFR',
        CIF = 'CIF',
        CIP = 'CIP',
        CPT = 'CPT',
        DAF = 'DAF',
        DAP = 'DAP',
        DAT = 'DAT',
        DDP = 'DDP',
        DDU = 'DDU',
        DEQ = 'DEQ',
        DES = 'DES',
        EXW = 'EXW',
        FAS = 'FAS',
        FCA = 'FCA',
        FOB = 'FOB',
    }
    /**
     * The type of declaration statement. Can be invoice or USMCA.
     *
     * Valid values:
     *
     * - Invoice =    Invoice declaration
     * - USMCA = USMCA declaration
     *
     */
    export enum DeclarationStatement {
        INVOICE = 'Invoice',
        USMCA = 'USMCA',
    }
}

