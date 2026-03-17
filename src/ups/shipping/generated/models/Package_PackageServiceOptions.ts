/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackageServiceOptions_AccessPointCOD } from './PackageServiceOptions_AccessPointCOD';
import type { PackageServiceOptions_COD } from './PackageServiceOptions_COD';
import type { PackageServiceOptions_DeclaredValue } from './PackageServiceOptions_DeclaredValue';
import type { PackageServiceOptions_DeliveryConfirmation } from './PackageServiceOptions_DeliveryConfirmation';
import type { PackageServiceOptions_DryIce } from './PackageServiceOptions_DryIce';
import type { PackageServiceOptions_HazMat } from './PackageServiceOptions_HazMat';
import type { PackageServiceOptions_Notification } from './PackageServiceOptions_Notification';
/**
 * Package Service Options container.
 */
export type Package_PackageServiceOptions = {
    DeliveryConfirmation?: PackageServiceOptions_DeliveryConfirmation;
    DeclaredValue?: PackageServiceOptions_DeclaredValue;
    COD?: PackageServiceOptions_COD;
    AccessPointCOD?: PackageServiceOptions_AccessPointCOD;
    /**
     * The presence indicates that the package may be released by driver without a signature from the consignee.  Empty Tag. Only available for US50/PR to US50/PR packages without return service.
     */
    ShipperReleaseIndicator?: string;
    Notification?: PackageServiceOptions_Notification;
    HazMat?: Array<PackageServiceOptions_HazMat>;
    /**
     * Field to be used when a shipment contains a HazMat. It will specify the existence of HazMat, and what type. Initially this will be used for UPS Ground saver and Mail Innovations 'USPS Limited Quantities HazMat' Shipments (but may be extended for other types of HazMat in the future).
     * Valid values are 01.
     * - USPS Limited Quantities HazMat - 01
     */
    HazMatTypeCode?: string;
    DryIce?: PackageServiceOptions_DryIce;
    /**
     * An UPSPremiumCareIndicator indicates special handling is required for shipment having controlled substances. Empty Tag means indicator is present.
     *
     * The UPSPremiumCareIndicator cannot be requested for package with Delivery Confirmation - Adult Signature Required and Delivery Confirmation- Signature Required.
     *
     * UPSPremiumCareIndicator is valid for following Return services:
     * - Returns Exchange (available with a contract)
     * - Print Return Label
     * - Print and Mail
     * - Electronic Return Label
     * - Return Service Three Attempt
     *
     * The UPSPremiumCareIndicator can be requested with following UPS services:
     * - UPS Express® Early
     * - UPS Express
     * - UPS Express Saver
     * - UPS Standard
     * - Valid only for Canada to Canada movements.
     *
     */
    UPSPremiumCareIndicator?: string;
    /**
     * Presence/Absence Indicator. Any value is ignored. If present, the package is rated for UPS Proactive Response and proactive package tracking. Contractual accessorial for health care companies to allow package monitoring throughout the UPS system.  Shippers account needs to have valid contract for UPS Proactive Reponse.
     */
    ProactiveIndicator?: string;
    /**
     * Identifies the package containing Dangerous Goods.  Required for Hazmat shipment if SubVersion is greater than or equal to 1701.
     */
    PackageIdentifier?: string;
    /**
     * Unique identifier for clinical trials
     */
    ClinicalTrialsID?: string;
    /**
     * Presence/Absence Indicator. Any value is ignored. If present, indicates that the package contains an item that needs refrigeration.  Shippers account needs to have a valid contract for Refrigeration.
     */
    RefrigerationIndicator?: string;
};

