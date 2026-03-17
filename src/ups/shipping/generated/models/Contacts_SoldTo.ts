/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SoldTo_Address } from './SoldTo_Address';
import type { SoldTo_Phone } from './SoldTo_Phone';
/**
 * SoldTo Container. The Sold To party's country code must be the same as the Ship To party's country code with the exception of Canada and satellite countries.  Applies to Invoice and USMCA Forms. Required if Invoice or USMCA (International Form) is requested.
 */
export type Contacts_SoldTo = {
    /**
     * Company Name.
     */
    Name: string;
    /**
     * Sold to contact name.
     */
    AttentionName: string;
    /**
     * SoldTo Tax Identification Number. This element has been deprecated, replacement can be found in the GlobalTaxInformation container.
     * @deprecated
     */
    TaxIdentificationNumber?: string;
    Phone?: SoldTo_Phone;
    /**
     * The text associated with the code will be printed in the sold to section of the USMCA form.  The values indicate the following: 01 – Unknown.  Applies to USMCA form. Possible Values are 01 and 02.
     */
    Option?: string;
    Address: SoldTo_Address;
    /**
     * SoldTo email address.
     */
    EMailAddress?: string;
    /**
     * SoldTo AccountNumber
     */
    AccountNumber?: string;
};

