/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransitTimeRequestedShipment } from './TransitTimeRequestedShipment';
/**
 * TransitTimeInputVO describes the details needed in order to get the transit times for a particular shipment.
 */
export type Full_Schema_TransitTime = {
    requestedShipment?: TransitTimeRequestedShipment;
    /**
     * Specify the four letter code of a FedEx operating company that meets your requirements<br>Examples of FedEx Operating Companies are:<ul><li>FDXE - FedEx Express</li><li>FDXG - FedEx Ground</li><li>FXSP - FedEx SmartPost</li><li>FXCC - FedEx Custom Critical.</li></ul>
     */
    carrierCodes?: Array<'FDXE' | 'FDXG' | 'FXSP'>;
};

