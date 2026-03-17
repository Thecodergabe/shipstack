/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentTaxIdentificationNumber_TaxIdentificationNumber } from './AgentTaxIdentificationNumber_TaxIdentificationNumber';
/**
 * Container to specify the GlobalTax ID
 */
export type GlobalTaxInformation_AgentTaxIdentificationNumber = {
    /**
     * When the value passed to the AgentRole parameter is 30,  the value passed to the IDNumberTypeCode parameter must be 1002, 1005 or 0005. (SHIP_FROM=20, CONSIGNEE=30)
     */
    AgentRole: string;
    TaxIdentificationNumber?: Array<AgentTaxIdentificationNumber_TaxIdentificationNumber>;
};

