/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * TextMessage container is used for specifying phone number for receiving text preAlertNotification.
 */
export type PreAlertNotification_TextMessage = {
    /**
     * Phone number for receiving Voice PreAlertNotification.  Valid values are 0 – 9.
     *
     * If the country or territory of the message recipient is US, PR, CA, and VI, the layout is:
     *
     * 1, area code, 7 digit phone number or
     *
     * 1, area code, 7 digit phone number, 4 digit extension number.
     *
     * For other countries or territories, the layout is country or territory code, area code, 7 digit number.
     *
     */
    PhoneNumber: string;
};

