/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Package } from './Package';
import type { Warning } from './Warning';
export type Shipment = {
    /**
     * inquiryNumber
     */
    inquiryNumber?: string;
    package?: Array<Package>;
    /**
     * The relationship of the user to the package(s) in the shipment. No value means that the user has no relationship to the package. Note that this check is only done when the request contains the 'Username' and package rights checking is performed. Valid values:<br />'MYC_HOME' - My Choice for Home<br />'MYC_BUS_OUTBOUND' - My Choice for Business Outbound<br />'MYC_BUS_INBOUND' - My Choice for Business Inbound<br />'SHIPPER' - Shipper
     */
    userRelation?: Array<string>;
    warnings?: Array<Warning>;
};

