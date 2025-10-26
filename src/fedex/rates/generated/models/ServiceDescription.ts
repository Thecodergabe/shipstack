/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductName } from './ProductName';
/**
 * Indicates the provides the Service Description details.
 */
export type ServiceDescription = {
    /**
     * This is the service type.<br>Example: INTERNATIONAL_FIRST<br><a onclick='loadDocReference("servicetypes")'>Click here to see Service Types</a>
     */
    serviceType?: string;
    /**
     * Specifies the service code.<br> Example: 92
     */
    code?: string;
    /**
     * Specifies the service name.
     */
    names?: Array<ProductName>;
    /**
     * Specifies astra description. <br> Example: INTL1ST
     */
    astraDescription?: string;
    /**
     * Specifies description of the service. <br> Example: FedEx Ground
     */
    description?: string;
    /**
     * Specifies the service Id. <br> Example: EP1000000135
     */
    serviceId?: string;
    /**
     * Specifies service category. <br> Example: parcel
     */
    serviceCategory?: string;
};

