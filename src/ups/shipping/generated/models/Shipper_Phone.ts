/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container tag for Phone Number.
 */
export type Shipper_Phone = {
    /**
     * Shipper's phone Number.  Valid values are 0 - 9.
     *
     * If Shipper country or territory is US, PR, CA, and VI, the layout is:
     * area code, 7 digit PhoneNumber or
     * area code, 7 digit PhoneNumber, 4 digit extension number.
     *
     * For other countries or territories, the layout is: country or territory code, area code, 7 digit number.
     *
     * A phone number is required if destination is international.
     *
     */
    Number: string;
    /**
     * Shipper's phone extension.
     */
    Extension?: string;
};

