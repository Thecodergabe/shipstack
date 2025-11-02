/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IndiciaImbAddress } from './IndiciaImbAddress';
import type { IndiciaImbImageInfo } from './IndiciaImbImageInfo';
import type { IndiciaImbRequestDescription } from './IndiciaImbRequestDescription';
/**
 * Indicia IMB request for letters, flats, and cards First-Class mailings.
 */
export type IndiciaImbRequest = {
    indiciaDescription: IndiciaImbRequestDescription;
    imageInfo?: IndiciaImbImageInfo;
    toAddress: IndiciaImbAddress;
    /**
     * The address where the letter, flat, or card is being mailed from.  Address elements streetAddress, city, state, ZIPCode are required.  First and Last Name or Firm are also required.
     */
    returnAddress: IndiciaImbAddress;
};

