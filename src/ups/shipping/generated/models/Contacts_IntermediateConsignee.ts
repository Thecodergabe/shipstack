/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntermediateConsignee_Address } from './IntermediateConsignee_Address';
/**
 * The intermediate consignee is the person or company in the importing country or territory that makes final delivery to the ultimate consignee.  Applicable for EEI form only.
 */
export type Contacts_IntermediateConsignee = {
    /**
     * Company Name or the Individual name of the Intermediate consignee.  Applicable for EEI form only.
     */
    CompanyName: string;
    Address: IntermediateConsignee_Address;
};

