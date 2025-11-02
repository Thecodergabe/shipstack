/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The mail service requested.
 *
 * Note:
 * - A single mail class option is deprecated and will be removed in the next major revision.  This attribute will be replaced with the array of mail classes.
 * - `PARCEL_SELECT_LIGHTWEIGHT` is deprecated and will convert to `PARCEL_SELECT`
 * - `FIRST-CLASS_PACKAGE_SERVICE` is deprecated and will convert to `USPS_GROUND_ADVANTAGE`
 * - `USPS_RETAIL_GROUND` is no longer supported and will return a 400 if used
 * @deprecated
 */
export enum mailClassOutboundOnly {
    PARCEL_SELECT = 'PARCEL_SELECT',
    PARCEL_SELECT_LIGHTWEIGHT = 'PARCEL_SELECT_LIGHTWEIGHT',
    PRIORITY_MAIL_EXPRESS = 'PRIORITY_MAIL_EXPRESS',
    PRIORITY_MAIL = 'PRIORITY_MAIL',
    FIRST_CLASS_PACKAGE_SERVICE = 'FIRST-CLASS_PACKAGE_SERVICE',
    LIBRARY_MAIL = 'LIBRARY_MAIL',
    MEDIA_MAIL = 'MEDIA_MAIL',
    BOUND_PRINTED_MATTER = 'BOUND_PRINTED_MATTER',
    USPS_CONNECT_LOCAL = 'USPS_CONNECT_LOCAL',
    USPS_CONNECT_MAIL = 'USPS_CONNECT_MAIL',
    USPS_CONNECT_REGIONAL = 'USPS_CONNECT_REGIONAL',
    USPS_GROUND_ADVANTAGE = 'USPS_GROUND_ADVANTAGE',
    USPS_RETAIL_GROUND = 'USPS_RETAIL_GROUND',
    ALL = 'ALL',
}
