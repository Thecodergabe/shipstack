/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LabelRecoveryResponse_CODTurnInPage } from './LabelRecoveryResponse_CODTurnInPage';
import type { LabelRecoveryResponse_Form } from './LabelRecoveryResponse_Form';
import type { LabelRecoveryResponse_HighValueReport } from './LabelRecoveryResponse_HighValueReport';
import type { LabelRecoveryResponse_LabelResults } from './LabelRecoveryResponse_LabelResults';
import type { LabelRecoveryResponse_Response } from './LabelRecoveryResponse_Response';
import type { LabelRecoveryResponse_TrackingCandidate } from './LabelRecoveryResponse_TrackingCandidate';
/**
 * Response for the Label recovery request  Validates the date range and label being present. Also if the shipment is return or not
 */
export type LabelRecoveryResponse = {
    Response: LabelRecoveryResponse_Response;
    /**
     * Tracking number of the leading package in the shipment
     */
    ShipmentIdentificationNumber?: string;
    LabelResults: Array<LabelRecoveryResponse_LabelResults>;
    CODTurnInPage?: LabelRecoveryResponse_CODTurnInPage;
    Form?: LabelRecoveryResponse_Form;
    HighValueReport?: LabelRecoveryResponse_HighValueReport;
    TrackingCandidate?: Array<LabelRecoveryResponse_TrackingCandidate>;
};

