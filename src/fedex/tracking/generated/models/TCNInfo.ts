/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TCNInfo = {
    /**
     * Field which holds the Transportation Control Number value.<br> Example: N552428361Y555XXX
     */
    value: string;
    /**
     * Field which holds information about carrier code of the shipment.<br> Example: FDXE
     */
    carrierCode?: string;
    /**
     * ShipDateBegin and ShipDateEnd are recommended to narrow the search, reduce lookup time, and avoid duplicates when searching for a specific tracking number within a specific date range. <br>Format: YYYY-MM-DD <br> Example: 2020-03-29
     */
    shipDateBegin?: string;
    /**
     * ShipDateBegin and ShipDateEnd are recommended to narrow the search, reduce lookup time, and avoid duplicates when searching for a specific tracking number within a specific date range. <br>Format: YYYY-MM-DD <br> Example: 2020-04-01
     */
    shipDateEnd?: string;
};

