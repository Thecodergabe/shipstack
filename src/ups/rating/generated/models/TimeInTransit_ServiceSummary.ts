/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceSummary_EstimatedArrival } from './ServiceSummary_EstimatedArrival';
import type { ServiceSummary_Service } from './ServiceSummary_Service';
/**
 * Container for all available service information.
 */
export type TimeInTransit_ServiceSummary = {
    Service: ServiceSummary_Service;
    /**
     * Empty Tag. Indicates whether the service will be guaranteed or not.  Required for International Requests.
     */
    GuaranteedIndicator?: string;
    /**
     * The Disclaimer is provided based upon the origin and destination country or territory codes provided in the request document. The disclaimer is returned as a conditional statement to the validity of the service being guaranteed. The possible disclaimers that can be returned are available in the Service Guaranteed Disclaimers table.
     */
    Disclaimer?: string;
    EstimatedArrival: ServiceSummary_EstimatedArrival;
    /**
     * Saturday delivery information for a service. Values are1 - Saturday Delivery Available with additional charges 0 - Saturday Delivery not available or no additional charge, please check Delivery Date to confirm if the Delivery will be SaturdayPlease see Saturday Delivery business rules section for more information.
     */
    SaturdayDelivery?: string;
    /**
     * Saturday delivery disclaimer message.
     */
    SaturdayDeliveryDisclaimer?: string;
    /**
     * Sunday delivery information for a service. Values are1 - Sunday Delivery Available with additional charges 0 - Sunday Delivery not available or no additional charge, please check Delivery Date to confirm if the Delivery will be SundayPlease see Saturday Delivery business rules section for more information.  Applies only if SubVersion is greater than or equal to 2007
     */
    SundayDelivery?: string;
    /**
     * Sunday delivery disclaimer message.  Applies only if SubVersion is greater than or equal to 2007
     */
    SundayDeliveryDisclaimer?: string;
};

