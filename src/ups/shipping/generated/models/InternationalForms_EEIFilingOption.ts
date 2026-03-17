/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EEIFilingOption_ShipperFiled } from './EEIFilingOption_ShipperFiled';
import type { EEIFilingOption_UPSFiled } from './EEIFilingOption_UPSFiled';
/**
 * EEI Filing option.  Applicable for EEI form and is required.
 */
export type InternationalForms_EEIFilingOption = {
    /**
     * Required for EEI Form.  Applicable for EEI form.
     * Valid values:
     * 1 - Shipper filed,
     * 2 - AES Direct,
     * 3 - UPS filed.
     */
    Code: string;
    /**
     * Email Address where the notification is sent. Valid for UPS filed (option 3), Shipper filed (option 1- A , 1-C)  Applicable for EEI form.
     */
    EMailAddress?: string;
    /**
     * Optional Description of Filing Code.  Applicable for EEI form.
     */
    Description?: string;
    UPSFiled?: EEIFilingOption_UPSFiled;
    ShipperFiled?: EEIFilingOption_ShipperFiled;
};

