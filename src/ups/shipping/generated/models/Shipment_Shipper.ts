/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Shipper_Address } from './Shipper_Address';
import type { Shipper_Phone } from './Shipper_Phone';
/**
 * Container for the Shipper's information.
 */
export type Shipment_Shipper = {
    /**
     * Shippers company name.
     *
     * For forward Shipment 35 characters are accepted, but only 30 characters will be printed on the label.
     */
    Name: string;
    /**
     * Shippers Attention Name.
     *
     * For forward Shipment 35 characters are accepted, but only 30 characters will be printed on the label.  Required if destination is international. Required if Invoice and CO International forms are requested and the ShipFrom address is not present.
     */
    AttentionName?: string;
    /**
     * Shipper's CompanyDisplayableName.
     *
     * The CompanyDisplayableName will be displayed in tracking results and notification messages in place of the name associated with the shipper account.
     * The original shipper account name will be displayed for all Return Services and Import Control Shipments.  This is available for Shipper accounts enabled by UPS and applies to Forward Shipments.
     */
    CompanyDisplayableName?: string;
    /**
     * Shipper's Tax Identification Number.  Conditionally required if EEI form (International forms) is requested and ship From is not mentioned. This element has been deprecated, replacement can be found in the GlobalTaxInformation container.
     * @deprecated
     */
    TaxIdentificationNumber?: string;
    Phone?: Shipper_Phone;
    /**
     * Shipper's six digit alphanumeric account number.
     *
     * Must be associated with the UserId specified in the AccessRequest XML.
     *
     * The account must be a valid UPS account number that is active.
     *
     * For US, PR and CA accounts, the account must be either a daily pickup account, an occasional account, or a customer B.I.N account.
     *
     * Drop Shipper accounts are valid for return service shipments only if the account is Trade Direct (TD) enabled.
     *
     * All other accounts must be either a daily pickup account or an occasional account.
     */
    ShipperNumber: string;
    /**
     * Shipper's Fax Number.
     */
    FaxNumber?: string;
    /**
     * Shipper's email address.
     */
    EMailAddress?: string;
    Address: Shipper_Address;
};

