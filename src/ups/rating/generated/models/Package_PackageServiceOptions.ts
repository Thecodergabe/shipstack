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
import type { PackageServiceOptions_Insurance } from './PackageServiceOptions_Insurance';
import type { PackageServiceOptions_ShipperDeclaredValue } from './PackageServiceOptions_ShipperDeclaredValue';
/**
 * PackageServiceOptions container.
 */
export type Package_PackageServiceOptions = {
    DeliveryConfirmation?: PackageServiceOptions_DeliveryConfirmation;
    AccessPointCOD?: PackageServiceOptions_AccessPointCOD;
    COD?: PackageServiceOptions_COD;
    DeclaredValue?: PackageServiceOptions_DeclaredValue;
    ShipperDeclaredValue?: PackageServiceOptions_ShipperDeclaredValue;
    /**
     * The presence indicates that the package may be released by driver without a signature from the consignee.  Empty Tag. Only available for US50/PR to US50/PR packages without return service.
     */
    ShipperReleaseIndicator?: string;
    /**
     * Any value associated with this element will be ignored. If present, the package is rated for UPS Proactive Response and proactive package tracking.Contractual accessorial for health care companies to allow package monitoring throughout the UPS system.  Shippers account needs to have valid contract for UPS Proactive Response.
     */
    ProactiveIndicator?: string;
    /**
     * Presence/Absence Indicator. Any value is ignored. If present, indicates that the package contains an item that needs refrigeration.  Shippers account needs to have a valid contract for Refrigeration.
     */
    RefrigerationIndicator?: string;
    Insurance?: PackageServiceOptions_Insurance;
    /**
     * The UPSPremiumCareIndicator indicates special handling is required for shipment having controlled substances.  Empty Tag means indicator is present.
     *
     * Valid only for Canada to Canada movements.
     *
     * Available for the following Return Services:
     * - Returns Exchange (available with a contract)
     * - Print Return Label
     * - Print and Mail
     * - Electronic Return Label
     * - Return Service Three Attempt
     *
     * May be requested with following UPS services:
     * - UPS Express® Early
     * - UPS Express
     * - UPS Express Saver
     * - UPS Standard.
     *
     * Not available for packages with the following:
     * - Delivery Confirmation - Signature Required
     * - Delivery Confirmation - Adult Signature Required.
     *
     */
    UPSPremiumCareIndicator?: string;
    HazMat?: PackageServiceOptions_HazMat;
    DryIce?: PackageServiceOptions_DryIce;
};

