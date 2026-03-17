/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UltimateConsignee_Address } from './UltimateConsignee_Address';
import type { UltimateConsignee_UltimateConsigneeType } from './UltimateConsignee_UltimateConsigneeType';
/**
 * The ultimate consignee is the person or company who receives the goods for end-use or the person or company listed on the export license. This is the end-user of the goods.  Applicable for EEI form only.
 */
export type Contacts_UltimateConsignee = {
    /**
     * Company Name or the Individual name of the Ultimate consignee.  Applicable for EEI form only.
     */
    CompanyName: string;
    Address: UltimateConsignee_Address;
    UltimateConsigneeType?: UltimateConsignee_UltimateConsigneeType;
};

