/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Uses for:
 *
 * The address of the business where the package is being mailed from. The origin ZIP Code is used for calculating pricing.
 *
 * The First and Last Name or Firm Name are always required.
 *
 * For return labels, the `toAddress` ZIP Plus 4 is looked up by the API, unless the ignoreBadAddress is set to true or the address cannot be found. If ignoreBadAddress flag is true then ZIP Plus 4 is required.
 *
 */
export type DomesticLabelAddress = Record<string, any>;
