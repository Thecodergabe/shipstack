/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RateResponse_RatedShipment } from './RateResponse_RatedShipment';
import type { RateResponse_Response } from './RateResponse_Response';
/**
 * Rate Response Container.
 */
export type RateResponse = {
    Response: RateResponse_Response;
    /**
     * RatedShipment Container.
     *
     * **NOTE:** For versions >= v2409, this element will always be returned as an array. For requests using versions < v2409, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    RatedShipment: Array<RateResponse_RatedShipment>;
};

