/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Service Container.  Only valid with RequestOption = Rate for both Small package and GFP Rating requests.
 */
export type Shipment_Service = {
    /**
     * The code for the UPS Service associated with the shipment.
     *
     * NOTE: For a complete listing of values, refer to Service Codes in the Appendix
     *
     * Valid domestic values:
     * - 01 = Next Day Air
     * - 02 = 2nd Day Air
     * - 03 = Ground
     * - 12 = 3 Day Select
     * - 13 = Next Day Air Saver
     * - 14 = UPS Next Day Air Early
     * - 59 = 2nd Day Air A.M.
     * - 75 = UPS Heavy Goods
     *
     * Valid international values:
     * - 07 = Worldwide Express
     * - 08 = Worldwide Expedited
     * - 11= Standard
     * - 54 = Worldwide Express Plus
     * - 65 = Saver
     * - 96 = UPS Worldwide Express Freight
     * - 71 = UPS Worldwide Express Freight Midday
     *
     * Required for Rating and ignored for Shopping.
     *
     */
    Code: string;
    /**
     * A text description of the UPS Service associated with the shipment.  Length is not validated.
     */
    Description?: string;
};

