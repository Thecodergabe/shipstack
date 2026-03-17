/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LabelRecovery_LabelSpecification_LabelImageFormat } from './LabelRecovery_LabelSpecification_LabelImageFormat';
import type { LabelRecovery_LabelSpecification_LabelStockSize } from './LabelRecovery_LabelSpecification_LabelStockSize';
/**
 * Container that is used to define the properties required by the user to print and/ or display the UPS shipping label.  Required for the shipment without return service, or shipment with PRL return service.
 */
export type LabelRecoveryRequest_LabelSpecification = {
    /**
     * Browser HTTPUserAgent String. This is the preferred way of identifying GIF image type to be generated.  Required if <Root node>/ LabelSpecification/LabelImageFormat/Code = Gif. Default to Mozilla/4.5 if this field is missing or has invalid value.
     */
    HTTPUserAgent?: string;
    LabelImageFormat?: LabelRecovery_LabelSpecification_LabelImageFormat;
    LabelStockSize?: LabelRecovery_LabelSpecification_LabelStockSize;
};

