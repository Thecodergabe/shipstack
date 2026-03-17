/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies details of delivery options and its eligibility type
 */
export type DeliveryOptionElgibilityDetails = {
    /**
     * This is the type of delivery option.<br><br><i>Note: For eligibile DISPUTE_DELIVERY, RETURN_TO_SHIPPER, SUPPLEMENT_ADDRESS go to fedex.com to perform the option/action.</i><br><br>Example: INDIRECT_SIGNATURE_RELEASE
     */
    option?: DeliveryOptionElgibilityDetails.option;
    /**
     * Eligibility of the customer for the specific delivery options.<br> Example: INELIGIBLE
     */
    eligibility?: string;
};
export namespace DeliveryOptionElgibilityDetails {
    /**
     * This is the type of delivery option.<br><br><i>Note: For eligibile DISPUTE_DELIVERY, RETURN_TO_SHIPPER, SUPPLEMENT_ADDRESS go to fedex.com to perform the option/action.</i><br><br>Example: INDIRECT_SIGNATURE_RELEASE
     */
    export enum option {
        DISPUTE_DELIVERY = 'DISPUTE_DELIVERY',
        INDIRECT_SIGNATURE_RELEASE = 'INDIRECT_SIGNATURE_RELEASE',
        REDIRECT_TO_HOLD_AT_LOCATION = 'REDIRECT_TO_HOLD_AT_LOCATION',
        REROUTE = 'REROUTE',
        RESCHEDULE = 'RESCHEDULE',
        RETURN_TO_SHIPPER = 'RETURN_TO_SHIPPER',
        SUPPLEMENT_ADDRESS = 'SUPPLEMENT_ADDRESS',
    }
}

