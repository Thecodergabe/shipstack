/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Messages concerning the ability to provide an accurate delivery commitment on an International commit quote.  These could be messages providing information about why a commitment could not be returned or a successful message such as REQUEST_COMPLETED
 */
export type CustomerMessage = {
    /**
     * Specifies the message Code received.<br> Example:SERVICE.TYPE.INTERNATIONAL.MESSAGE
     */
    code?: string;
    /**
     * Specifies the message received by the customer.<br>                                  Example: Rate does not include duties & taxes, clearance entry fees or other import fees. The payor of duties/taxes/fees will be responsible for any applicable Clearance Entry Fees.
     */
    message?: string;
};

