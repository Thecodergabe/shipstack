/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransitTimeCommodity_unitPrice } from './TransitTimeCommodity_unitPrice';
import type { TransitTimeRequestedShipment_shipmentSpecialServices_shipmentDryIceDetail_totalWeight } from './TransitTimeRequestedShipment_shipmentSpecialServices_shipmentDryIceDetail_totalWeight';
export type TransitTimeCommodity = {
    /**
     * Indicate the description of the dutiable packages.<br> Maximum Length is 450. <br> Example: DOCUMENTS <br><a onclick='loadDocReference("vaguecommoditydescriptions")'>Click here to see Vague commodity descriptions</a>
     */
    description: string;
    /**
     * Specify the total number of units (using quantityUnits as the unit of measure) of this commodity present in the shipment. This element is used to estimate duties and taxes. <br>Example: 1
     */
    quantity?: number;
    unitPrice?: TransitTimeCommodity_unitPrice;
    weight?: TransitTimeRequestedShipment_shipmentSpecialServices_shipmentDryIceDetail_totalWeight;
    customsValue: TransitTimeCommodity_unitPrice;
    /**
     * Specifies the number of pieces for this commodity.<br>Example: 10
     */
    numberOfPieces: number;
    /**
     * This is a manufacturing country. Maximum field Length is 4.<br>Example: IN
     */
    countryOfManufacture?: string;
    /**
     * Indicate unit quantity used to estimate duties and taxes.<br>Example: PCS
     */
    quantityUnits?: string;
    /**
     * Indicate the Commodity name.<br>Example: DOCUMENTS
     */
    name?: string;
    /**
     * This is to specify the Harmonized Tariff System (HTS) code to meet U.S. and foreign governments' customs requirements. These are mainly used to estimate the duties and taxes.<br>Example: A six digit code for Almonds fresh or dried is 080211. The HTS code for pistachios in shell is 080251. The HTS code for fish is HS203.<br>To research the classification for your commodity, use the FedEx Global Trade Manager online at <a href='http://www.fedex.com/gtm' target='_blank'>fedex.com/gtm</a>. You can find the commodities and its respective codes by logging into FedEx and selecting harmonized code option. You will find country-specific information to determine whether your commodity is considered to be a document or non-document for your destination. <br>For additional information about harmonized code, refer to <a href='https://www.usitc.gov/documents/hts_external_guide.pdf' target='_blank'>harmonized code</a>.
     */
    harmonizedCode?: string;
    /**
     * Specify the part number if any. Example: P1
     */
    partNumber?: string;
};

