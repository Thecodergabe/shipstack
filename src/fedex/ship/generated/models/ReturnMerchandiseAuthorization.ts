/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This is a Return Merchant Authorization (RMA) for the return shipment.<br> Reason for the requirement is mandatory.
 */
export type ReturnMerchandiseAuthorization = {
    /**
     * Specify the reason for the return.<br> Note: There is no validation for reason. Recommended length is 60 alpha-numeric characters<br>Example: Wrong color or size.
     */
    reason?: string;
};

