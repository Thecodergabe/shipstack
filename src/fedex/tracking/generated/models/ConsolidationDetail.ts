/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReasonDetail } from './ReasonDetail';
/**
 * This is the consolidation details for packages within a shipment identified as CONSOLIDATED.
 */
export type ConsolidationDetail = {
    /**
     * The timestamp for the consolidation. <br> Example: 2020-10-13T03:54:44-06:00
     */
    timeStamp?: string;
    /**
     * The identifier for the consolidation. <br> Example: 47936927
     */
    consolidationID?: string;
    /**
     * Specifies the reason details for the consolidation event for a package.
     */
    reasonDetail?: ReasonDetail;
    /**
     * Specifies the package count for the consolidation. <br> Example: 25
     */
    packageCount?: number;
    /**
     * Specifies the consolidation event type for a package.  A package can be ADDED to, REMOVED from, or EXCLUDED from a consolidation. <br> Example: PACKAGE_ADDED_TO_CONSOLIDATION
     */
    eventType?: string;
};

