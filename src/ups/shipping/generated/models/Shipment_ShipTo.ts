/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipTo_Address } from './ShipTo_Address';
import type { ShipTo_Phone } from './ShipTo_Phone';
/**
 * Ship To Container.
 */
export type Shipment_ShipTo = {
    /**
     * Consignee's company name.  All other accounts must be either a daily pickup account or an occasional account.
     */
    Name: string;
    /**
     * Contact name at the consignee's location.  Required for: UPS Next Day Air® Early service, and when ShipTo country or territory is different than ShipFrom country or territory.
     *
     * Required if Invoice International form is requested.
     *
     */
    AttentionName?: string;
    /**
     * Not applicable for ShipTo
     */
    CompanyDisplayableName?: string;
    /**
     * Consignee's tax identification number. This element has been deprecated, replacement can be found in the GlobalTaxInformation container.
     * @deprecated
     */
    TaxIdentificationNumber?: string;
    Phone?: ShipTo_Phone;
    /**
     * Consignee's fax number.  If ShipTo country or territory is US 10 digits allowed, otherwise 1-15 digits allowed.
     */
    FaxNumber?: string;
    /**
     * Consignee's email address.
     */
    EMailAddress?: string;
    Address: ShipTo_Address;
    /**
     * Location ID is a unique identifier referring to a specific shipping/receiving location.  Location ID must be alphanumeric characters. All letters must be capitalized.
     */
    LocationID?: string;
};

