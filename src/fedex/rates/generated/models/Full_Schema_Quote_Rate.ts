/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountNumber } from './AccountNumber';
import type { RateRequestControlParameters } from './RateRequestControlParameters';
import type { RequestedShipment } from './RequestedShipment';
import type { Version } from './Version';
/**
 * The request elements for requesting a rate quote.
 */
export type Full_Schema_Quote_Rate = {
    accountNumber: AccountNumber;
    rateRequestControlParameters?: RateRequestControlParameters;
    requestedShipment: RequestedShipment;
    /**
     * Array of processing options for the shipment.
     */
    processingOptions?: Array<'INCLUDE_PICKUPRATES'>;
    /**
     * Specify the four letter code of a FedEx operating company that meets your requirements.<br> Example: FDXE<br><ul><li>FDXE - FedEx Express</li><li>FDXG - FedEx Ground</li><li>FXSP - FedEx SmartPost</li><li>FXCC - FedEx Custom Critical.</li></ul>
     */
    carrierCodes?: Array<string>;
    version?: Version;
};

