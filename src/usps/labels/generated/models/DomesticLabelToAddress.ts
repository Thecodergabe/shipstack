/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Uses for:
 * The address where the package is being mailed to.  The destination ZIP Code is used for calculating pricing.
 *
 * First and Last Name or Firm are always required.
 *
 * Address elements streetAddress, city, state, ZIPCode are required unless you are requesting a parcel locker which will require the facilityId, Recipient Email, First and Last Name or Firm.
 *
 * If a user sets the 'holdForPickup' field to "true" then the `toAddress` object: 'facilityID', 'email', and 'phone' as well as the `fromAddress` object: 'firstName', 'lastName', 'email', and 'phone' fields are required.
 *
 * For return labels, the `toAddress` ZIP Plus 4 is looked up by the API, unless the ignoreBadAddress is set to true or the address cannot be found.  If ignoreBadAddress flag is true then ZIP Plus 4 is required.
 */
export type DomesticLabelToAddress = Record<string, any>;
