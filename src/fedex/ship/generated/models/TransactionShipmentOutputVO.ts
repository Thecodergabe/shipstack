/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert_3P } from './Alert_3P';
import type { Alert_3PP } from './Alert_3PP';
import type { CompletedShipmentDetail } from './CompletedShipmentDetail';
import type { LabelResponseVO } from './LabelResponseVO';
import type { PieceResponse } from './PieceResponse';
import type { ShipmentAdvisoryDetails } from './ShipmentAdvisoryDetails';
/**
 * Specifies shipping transaction output details
 */
export type TransactionShipmentOutputVO = {
    /**
     * Indicate the FedEx serviceType used for this shipment. The results will be filtered by the serviceType value indicated.<br>Example: STANDARD_OVERNIGHT<br><a onclick='loadDocReference("servicetypes")'>click here to see Service Types</a>
     */
    serviceType?: string;
    /**
     * This is the shipment date. Default value is current date in case the date is not provided or a past date is provided.<br>Format [YYYY-MM-DD].<br>Example: 2019-10-14
     */
    shipDatestamp?: string;
    /**
     * Indicates the Service Category.<br>Example: EXPRESS
     */
    serviceCategory?: string;
    /**
     * These are shipping document details.
     */
    shipmentDocuments?: Array<LabelResponseVO>;
    /**
     * Specifies the information about the pieces, received in the response.
     */
    pieceResponses?: Array<PieceResponse>;
    /**
     * This is the service name associated with the shipment.<br>Example: FedEx Ground
     */
    serviceName?: string;
    /**
     * These are alert details received in the response.
     */
    alerts?: Array<(Alert_3P | Alert_3PP)>;
    completedShipmentDetail?: CompletedShipmentDetail;
    shipmentAdvisoryDetails?: ShipmentAdvisoryDetails;
    /**
     * This is a master tracking number for the shipment (must be unique for stand-alone open shipments, or unique within consolidation if consolidation key is provided).<br>Example: 794953535000
     */
    masterTrackingNumber?: string;
};

