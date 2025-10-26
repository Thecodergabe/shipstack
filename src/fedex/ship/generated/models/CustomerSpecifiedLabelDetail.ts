/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdditionalLabelsDetail } from './AdditionalLabelsDetail';
import type { DocTabContent } from './DocTabContent';
import type { RegulatoryLabelContentDetail } from './RegulatoryLabelContentDetail';
/**
 * This object allows the control of label content for customization.
 */
export type CustomerSpecifiedLabelDetail = {
    /**
     * Controls which data/sections will be suppressed.<br>Example: TOTAL_WEIGHT
     */
    maskedData?: Array<'CUSTOMS_VALUE' | 'SHIPPER_ACCOUNT_NUMBER' | 'DIMENSIONS' | 'DUTIES_AND_TAXES_PAYOR_ACCOUNT_NUMBER' | 'INSURED_VALUE' | 'SECONDARY_BARCODE' | 'SHIPPER_INFORMATION' | 'TERMS_AND_CONDITIONS' | 'TOTAL_WEIGHT' | 'TRANSPORTATION_CHARGES_PAYOR_ACCOUNT_NUMBER'>;
    /**
     * Specify how the regulatory details to be provided on the labels.
     */
    regulatoryLabels?: Array<RegulatoryLabelContentDetail>;
    /**
     * Specify how the additional details to be provided on the labels.
     */
    additionalLabels?: Array<AdditionalLabelsDetail>;
    docTabContent?: DocTabContent;
};

