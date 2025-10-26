/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountNumber1 } from './AccountNumber1';
import type { SpecialServicesRequestedShipment } from './SpecialServicesRequestedShipment';
/**
 * The request elements for special service options availability.
 */
export type Full_Schema_Special_Service_Options = {
    requestedShipment: SpecialServicesRequestedShipment;
    /**
     * Account number associated with a Payor object. Example: Your account number
     */
    accountNumber?: AccountNumber1;
    /**
     * Optionally supplied to restrict the results to services for a specific carrier. Valid values are: FDXE, FDXG, FXSP. <br> Example: ["FDXG", "FDXE"]
     */
    carrierCodes?: Array<'FDXE' | 'FDXG' | 'FXSP' | 'FXFR'>;
};

