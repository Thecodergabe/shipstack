/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
import type { BatteryDetail } from './BatteryDetail';
import type { CodeDisplayTextVO } from './CodeDisplayTextVO';
import type { KeyDisplayTextVO } from './KeyDisplayTextVO';
import type { PackageSpecialServiceOption } from './PackageSpecialServiceOption';
import type { ShipmentSpecialServiceOption } from './ShipmentSpecialServiceOption';
/**
 * Holds the details of OptionalServices for the SpecialServiceOptions and PackageAndServiceOptions Endpoints
 */
export type OptionalServices = {
    /**
     * Indicates the type of service that is used to ship the package.<br>Example: INTERNATIONAL_FIRST<br><a onclick='loadDocReference("servicetypes")'>Click here to see Service Types</a>
     */
    serviceType?: string;
    /**
     * Specifies if international signature options are available.
     */
    issEnabled?: boolean;
    /**
     * All possible signature options if signature options are available.  Indicated by the issEnabled boolean.
     */
    signatureOptionsList?: Array<CodeDisplayTextVO>;
    /**
     * Indicates the list of special services that are available at package level for some or all service types.
     */
    packageSpecialServicesList?: Array<PackageSpecialServiceOption>;
    returnShipmentList?: Array<'FEDEX_TAG' | 'PENDING' | 'PRINT_RETURN_LABEL' | 'EMAIL_LABEL'>;
    /**
     * Specify the four letter code of a FedEx operating company that meets your requirements<br>Examples of FedEx Operating Companies are:<ul><li>FDXE - FedEx Express</li><li>FDXG - FedEx Ground</li><li>FXSP - FedEx SmartPost</li><li>FXCC - FedEx Custom Critical.</li></ul>
     */
    carrierCode?: OptionalServices.carrierCode;
    /**
     * Indicates the battery option list.
     */
    batteryOptionList?: Array<BatteryDetail>;
    /**
     * Indicates the alert details.
     */
    alertList?: Array<KeyDisplayTextVO>;
    /**
     * Indicates the list of special services that are available at the shipment level for some or all service types.
     */
    shipmentSpecialServicesList?: Array<ShipmentSpecialServiceOption>;
    alerts?: Array<Alert>;
};
export namespace OptionalServices {
    /**
     * Specify the four letter code of a FedEx operating company that meets your requirements<br>Examples of FedEx Operating Companies are:<ul><li>FDXE - FedEx Express</li><li>FDXG - FedEx Ground</li><li>FXSP - FedEx SmartPost</li><li>FXCC - FedEx Custom Critical.</li></ul>
     */
    export enum carrierCode {
        FDXE = 'FDXE',
        FDXG = 'FDXG',
        FXSP = 'FXSP',
        FXFR = 'FXFR',
    }
}

