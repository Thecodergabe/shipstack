/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Package_Commodity } from './Package_Commodity';
import type { Package_Dimensions } from './Package_Dimensions';
import type { Package_DimWeight } from './Package_DimWeight';
import type { Package_PackageServiceOptions } from './Package_PackageServiceOptions';
import type { Package_PackageWeight } from './Package_PackageWeight';
import type { Package_PackagingType } from './Package_PackagingType';
import type { Package_SimpleRate } from './Package_SimpleRate';
import type { Package_UPSPremier } from './Package_UPSPremier';
/**
 * Package Container.  Only one Package allowed for Simple Rate
 */
export type Shipment_Package = {
    PackagingType?: Package_PackagingType;
    Dimensions?: Package_Dimensions;
    DimWeight?: Package_DimWeight;
    PackageWeight?: Package_PackageWeight;
    Commodity?: Package_Commodity;
    /**
     * This element does not require a value and if one is entered it will be ignored.  If present, it indicates the shipment will be categorized as a Large Package.
     */
    LargePackageIndicator?: string;
    PackageServiceOptions?: Package_PackageServiceOptions;
    /**
     * A flag indicating if the packages require additional handling. True if AdditionalHandlingIndicator tag exists; false otherwise. Additional Handling indicator indicates it's a non-corrugated package.  Empty Tag.
     */
    AdditionalHandlingIndicator?: string;
    SimpleRate?: Package_SimpleRate;
    UPSPremier?: Package_UPSPremier;
    /**
     * Presence/Absence Indicator. Any value inside is ignored. It indicates if packge is oversized.  Applicable for UPS Worldwide Economy DDU service
     */
    OversizeIndicator?: string;
    /**
     * Presence/Absence Indicator. Any value inside is ignored. It indicates if packge is qualified for minimum billable weight.  Applicable for UPS Worldwide Economy DDU service
     */
    MinimumBillableWeightIndicator?: string;
};

