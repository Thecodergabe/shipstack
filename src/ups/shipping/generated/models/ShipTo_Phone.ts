/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for Phone Number
 */
export type ShipTo_Phone = {
    /**
     * Consignee's phone Number.  Required for: UPS Next Day Air® Early service, and when Ship To country or territory is different than the ShipFrom country or territory.
     *
     * If ShipTo country or territory is US, PR, CA, and VI, the layout is:
     * area code, 7 digit PhoneNumber or
     * area code, 7 digit PhoneNumber, 4 digit extension number; number.
     *
     * For other countries or territories, the layout is: country or territory code, area code, 7 digit number.
     *
     */
    Number: string;
    /**
     * Consignee's phone extension.
     */
    Extension?: string;
};

