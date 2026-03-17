/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LabelRecoveryRequest_LabelDelivery } from './LabelRecoveryRequest_LabelDelivery';
import type { LabelRecoveryRequest_LabelSpecification } from './LabelRecoveryRequest_LabelSpecification';
import type { LabelRecoveryRequest_ReferenceValues } from './LabelRecoveryRequest_ReferenceValues';
import type { LabelRecoveryRequest_Request } from './LabelRecoveryRequest_Request';
import type { LabelRecoveryRequest_Translate } from './LabelRecoveryRequest_Translate';
import type { LabelRecoveryRequest_UPSPremiumCareForm } from './LabelRecoveryRequest_UPSPremiumCareForm';
/**
 * Request for obtaining the Label for the return shipment.
 */
export type LabelRecoveryRequest = {
    Request: LabelRecoveryRequest_Request;
    LabelSpecification?: LabelRecoveryRequest_LabelSpecification;
    Translate?: LabelRecoveryRequest_Translate;
    LabelDelivery?: LabelRecoveryRequest_LabelDelivery;
    /**
     * Small Package Tracking Number. Required if Mail Innovations Tracking Number or ReferenceNumber/Value and ShipperNumber is not provided.  If only TrackingNumber is provided, the request will be treated as Small Package Shipment. Label Recovery will return label for Small Package Tracking Number.
     * If both, TrackingNumber and MailInnovationsTrackingNumber are provided, the request will be treated as Dual Mail Innovations Return Shipment. Label Recovery will return two labels one each for - Small Package Tracking Number and Mail Innovations Return Tracking Number.
     */
    TrackingNumber?: string;
    /**
     * Mail Innovations Tracking Number.  Required if Tracking Number or ReferenceNumber/Value is not populated.
     * If only MailInnovationsTrackingNumber is provided, the request will be treated as Single Mail Innovations Return Shipment. Label Recovery will return label for Mail Innovations Return Tracking Number.
     * If both, TrackingNumber and MailInnovationsTrackingNumber are provided, the request will be treated as Dual Mail Innovations Return Shipment. Label Recovery will return two labels one each for - Small Package Tracking Number and Mail Innovations Return Tracking Number.
     */
    MailInnovationsTrackingNumber?: string;
    ReferenceValues?: LabelRecoveryRequest_ReferenceValues;
    /**
     * Represents 5 character ISO Locale that allows the user to request Reference Number Code on Label, Label instructions, Receipt instructions (if available for given tracking number) and High Value Report (if available for given tracking number) in desired language.
     * Locale is specified by the combination of language code and country or territory code - 2 character language code and 2 character country code seperated by an underscore ('_') character. Example - de_DE. Please refer to Appendix for supported values for Locale.  Either Translate container or Locale element can be present in a given request. Both can't be requested together in same request.
     */
    Locale?: string;
    UPSPremiumCareForm?: LabelRecoveryRequest_UPSPremiumCareForm;
};

