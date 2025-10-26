/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContentRecord } from './ContentRecord';
import type { CustomerReference_1 } from './CustomerReference_1';
import type { Dimensions } from './Dimensions';
import type { Money } from './Money';
import type { PackageSpecialServicesRequested } from './PackageSpecialServicesRequested';
import type { VariableHandlingChargeDetail } from './VariableHandlingChargeDetail';
import type { Weight } from './Weight';
/**
 * These are one or more package-attribute descriptions, each of which describes an individual package, a group of identical packages, or (for the total-piece-total-weight case) common characteristics of all packages in the shipment.<ul><li>At least one instance containing the weight for at least one package is required for EXPRESS and GROUND shipments.</li><li>Single piece requests will have one RequestedPackageLineItem.</li><li>Multiple piece requests will have multiple RequestedPackageLineItems.</li><li>Maximum occurrences is 30.</li></ul>
 */
export type RequestedPackageLineItem = {
    /**
     * Optional. Used only with individual packages as a unique identifier of each requested package. Will be adjusted at the shipment level as pieces are added.<br>Example: 1
     */
    sequenceNumber?: number;
    /**
     * Indicate the subPackagingType, if you are using your own packaging for the shipment. Use it for all shipments inbound to Canada (CA) and inbound shipments to the U.S. and Puerto Rico (PR) from Canada and Mexico (MX).subPackagingType is mandatory for shipments to Canada.<br>Example: TUBE, CARTON, CONTAINER. etc.<br>Note: If the value is TUBE, a non-machinable surcharge will be applicable for SmartPost shipments.<br><a onclick='loadDocReference("subpackagetypes")'>click here to see Sub-Packaging Types</a><br>For more information on physical packaging or packaging regulatory requirements, contact your FedEx representative.
     */
    subPackagingType?: string;
    /**
     * This object lists the customer references provided with the package.
     */
    customerReferences?: Array<CustomerReference_1>;
    /**
     * This is the Declared Value of any shipment which represents FedEx maximum liability associated with a shipment. This is including, but not limited to any loss, damage, delay, misdelivery, any failure to provide information, or misdelivery of information related to the Shipment.
     */
    declaredValue?: Money;
    weight: Weight;
    /**
     * Indicate the dimensions of the package.<br> Following conditions will apply: <ul><li>Dimensions are optional but when added, then all three dimensions must be indicated.</li><li>Dimensions are required when using a Express freight service.</li></ul>Note: The maximum/minimum dimension values varies based on the services and the packaging types. Refer <a href='https://www.fedex.com/en-us/service-guide.html' target='_blank'>FedEx Service Guide</a> for service details related to DIM Weighting for FedEx Express and oversize conditions for FedEx Express and FedEx Ground.
     */
    dimensions?: Dimensions;
    /**
     * Indicate the grouped package count. These are number of identical package(s) each with one or more commodities. <br> Example: 2
     */
    groupPackageCount?: number;
    /**
     * Package description used for clearance. The value is required for intra-UAE. and is optional for intra-EU.<br>Example:description
     */
    itemDescriptionForClearance?: string;
    /**
     * Use this object to specify package content details.
     */
    contentRecord?: Array<ContentRecord>;
    /**
     * This the item description for the package.<br>Note: Item description is required for Email Label return shipments and ground Create tag.<br>Example: Item description<br> Maximum limit is 50 characters
     */
    itemDescription?: string;
    variableHandlingChargeDetail?: VariableHandlingChargeDetail;
    packageSpecialServices?: PackageSpecialServicesRequested;
};

