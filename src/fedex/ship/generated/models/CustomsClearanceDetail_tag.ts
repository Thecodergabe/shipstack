/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BrokerDetail } from './BrokerDetail';
import type { CommercialInvoice } from './CommercialInvoice';
import type { Commodity_1 } from './Commodity_1';
import type { CustomsDeclarationStatementDetail } from './CustomsDeclarationStatementDetail';
import type { CustomsOptionDetail } from './CustomsOptionDetail';
import type { ExportDetail } from './ExportDetail';
import type { Money } from './Money';
import type { Party_1 } from './Party_1';
import type { Payment_1_tag } from './Payment_1_tag';
import type { RecipientCustomsId } from './RecipientCustomsId';
/**
 * These are customs clearance details. Required for International and intra-country Shipments.
 */
export type CustomsClearanceDetail_tag = {
    /**
     * These are the regulatory controls applicable to the shipment.<br> Example:USMCA,FOOD_OR_PERISHABLE
     */
    regulatoryControls?: Array<'FOOD_OR_PERISHABLE' | 'USMCA' | 'NOT_APPLICABLE_FOR_LOW_VALUE_CUSTOMS_EXCEPTIONS' | 'NOT_IN_FREE_CIRCULATION'>;
    /**
     * Specify broker information. Use this option only if you are using Broker Select Option for your shipment. A country code must be specified in addition to one of the following address items: postal code, city, or location id.
     */
    brokers?: Array<BrokerDetail>;
    commercialInvoice: CommercialInvoice;
    /**
     * Specify the risk owner for the Freight shipment.This element is only mandatory or valid for Intra India shipments.<br>Example: OWN_RISK
     */
    freightOnValue?: CustomsClearanceDetail_tag.freightOnValue;
    dutiesPayment?: Payment_1_tag;
    /**
     * Indicates the details about the dutiable packages. Maximum upto 999 commodities per shipment.
     */
    commodities: Array<Commodity_1>;
    /**
     * Defaults to false. Only used for international Express requests to indicate if just documents are being shipped or not. A valude of DERIVED will cause the value to be determined by PMIS based on the specified commodities information<br>Example: false
     */
    isDocumentOnly?: boolean;
    recipientCustomsId?: RecipientCustomsId;
    customsOption?: CustomsOptionDetail;
    /**
     * The descriptive data for the importer of Record for the shipment and their physical address, contact and account number information.
     */
    importerOfRecord?: Party_1;
    /**
     * This is the locale for generated document.<br>Example: en_US<br><a onclick='loadDocReference("locales")'>click here to see Locales</a><br>Note: If the locale is left blank or an invalid locale is entered, an error message is returned in response.
     */
    generatedDocumentLocale?: string;
    exportDetail?: ExportDetail;
    /**
     * This is the total customs value.
     */
    totalCustomsValue?: Money;
    /**
     * Specify if the transacting parties are related.
     */
    partiesToTransactionAreRelated?: boolean;
    declarationStatementDetail?: CustomsDeclarationStatementDetail;
    /**
     * Specify insurance charges if applicable. <br><i>Note: FedEx does not provide insurance of any kind.</i>
     */
    insuranceCharge?: Money;
};
export namespace CustomsClearanceDetail_tag {
    /**
     * Specify the risk owner for the Freight shipment.This element is only mandatory or valid for Intra India shipments.<br>Example: OWN_RISK
     */
    export enum freightOnValue {
        CARRIER_RISK = 'CARRIER_RISK',
        OWN_RISK = 'OWN_RISK',
    }
}

