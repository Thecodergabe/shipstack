/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Guaranteed Delivery Container.
 */
export type RatedShipment_GuaranteedDelivery = {
    /**
     * The rated shipments guaranteed delivery date. Denotes UPS published guarantee times. (i.e. 3DaySelect = 3)
     */
    BusinessDaysInTransit?: string;
    /**
     * The rated shipments committed delivery time.
     */
    DeliveryByTime?: string;
    /**
     * The rated shipments scheduled delivery date.
     */
    ScheduledDeliveryDate?: string;
};

