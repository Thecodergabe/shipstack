/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address_POE } from './Address_POE';
/**
 * WorldEase is a contract service offering in the UPS shipping that decreases brokerage fees by consolidating
 * loose packages into one shipment for customs clearance.
 *
 */
export type Shipment_WorldEase = {
    /**
     * The final destination country code.
     */
    DestinationCountryCode: string;
    /**
     * The final destination postal code.
     */
    DestinationPostalCode?: string;
    /**
     * The Global Consolidation Clearance Number(GCCN) generated for the master shipment. This is required for child shipment.
     */
    GCCN?: string;
    /**
     * 1 indicates a Master Consolidation request for the European Union.
     */
    MasterEUConsolidationIndicator?: string;
    /**
     * This field is a flag to indicate if the request is a master shipment. This is required for Master shipment only. If MasterHasDocBox is "0" then request is considered a master shipment.
     */
    MasterHasDocBox?: string;
    /**
     * Code that indicates how shipping charges will be paid.
     *
     * | Code  | Name                | Description:                                                              |
     * | :--:  | :--                 | :--                                                                       |
     * | CAF   | Cost And Freight    | Shipper pays to point of import, conignee pays balance.                   |
     * | COL   | Freight Collect     | Consignee (with valid UPS account) pays all shipping charges              |
     * | DDP   | Delivered Duty Paid | Shipper pays shipping and duty, consignee pays the Value Added Tax (VAT)  |
     * | FOB   | Free On Board       | Shipper pays to point to export, consignee pays balance                   |
     * | PRE   | Prepaid             | Shipper pays all shipping charges                                         |
     * | SDT   | Free Domicile       | Child Shipper pays for shipping, duities and taxes                        |
     *
     */
    MasterShipmentChgType: Shipment_WorldEase.MasterShipmentChgType;
    /**
     * This field indicates if VendorCollectIDTypeCode and VendorCollectIDNumber should be exempt from validation. "0" indicates VendorCollectIDTypeCode and VendorCollectIDNumber fields are required.
     */
    VendorCollectIDNumberExemptIndicator?: string;
    /**
     * Container for port of entry details
     */
    PortOfEntry: {
        /**
         * Port of entry name
         */
        Name: string;
        /**
         * Port code
         */
        ClearancePortCode: string;
        /**
         * Port of entry consignee
         */
        Consignee: string;
        /**
         * Address of the POE. For Master/Child Shipment
         */
        Address: Address_POE;
    };
};
export namespace Shipment_WorldEase {
    /**
     * Code that indicates how shipping charges will be paid.
     *
     * | Code  | Name                | Description:                                                              |
     * | :--:  | :--                 | :--                                                                       |
     * | CAF   | Cost And Freight    | Shipper pays to point of import, conignee pays balance.                   |
     * | COL   | Freight Collect     | Consignee (with valid UPS account) pays all shipping charges              |
     * | DDP   | Delivered Duty Paid | Shipper pays shipping and duty, consignee pays the Value Added Tax (VAT)  |
     * | FOB   | Free On Board       | Shipper pays to point to export, consignee pays balance                   |
     * | PRE   | Prepaid             | Shipper pays all shipping charges                                         |
     * | SDT   | Free Domicile       | Child Shipper pays for shipping, duities and taxes                        |
     *
     */
    export enum MasterShipmentChgType {
        CAF = 'CAF',
        COL = 'COL',
        DDP = 'DDP',
        FOB = 'FOB',
        PRE = 'PRE',
        SDT = 'SDT',
    }
}

