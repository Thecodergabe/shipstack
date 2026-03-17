/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipmentRequest_LabelSpecification } from './ShipmentRequest_LabelSpecification';
import type { ShipmentRequest_ReceiptSpecification } from './ShipmentRequest_ReceiptSpecification';
import type { ShipmentRequest_Request } from './ShipmentRequest_Request';
import type { ShipmentRequest_Shipment } from './ShipmentRequest_Shipment';
/**
 * Shipment Request.
 */
export type ShipmentRequest = {
    Request: ShipmentRequest_Request;
    Shipment: ShipmentRequest_Shipment;
    LabelSpecification?: ShipmentRequest_LabelSpecification;
    ReceiptSpecification?: ShipmentRequest_ReceiptSpecification;
};

