/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountNumber1 } from './AccountNumber1';
import type { PackageAndOptionsRequestedShipment } from './PackageAndOptionsRequestedShipment';
/**
 * These are the input elements for requesting package and service options.
 */
export type Full_Schema_Package_And_Service_Options = {
    /**
     * The descriptive data for the requested shipment.
     */
    requestedShipment: PackageAndOptionsRequestedShipment;
    /**
     * "Specify the four letter code of a FedEx operating company that meets your requirements<br>Examples of FedEx Operating Companies are:<ul><li>FDXE - FedEx Express</li><li>FDXG - FedEx Ground</li><li>FXSP - FedEx SmartPost</li><li>FXCC - FedEx Custom Critical.</li></ul>"
     */
    carrierCodes?: Array<'FDXE' | 'FDXG' | 'FXFR' | 'FXSP'>;
    /**
     * This is a Payor account number associated with the shipment. Account number is required, for SmartPost shipments (i.e. Carrier code: FXSP)
     */
    accountNumber?: AccountNumber1;
    /**
     * This is system measurement type, such as Imperial or Metric.
     */
    systemOfMeasureType?: Full_Schema_Package_And_Service_Options.systemOfMeasureType;
};
export namespace Full_Schema_Package_And_Service_Options {
    /**
     * This is system measurement type, such as Imperial or Metric.
     */
    export enum systemOfMeasureType {
        IMPERIAL = 'IMPERIAL',
        METRIC = 'METRIC',
    }
}

