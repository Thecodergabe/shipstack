/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Package_Commodity } from './Package_Commodity';
import type { Package_Dimensions } from './Package_Dimensions';
import type { Package_DimWeight } from './Package_DimWeight';
import type { Package_HazMatPackageInformation } from './Package_HazMatPackageInformation';
import type { Package_PackageServiceOptions } from './Package_PackageServiceOptions';
import type { Package_PackageWeight } from './Package_PackageWeight';
import type { Package_Packaging } from './Package_Packaging';
import type { Package_ReferenceNumber } from './Package_ReferenceNumber';
import type { Package_SimpleRate } from './Package_SimpleRate';
import type { Package_UPSPremier } from './Package_UPSPremier';
/**
 * Package Information container.  For Return Shipments up to 20 packages are allowed. US/PR origin return movements are limited to only one package. For Mail Innovations and Simple Rate shipments only one package is allowed.
 */
export type Shipment_Package = {
    /**
     * Merchandise description of package.  Required for shipment with return service.
     */
    Description?: string;
    /**
     * Description of articles & special marks. Applicable for Air Freight only
     */
    PalletDescription?: string;
    /**
     * Number of Pieces. Applicable for Air Freight only
     */
    NumOfPieces?: string;
    /**
     * Unit price of the commodity. Applicable for Air Freight only  Limit to 2 digit after the decimal. The maximum length of the field is 12 including '.' and can hold up to 2 decimal place. (e.g. 999999999.99)
     */
    UnitPrice?: string;
    Packaging: Package_Packaging;
    Dimensions?: Package_Dimensions;
    DimWeight?: Package_DimWeight;
    PackageWeight?: Package_PackageWeight;
    /**
     * Presence of the indicator mentions that the package is Large Package.
     *
     * This is an empty tag, any value inside is ignored.
     */
    LargePackageIndicator?: string;
    /**
     * Presence/Absence Indicator. Any value is ignored. If present, indicates that the package is over size.   Applicable for UPS Worldwide Economy DDU service.
     */
    OversizeIndicator?: string;
    /**
     * Presence/Absence Indicator. Any value is ignored. If present, indicates that the package is qualified for minimum billable weight.   Applicable for UPS Worldwide Economy DDU service.
     */
    MinimumBillableWeightIndicator?: string;
    ReferenceNumber?: Array<Package_ReferenceNumber>;
    /**
     * Additional Handling Required. The presence indicates additional handling is required, the absence indicates no additional handling is required. Additional Handling indicator indicates it's a non-corrugated package.
     */
    AdditionalHandlingIndicator?: string;
    SimpleRate?: Package_SimpleRate;
    UPSPremier?: Package_UPSPremier;
    PackageServiceOptions?: Package_PackageServiceOptions;
    Commodity?: Package_Commodity;
    HazMatPackageInformation?: Package_HazMatPackageInformation;
};

