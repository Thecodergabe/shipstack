/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Money } from './Money';
import type { PackageSpecialServicesRequested } from './PackageSpecialServicesRequested';
import type { RequestePackageLineItemDimensions } from './RequestePackageLineItemDimensions';
import type { VariableHandlingChargeDetail } from './VariableHandlingChargeDetail';
import type { Weight_2 } from './Weight_2';
export type RequestedPackageLineItem = {
    /**
     * This is a physical packaging type used for the package. <br><a onclick='loadDocReference("subpackagetypes")'>Click here to see sub-packaging types</a><br>For more information on physical packaging or packaging regulatory requirements, visit fedex.com or contact your FedEx representative.
     */
    subPackagingType?: string;
    /**
     * Indicate the grouped package count. These are number of identical package(s) each with one or more commodities. <br> Example: 2
     */
    groupPackageCount?: number;
    /**
     * This is the Declared Value - represents FedEx Maximum liability in connection with a shipment of that Package, including but not limited to, any loss, damage, delay, misdelivery, any failure to provide information, or misdelivery of information relating to the Shipment.
     */
    declaredValue?: Money;
    /**
     * Indicate the total weight of the requested package line items.
     */
    weight: Weight_2;
    dimensions?: RequestePackageLineItemDimensions;
    variableHandlingChargeDetail?: VariableHandlingChargeDetail;
    /**
     * These special services are available at the package level for some or all service types.  Indicated if rate data is being requested for the special services.
     */
    packageSpecialServices?: PackageSpecialServicesRequested;
};

