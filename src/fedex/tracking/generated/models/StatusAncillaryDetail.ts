/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Field which holds status code of the track information for the shipment being tracked.
 */
export type StatusAncillaryDetail = {
    /**
     * Field which holds Reason code associated to the status of the shipment being tracked.<br> Example: 15,84,IN001,015A,02
     */
    reason?: string;
    /**
     * Field which holds Reason description associated to the status of the shipment being tracked.<br> Example: Customer not available or business closed,Local delivery restriction, delivery not attempted,Package delivered to recipient address - release authorized
     */
    reasonDescription?: string;
    /**
     * Field which holds recommended action for customer to resolve reason.<br> Example: Contact us at <http://www.fedex.com/us/customersupport/call/index.html> to discuss possible delivery or pickup alternatives.
     */
    action?: string;
    /**
     * Field which holds recommended action description for customer to resolve reason.<br> Example: Customer not Available or Business Closed
     */
    actionDescription?: string;
};

