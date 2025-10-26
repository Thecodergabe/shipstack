/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HazardousCommodityContent } from './HazardousCommodityContent';
import type { HazardousCommodityPackagingDetail } from './HazardousCommodityPackagingDetail';
import type { PhoneNumber } from './PhoneNumber';
/**
 * Dangerous Goods Container
 */
export type DangerousGoodsContainer = {
    /**
     * Specify the shipper name(offeror) or contact number. Required on all shipping papers.
     */
    offeror?: string;
    /**
     * Specify the kinds and quantities of all hazardous commodities in the current container.
     */
    hazardousCommodities?: Array<HazardousCommodityContent>;
    /**
     * Indicate the number of containers.
     */
    numberOfContainers?: number;
    /**
     * Indicate the type of container.
     */
    containerType?: string;
    emergencyContactNumber?: PhoneNumber;
    packaging?: HazardousCommodityPackagingDetail;
    /**
     * Indicate the packing type used.
     */
    packingType?: DangerousGoodsContainer.packingType;
    /**
     * Indicate the packaging type of the container used to package the radioactive materials.
     */
    radioactiveContainerClass?: DangerousGoodsContainer.radioactiveContainerClass;
};
export namespace DangerousGoodsContainer {
    /**
     * Indicate the packing type used.
     */
    export enum packingType {
        ALL_PACKED_IN_ONE = 'ALL_PACKED_IN_ONE',
    }
    /**
     * Indicate the packaging type of the container used to package the radioactive materials.
     */
    export enum radioactiveContainerClass {
        EXCEPTED_PACKAGE = 'EXCEPTED_PACKAGE',
        INDUSTRIAL_IP1 = 'INDUSTRIAL_IP1',
        INDUSTRIAL_IP2 = 'INDUSTRIAL_IP2',
        INDUSTRIAL_IP3 = 'INDUSTRIAL_IP3',
        TYPE_A = 'TYPE_A',
        TYPE_B_M = 'TYPE_B_M',
        TYPE_B_U = 'TYPE_B_U',
        TYPE_C = 'TYPE_C',
    }
}

