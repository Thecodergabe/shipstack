/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container for Phone Number.  If ShipFrom country or territory is US, PR, CA, and VI, the layout is:
 * area code, 7 digit phone number or
 * area code, 7 digit phone number, 4 digit extension number.
 *
 * For other countries or territories, the layout is:
 * country or territory code, area code, 7 digit number.
 *
 * If ShipFrom tag is in the XML and International forms is requested.
 */
export type ShipFrom_Phone = {
    /**
     * The Ship from phone Number.
     */
    Number: string;
    /**
     * The Ship from phone extension.
     */
    Extension?: string;
};

