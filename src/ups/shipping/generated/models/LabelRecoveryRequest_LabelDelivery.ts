/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for the Label Delivery accessorial. One Label Delivery per shipment.
 */
export type LabelRecoveryRequest_LabelDelivery = {
    /**
     * Indicates the Label Recovery and Receipt Recovery URL links are to be returned in the XML Response. Valid for following shipment -
     * Print/Electronic Return Label
     * Print/Electronic Import Control Label
     * Forward shipment except for Mail Innovations Forward
     */
    LabelLinkIndicator?: string;
    /**
     * Not Used. If this tag is present, resend the Label Delivery notification email.
     */
    ResendEMailIndicator?: string;
};

