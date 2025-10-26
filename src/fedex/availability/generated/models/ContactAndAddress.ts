/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { AddressAncillaryDetail } from './AddressAncillaryDetail';
import type { Contact } from './Contact';
import type { ContactAncillaryDetail } from './ContactAncillaryDetail';
/**
 * Specifies the contact and address details of a location.
 */
export type ContactAndAddress = {
    contact?: Contact;
    contactAncillaryDetail?: ContactAncillaryDetail;
    address?: Address;
    addressAncillaryDetail?: AddressAncillaryDetail;
};

