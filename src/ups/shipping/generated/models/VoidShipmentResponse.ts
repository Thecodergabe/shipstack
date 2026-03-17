/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VoidShipmentResponse_PackageLevelResults } from './VoidShipmentResponse_PackageLevelResults';
import type { VoidShipmentResponse_Response } from './VoidShipmentResponse_Response';
import type { VoidShipmentResponse_SummaryResult } from './VoidShipmentResponse_SummaryResult';
/**
 * Void Response Container.
 */
export type VoidShipmentResponse = {
    Response: VoidShipmentResponse_Response;
    SummaryResult: VoidShipmentResponse_SummaryResult;
    /**
     * Contains the Package Level Results.
     *
     * **NOTE:** For versions >= v2403, this element will always be returned as an array. For requests using versions < v2403, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    PackageLevelResults?: Array<VoidShipmentResponse_PackageLevelResults>;
};

