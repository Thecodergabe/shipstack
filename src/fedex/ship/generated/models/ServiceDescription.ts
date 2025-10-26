/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductName } from './ProductName';
/**
 * Descriptions for a service.
 */
export type ServiceDescription = {
    /**
     * Indicate the FedEx serviceType used for this shipment. The results will be filtered by the serviceType value indicated.<br>Example: STANDARD_OVERNIGHT<br><a onclick='loadDocReference("servicetypes")'>click here to see Service Types</a>
     */
    serviceType?: string;
    /**
     * Specifies code of the Service.<br>example: 80
     */
    code?: string;
    /**
     * Branded, translated, and/or localized names for this service.
     */
    names?: Array<ProductName>;
    /**
     * FOR FEDEX INTERNAL USE ONLY. The operating org code in a service.<br>Example: ["FXE", "FXE"]
     */
    operatingOrgCodes?: Array<string>;
    /**
     * Specifies astra Description.<br>Example: 2 DAY FRT
     */
    astraDescription?: string;
    /**
     * specifies the description.<br>Example:description
     */
    description?: string;
    /**
     * FOR FEDEX INTERNAL USE ONLY, Designates the service ID.<br>Example: EP1000000027
     */
    serviceId?: string;
    /**
     * FOR FEDEX INTERNAL USE ONLY. This is tied to the Product EFS interface definition which will currently contain the values of parcel.<br>Example: EXPRESS_PARCEL
     */
    serviceCategory?: string;
};

