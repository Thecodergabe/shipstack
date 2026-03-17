/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipFrom_Address } from './ShipFrom_Address';
import type { ShipFrom_Phone } from './ShipFrom_Phone';
import type { ShipFrom_TaxIDType } from './ShipFrom_TaxIDType';
import type { ShipFrom_VendorInfo } from './ShipFrom_VendorInfo';
/**
 * Ship From Container.  Required for return shipment.
 *
 * Required if pickup location is different from the shipper's address.
 *
 * Required for Trade Direct shipment.
 */
export type Shipment_ShipFrom = {
    /**
     * The ship from location's name or company name.
     * 35 characters are accepted, but for return Shipment only 30 characters will be printed on the label.  Required if ShipFrom tag is in the XML.
     */
    Name: string;
    /**
     * The ship from Attention name.
     * 35 characters are accepted, but for return Shipment only 30 characters will be printed on the label.  Required if ShipFrom tag is in the XML and Invoice or CO International forms is requested. If not present, will default to the Shipper Attention Name.
     */
    AttentionName?: string;
    /**
     * Not applicable for ShipFrom.
     */
    CompanyDisplayableName?: string;
    /**
     * Company's Tax Identification Number at the pick up location.  Conditionally required if EEI form (International forms) is requested.
     * Applies to EEI Form only. This element has been deprecated, replacement can be found in the GlobalTaxInformation container.
     * @deprecated
     */
    TaxIdentificationNumber?: string;
    TaxIDType?: ShipFrom_TaxIDType;
    Phone?: ShipFrom_Phone;
    /**
     * The Ship from fax number.  If Ship from country or territory is US 10 digits allowed, otherwise 1-15 digits allowed.
     */
    FaxNumber?: string;
    Address: ShipFrom_Address;
    VendorInfo?: ShipFrom_VendorInfo;
};

