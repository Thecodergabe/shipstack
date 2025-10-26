/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HazardousCommodityOptionDetail } from './HazardousCommodityOptionDetail';
import type { HazardousCommodityQuantityDetail } from './HazardousCommodityQuantityDetail';
import type { NetExplosiveDetail } from './NetExplosiveDetail';
import type { ValidatedHazardousCommodityDescription } from './ValidatedHazardousCommodityDescription';
/**
 * These the details on the kind and quantity of an individual hazardous commodity in a package.
 */
export type ValidatedHazardousCommodityContent = {
    /**
     * Indicates hazardous commodity quantity details.
     */
    quantity?: HazardousCommodityQuantityDetail;
    options?: HazardousCommodityOptionDetail;
    description?: ValidatedHazardousCommodityDescription;
    netExplosiveDetail?: NetExplosiveDetail;
    /**
     * The mass points are a calculation used by ADR regulations for measuring the risk of a particular hazardous commodity.<br>Example: 2.0
     */
    massPoints?: number;
};

