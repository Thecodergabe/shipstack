/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HazardousCommodityDescription } from './HazardousCommodityDescription';
import type { HazardousCommodityInnerReceptacleDetail } from './HazardousCommodityInnerReceptacleDetail';
import type { HazardousCommodityOptionDetail } from './HazardousCommodityOptionDetail';
import type { HazardousCommodityQuantityDetail } from './HazardousCommodityQuantityDetail';
/**
 * Documents the kind and quantity of an individual hazardous commodity in a package.
 */
export type HazardousCommodityContent = {
    quantity?: HazardousCommodityQuantityDetail;
    /**
     * Specifies the inner receptacles within the container.
     */
    innerReceptacles?: Array<HazardousCommodityInnerReceptacleDetail>;
    options?: HazardousCommodityOptionDetail;
    description?: HazardousCommodityDescription;
};

