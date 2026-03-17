/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Producer_Address } from './Producer_Address';
import type { Producer_Phone } from './Producer_Phone';
/**
 * Information of the producer. The USMCA Certificate of Origin must be completed, signed, and dated by the exporter.
 * When the Certificate is completed by the producer for use by the exporter, it must be completed, signed, and dated by the producer. The date must be the date the Certificate was completed and signed.  Applies to USMCA.  Required for USMCA forms.
 */
export type Contacts_Producer = {
    /**
     * The text associated with the code will be printed in the producer section instead of producer contact information.
     * Use attached List if more than one producer's good is included on the Certificate, attach a list of additional producers, including the legal name, address (including country or territory), and legal tax identification number, cross-referenced to the goods described in the Description of Goods field.  Applies to USMCA.
     * Valid values:
     * 01 - AVAILABLE TO CUSTOMS UPON REQUEST
     * 02 - SAME AS EXPORTER
     * 03 - ATTACHED LIST
     * 04 - UNKNOWN
     */
    Option?: string;
    /**
     * Company Name or the Individual name of the Producer.  Applies to USMCA.  Only applicable when producer option is empty or not present. Conditionally required for: USMCA, when Producer option is not specified.
     */
    CompanyName?: string;
    /**
     * Tax ID of the Producer.  Applies to USMCA. Only applicable when producer option is empty or not present
     */
    TaxIdentificationNumber?: string;
    Address?: Producer_Address;
    /**
     * Contact name at the Producer location.  Applies to USMCA.
     */
    AttentionName?: string;
    Phone?: Producer_Phone;
    /**
     * Producer email address.  Applies to USMCA.
     */
    EMailAddress?: string;
};

