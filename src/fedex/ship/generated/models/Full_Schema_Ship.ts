/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AsynchronousProcessingOptionType_1 } from './AsynchronousProcessingOptionType_1';
import type { LABELRESPONSEOPTIONS } from './LABELRESPONSEOPTIONS';
import type { OpenShipmentAction } from './OpenShipmentAction';
import type { RequestedShipment_1 } from './RequestedShipment_1';
import type { ShipperAccountNumber } from './ShipperAccountNumber';
import type { Version } from './Version';
/**
 * The request elements required to create a shipment.
 */
export type Full_Schema_Ship = {
    /**
     * It specifies the content of the merged pdf URL in the response. The merged pdf URL is generated only if the labelResponseOption is indicated as URL_ONLY.<ul><li>If the value is 'LABELS_AND_DOCS', then merged (all shipping labels and shipping documents) pdf URL will be returned.</li><li>If the value is 'LABELS_ONLY', merged (all shipping labels only) pdf URL will be returned.</li><li>If the value is 'NONE', then no merged pdf URL will be returned.</li></ul><br>This is optional field and will default to LABELS_AND_DOCS.<br>Note: If the value is 'LABELS_ONLY', then the returned merged pdf label will not be in the Base64 encoded format.
     */
    mergeLabelDocOption?: Full_Schema_Ship.mergeLabelDocOption;
    requestedShipment: RequestedShipment_1;
    labelResponseOptions: LABELRESPONSEOPTIONS;
    accountNumber: ShipperAccountNumber;
    shipAction?: OpenShipmentAction;
    processingOptionType?: AsynchronousProcessingOptionType_1;
    /**
     * This flag is used to specify if the shipment is singleshot mps or one Label at a time, piece by piece shipment. Default is false. If true, one label at a time is processed.
     */
    oneLabelAtATime?: boolean;
    version?: Version;
    /**
     * Array of processing options for the shipment.
     */
    processingOptions?: Array<'INCLUDE_PICKUPRATES'>;
};
export namespace Full_Schema_Ship {
    /**
     * It specifies the content of the merged pdf URL in the response. The merged pdf URL is generated only if the labelResponseOption is indicated as URL_ONLY.<ul><li>If the value is 'LABELS_AND_DOCS', then merged (all shipping labels and shipping documents) pdf URL will be returned.</li><li>If the value is 'LABELS_ONLY', merged (all shipping labels only) pdf URL will be returned.</li><li>If the value is 'NONE', then no merged pdf URL will be returned.</li></ul><br>This is optional field and will default to LABELS_AND_DOCS.<br>Note: If the value is 'LABELS_ONLY', then the returned merged pdf label will not be in the Base64 encoded format.
     */
    export enum mergeLabelDocOption {
        NONE = 'NONE',
        LABELS_AND_DOCS = 'LABELS_AND_DOCS',
        LABELS_ONLY = 'LABELS_ONLY',
    }
}

