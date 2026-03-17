/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UPSPremiumCareForm_LanguageForUPSPremiumCare } from './UPSPremiumCareForm_LanguageForUPSPremiumCare';
/**
 * UPS Premium Care Form is required if UPS Premium Care Indicator is present on a package.  Valid only for Canada to Canada movements.
 */
export type InternationalForms_UPSPremiumCareForm = {
    /**
     * Shipment Date associated with UPS Premium Care Shipment.   Valid Format: yyyyMMdd
     */
    ShipmentDate: string;
    /**
     * Size of UPS Premium Care Form.  Valid values:
     * 01 = A4 Size
     * 02 = Letter Size
     */
    PageSize: string;
    /**
     * Format of UPS Premium Care Form.  Valid values:
     * 01 = PNG
     * 02 = PDF
     */
    PrintType: string;
    /**
     * Number of Copies of UPS Premium Care Form.  Valid value is 02.
     */
    NumOfCopies: string;
    LanguageForUPSPremiumCare: UPSPremiumCareForm_LanguageForUPSPremiumCare;
};

