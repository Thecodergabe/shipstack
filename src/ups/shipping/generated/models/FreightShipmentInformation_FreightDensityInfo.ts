/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FreightDensityInfo_AdjustedHeight } from './FreightDensityInfo_AdjustedHeight';
import type { FreightDensityInfo_HandlingUnits } from './FreightDensityInfo_HandlingUnits';
/**
 * Freight Density Info container.  Required if DensityEligibleIndicator is present.
 */
export type FreightShipmentInformation_FreightDensityInfo = {
    /**
     * The presence of the AdjustedHeightIndicator indicates that allow the height reduction adjustment for density based rate request.
     */
    AdjustedHeightIndicator?: string;
    AdjustedHeight?: FreightDensityInfo_AdjustedHeight;
    HandlingUnits?: Array<FreightDensityInfo_HandlingUnits>;
};

