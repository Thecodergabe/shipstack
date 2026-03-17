/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LabelResults_Form } from './LabelResults_Form';
import type { LabelResults_LabelImage } from './LabelResults_LabelImage';
import type { LabelResults_MailInnovationsLabelImage } from './LabelResults_MailInnovationsLabelImage';
import type { LabelResults_Receipt } from './LabelResults_Receipt';
/**
 * Container that stores the label results. Information containing the results of the user's Label Recovery Request.
 */
export type LabelRecoveryResponse_LabelResults = {
    /**
     * Package Tracking number.  Package 1Z number. Returned only if TrackingNumber or Combination of Reference Number and Shipper Number present in request.
     */
    TrackingNumber?: string;
    LabelImage?: LabelResults_LabelImage;
    /**
     * Mail Innovations Tracking Number.  Applicable for Single Mail Innovations Returns and Dual Mail Innovations Returns shipment. Returned only if MailInnovationsTrackingNumber is provided in request.
     */
    MailInnovationsTrackingNumber?: string;
    MailInnovationsLabelImage?: LabelResults_MailInnovationsLabelImage;
    Receipt?: LabelResults_Receipt;
    Form?: LabelResults_Form;
};

