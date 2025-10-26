/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HazardousCommodityDescription01 } from './HazardousCommodityDescription01';
import type { HazardousCommodityInnerReceptacleDetail01 } from './HazardousCommodityInnerReceptacleDetail01';
import type { HazardousCommodityOptionDetail01 } from './HazardousCommodityOptionDetail01';
import type { HazardousCommodityQuantityDetail } from './HazardousCommodityQuantityDetail';
/**
 * Customer-provided specifications for handling individual commodities.
 */
export type HazardousCommodityContent001 = {
    quantity?: HazardousCommodityQuantityDetail;
    /**
     * Specifies the inner receptacles within the container.
     */
    innerReceptacles?: Array<HazardousCommodityInnerReceptacleDetail01>;
    options?: HazardousCommodityOptionDetail01;
    description?: HazardousCommodityDescription01;
};

