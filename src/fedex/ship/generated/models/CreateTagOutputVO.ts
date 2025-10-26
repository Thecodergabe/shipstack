/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
import type { CompletedTagDetail } from './CompletedTagDetail';
/**
 * Specifies the output details when a tag is created.
 */
export type CreateTagOutputVO = {
    /**
     * Specifies the Master Tracking Number for the requested shipment.<br>Example: 997338100007320
     */
    masterTrackingNumber?: string;
    /**
     * Specifies the service type for this shipment.<br>Example: GROUND_HOME_DELIVERY<br><a onclick='loadDocReference("servicetypes")'>Click here to see Service Types</a>
     */
    serviceType?: string;
    /**
     * Specifies the shipment date and time. The default timestamp is the current date-time. Format is MMM-dd-yyyy.<br>Example: 2019-10-04
     */
    shipTimestamp?: string;
    completedTagDetail?: CompletedTagDetail;
    /**
     * Specifies the alerts received when a tag is created. This includes the alert code, alert type, and alert message.
     */
    alerts?: Array<Alert>;
};

