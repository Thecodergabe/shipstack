/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
import type { KeyDisplayTextVO1 } from './KeyDisplayTextVO1';
import type { PackageTypeDetail } from './PackageTypeDetail';
/**
 * This is the output response details of Service and Packaging Option request.
 */
export type PackageAndServiceOptionsOutputVO = {
    /**
     * The available packaging options for the shipment. This also includes the applicable rate types, the weight limit, or any other information related to the shipment. </br>Valid values for the weight limit are:<br>-maxMetricWeightAllowed<br>-maxWeightAllowed<br>-oneRateMaxWeightAllowed<br>-oneRateMaxMetricWeightAllowed
     */
    packageOptions?: Array<PackageTypeDetail>;
    /**
     * Indicates if OneRate is applicable to the packaging. Returns the response as True if OneRate is applicable. Otherwise the response is False.
     */
    oneRate?: boolean;
    /**
     * The information for advanced regulatory packages.
     */
    advancedRegulatoryPackages?: Array<KeyDisplayTextVO1>;
    /**
     * A list of key and value pairs representing the available service and packaging options.
     */
    serviceOptions?: Array<KeyDisplayTextVO1>;
    /**
     * The cxs alert type, alert code, and alert message that is received when package and service options are requested.
     */
    alerts?: Array<Alert>;
};

