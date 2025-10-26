/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * service type information details
 */
export type ServiceTypeDetailVO = {
    /**
     * Identifies which carrier is being described.
     */
    carrierCode?: ServiceTypeDetailVO.carrierCode;
    /**
     * Description
     */
    description?: string;
    /**
     * Service Name
     */
    serviceName?: string;
    /**
     * Service Category
     */
    serviceCategory?: string;
};
export namespace ServiceTypeDetailVO {
    /**
     * Identifies which carrier is being described.
     */
    export enum carrierCode {
        FDXE = 'FDXE',
        FDXG = 'FDXG',
        FXSP = 'FXSP',
        FXFR = 'FXFR',
        FDXC = 'FDXC',
        FXCC = 'FXCC',
    }
}

