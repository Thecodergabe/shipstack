/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type services = {
    /**
     * Service level code
     *
     * Valid domestic service codes: "1DMS","1DAS","1DM","1DA","1DP","2DM","2DA","3DS","GND".
     *
     * Valid International service codes (not a complete list) ,"01","02","03","05","08","09","10","11","18","19","20","21","22","23","24","25","26","28","29","33","68".
     */
    serviceLevel: string;
    /**
     * Service name. Examples are: UPS Next Day Air, UPS Ground, UPS Expedited, UPS Worldwide Express Freight
     */
    serviceLevelDescription: string;
    /**
     * The date the shipment is tendered to UPS for shipping (can be dropped off at UPS or picked up by UPS).  This date may or may not be the UPS business date.
     *
     * Valid Format: YYYY-MM-DD
     */
    shipDate: string;
    /**
     * Scheduled delivery date.
     *
     * Valid format: YYYY-MM-DD
     */
    deliveryDate: string;
    /**
     * Scheduled commit time.
     *
     * For international shipments the value always come back from SE (OPSYS data) but for domestic, value may be used from NRF commit time.
     *
     * Valid format: HH:MM:SS
     */
    commitTime: string;
    /**
     * Scheduled Delivery Time, value may be later then commit time.
     *
     * Valid format: HH:MM:SS
     */
    deliveryTime: string;
    /**
     * Three character scheduled delivery day of week.
     *
     * Valid values: "MON","TUE","WED","THU","FRI", "SAT"
     */
    deliveryDayOfWeek: string;
    /**
     * Returns a "1" if the requested shipped on date was changed. This data is available only for international transactions.
     *
     * When this flag is set, WWDTDisclaimer.getNextDayDisclaimer method could be called to return the next day disclaimer message.
     */
    nextDayPickupIndicator: string;
    /**
     * Returns "1" if Saturday Pickup is available for an extra charge otherwise it will return "0".
     *
     * When this flag is set, WWDTDisclaimer.getSaturdayPickupDisclaimer method could be called to return the Saturday pickup extra charge message
     */
    saturdayPickupIndicator: string;
    /**
     * Delivery date of Saturday Delivery
     *
     * Valid Format: YYYY-MM-DD
     */
    saturdayDeliveryDate?: string;
    /**
     * Delivery time of Saturday deliver
     *
     * Valid format: HH:MM:SS
     */
    saturdayDeliveryTime?: string;
    /**
     * Service remarks text. The contents of this field will represent text that the back end application/function needs to display to clarify the time in transit calculation.
     */
    serviceRemarksText?: string;
    /**
     * Return "1" Guaranteed, or "0" Not Guaranteed based on below conditions:
     *
     * If the ship date, delivery date, and system date are not within a defined peak date range, and a value for service guarantee is available in SE (OPSYS data) that will be returned.
     *
     * If the ship date or delivery date or system date are within a defined peak date range and the service is within the list of services to remove guarantees for, "0" wil be returned.
     */
    guaranteeIndicator: string;
    /**
     * Available for International requests. Number of calendar days from origin location to destination location.  TotalTransitDays = BusinessTransitDays + RestDaysCount + HolidayCount.
     *
     * Defaults to 0.
     */
    totalTransitDays: number;
    /**
     * Returns the number of UPS business days from origin location to destination location.
     */
    businessTransitDays: number;
    /**
     * Returns the number of rest days encountered at the origin location.  this data is available only for international transactions.
     *
     * Defaults to 0.
     */
    restDaysCount: number;
    /**
     * Returns the number of holidays encountered at the origin and destination location, if it effects the time and transit.  This data is available only for international transactions.
     *
     * Defaults to 0.
     */
    holidayCount: number;
    /**
     * Returns the number of delay needed for customs encounter at the origin or destination location.  This data is available only for international transactions.
     *
     * Defaults to 0.
     */
    delayCount: number;
    /**
     * Planned pickup date.
     *
     * Note: This value may not equal the shipped on value requested.  This could happen when the requested shipped on date is a holiday or for locations needing 24 hour notice before a pickup could be made.
     */
    pickupDate: string;
    /**
     * Latest possible pickup time. This data is available only for international transactions. If the package was not actually picked by UPS before this time, the services will not meet the guarantee commitment.
     */
    pickupTime: string;
    /**
     * Latest time a customer can contact UPS CST to be notified for requesting a pickup. This data is available only for international transactions. If customer does not notify UPS for a pickup before this time, the services will not meet the guarantee commitment.
     */
    cstccutoffTime: string;
    /**
     * Returns the date proof of delivery information would be available.  This data is available only for international transactions.
     */
    poddate?: string;
    /**
     * Returns the number of days proof of delivery information will be available.  This data is available only for international transactions.
     */
    poddays?: number;
};

