/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GlobalTaxInformation_AgentTaxIdentificationNumber } from './GlobalTaxInformation_AgentTaxIdentificationNumber';
/**
 * Container used to define the properties required for GlobalTaxID.
 */
export type Shipment_GlobalTaxInformation = {
    /**
     * The value for origin_country_shipment_value which satisfies Tax-ID Threshold Code is  ‘01’=Yes, ‘02’=No, ‘NA’= ‘Not Applicable’
     */
    OriginCountryShipmentValue?: string;
    /**
     * The value for destination_Country_ShipmentValue which satisfies Tax-ID Threshold Code is  ‘01’=Yes, ‘02’=No,‘NA’= ‘Not
     */
    DestinationCountryShipmentValue?: string;
    /**
     * The value for idNumber_Consumer_TypeCode which satisfies Tax-ID Threshold Code is  ‘01’=Business, ‘02’=Consumer/Individual,      ‘NA’= ‘Not Applicable’
     */
    ShipperTypeValue?: string;
    /**
     * Consignee Type. 01 = Business  02 = Consumer NA = Not Applicable
     */
    ConsigneeTypeValue?: string;
    AgentTaxIdentificationNumber?: Array<GlobalTaxInformation_AgentTaxIdentificationNumber>;
};

