/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for the BillShipper billing option.  This element or its sibling element, BillReceiver, BillThirdParty or ConsigneeBilledIndicator, must be present but no more than one can be present.
 */
export type ShipmentCharge_BillShipper = {
    /**
     * UPS account number  Must be the same UPS account number as the one provided in Shipper/ShipperNumber.
     */
    AccountNumber: string;
};

