/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RateRequest_CustomerClassification } from './RateRequest_CustomerClassification';
import type { RateRequest_PickupType } from './RateRequest_PickupType';
import type { RateRequest_Request } from './RateRequest_Request';
import type { RateRequest_Shipment } from './RateRequest_Shipment';
/**
 * Rate Request container.
 */
export type RateRequest = {
    Request: RateRequest_Request;
    PickupType?: RateRequest_PickupType;
    CustomerClassification?: RateRequest_CustomerClassification;
    Shipment: RateRequest_Shipment;
};

