/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EEIInformation_DDTCInformation } from './EEIInformation_DDTCInformation';
import type { EEIInformation_License } from './EEIInformation_License';
/**
 * Required for EEI form.  Applies to EEI form only.
 */
export type Product_EEIInformation = {
    /**
     * Required for EEI form id it is a SDL product. Valid values: LC, LV, SS,MS, GS, DP, HR, UG, IC, SC, DD, HH, SR, TE,TL, IS, CR, GP, RJ, TP, IP, IR, DB, CH, RS, OS  Applies to EEI form only. Required if EEIFilingOption code 3 specified for EEI form.
     */
    ExportInformation?: string;
    License?: EEIInformation_License;
    DDTCInformation?: EEIInformation_DDTCInformation;
};

