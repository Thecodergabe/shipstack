/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceValues_ReferenceNumber } from './ReferenceValues_ReferenceNumber';
/**
 * Container that holds reference number and shipper number  If tracking number is not present use reference Number
 */
export type LabelRecoveryRequest_ReferenceValues = {
    ReferenceNumber: ReferenceValues_ReferenceNumber;
    /**
     * Required if ReferenceNumber/Value is populated. Shipper's six digit account number. Must be six alphanumeric characters. Must be associated with the Internet account used to login.
     */
    ShipperNumber: string;
};

