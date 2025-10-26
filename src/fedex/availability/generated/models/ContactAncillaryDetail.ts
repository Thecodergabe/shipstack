/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyName } from './CompanyName';
import type { EMailDetail } from './EMailDetail';
import type { PhoneNumberDetail } from './PhoneNumberDetail';
/**
 * Indicate additional contact details such as email and phone information.
 */
export type ContactAncillaryDetail = {
    /**
     * These are contact email addresses.
     */
    emailAddresses?: Array<EMailDetail>;
    /**
     * Specify the Prefix.
     */
    prefix?: string;
    /**
     * Phone Number Details
     */
    phoneNumberDetails?: Array<PhoneNumberDetail>;
    companyName?: CompanyName;
    /**
     * Indicate the contact title.
     */
    title?: string;
};

