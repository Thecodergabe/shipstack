/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdditionalMeasures } from './AdditionalMeasures';
import type { ClearanceItemDetail } from './ClearanceItemDetail';
import type { Customs_Money } from './Customs_Money';
import type { Money } from './Money';
import type { UsmcaDetail } from './UsmcaDetail';
import type { Weight_4 } from './Weight_4';
export type Commodity = {
    /**
     * These are commodities clearance item detail
     */
    clearanceItemDetail?: Array<ClearanceItemDetail>;
    /**
     * This is the unit price.
     */
    unitPrice?: Money;
    /**
     * This object contains additional quantitative information other than weight and quantity to calculate duties and taxes.
     */
    additionalMeasures?: Array<AdditionalMeasures>;
    /**
     * Indicate the number of pieces associated with the commodity. The value can neither be negative nor exceed 9,999.<br>Example: 12
     */
    numberOfPieces?: number;
    /**
     * This is the units quantity (using quantityUnits as the unit of measure) per commodity. This is used to estimate duties and taxes.<br> Example: 125
     */
    quantity?: number;
    /**
     * This is the unit of measure for the units quantity. This is used to estimate duties and taxes.<br>Example: EA<br><a onclick='loadDocReference("harmonizedsystemcodeunitofmeasure-table1")'>click here to see Commodity Unit Measures</a>
     */
    quantityUnits?: string;
    /**
     * This customs value is applicable for all items(or units) under the specified commodity.
     */
    customsValue?: Customs_Money;
    /**
     * This is commodity country of manufacture. This is required for International shipments. Maximum allowed length is 4.<br>Example: US<br><a onclick='loadDocReference("countrycodes")'>click here to see Country codes</a>
     */
    countryOfManufacture?: string;
    /**
     * This is an identifying mark or number used on the packaging of a shipment to help customers identify a particular shipment<br>Example: 87123
     */
    cIMarksAndNumbers?: string;
    /**
     * This is to specify the Harmonized Tariff System (HTS) code to meet U.S. and foreign governments' customs requirements. These are mainly used to estimate the duties and taxes.<br>Example: 0613<br>To research the classification for your commodity, use the FedEx Global Trade Manager online at <a href='http://www.fedex.com/gtm' target='_blank'>fedex.com/gtm</a>. You will find country-specific information to determine whether your commodity is considered to be a document or non-document for your destination.
     */
    harmonizedCode?: string;
    /**
     * Required<br>ScrewsMaximum allowed 450 characters.<br>Example: description
     */
    description: string;
    /**
     * This is Commodity name.<br>Example: Non-Threaded Rivets
     */
    name?: string;
    weight?: Weight_4;
    /**
     * This is the export license number for the shipment.<br>Example: 26456
     */
    exportLicenseNumber?: string;
    /**
     * Specify the export license expiration date for the shipment.<br>Format YYYY-MM-DD<br>Example : 2009-04-12
     */
    exportLicenseExpirationDate?: string;
    /**
     * This is a part number.<br>Example: 167
     */
    partNumber?: string;
    /**
     * This field is used for calculation of duties and taxes.<br><br> Valid values are : BUSINESS and CONSUMER. <br>Example:BUSINESS
     */
    purpose?: Commodity.purpose;
    usmcaDetail?: UsmcaDetail;
};
export namespace Commodity {
    /**
     * This field is used for calculation of duties and taxes.<br><br> Valid values are : BUSINESS and CONSUMER. <br>Example:BUSINESS
     */
    export enum purpose {
        BUSINESS = 'BUSINESS',
        CONSUMER = 'CONSUMER',
    }
}

