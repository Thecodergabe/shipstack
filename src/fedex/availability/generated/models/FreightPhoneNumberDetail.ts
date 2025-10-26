/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This field provides the phone Number details for the service.There can be maximum of five types of phoneNumber which can be provided in request.
 */
export type FreightPhoneNumberDetail = {
    /**
     * This provides the type of phoneNumber being used in request.<br> Example: <ul><li>FAX</li><li>HOME</li><li>MOBILE</li><li>PAGER</li><li>TOLL_FREE</li><li>WORK</li></ul>
     */
    phoneNumberType?: FreightPhoneNumberDetail.phoneNumberType;
    /**
     * This provides the phone number
     */
    phoneNumber?: string;
};
export namespace FreightPhoneNumberDetail {
    /**
     * This provides the type of phoneNumber being used in request.<br> Example: <ul><li>FAX</li><li>HOME</li><li>MOBILE</li><li>PAGER</li><li>TOLL_FREE</li><li>WORK</li></ul>
     */
    export enum phoneNumberType {
        FAX = 'FAX',
        HOME = 'HOME',
        MOBILE = 'MOBILE',
        PAGER = 'PAGER',
        TOLL_FREE = 'TOLL_FREE',
        WORK = 'WORK',
    }
}

