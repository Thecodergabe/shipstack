/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container with all information related to the delivery photo of the package.
 */
export type DeliveryPhoto = {
    /**
     * The indication if the country does not use postal code.  Valid values: 'true' this country does not use postal code. 'false' this country uses postal code
     */
    isNonPostalCodeCountry?: boolean;
    photo?: string;
    /**
     * The photo capture indicator. Valid values: 'Y' the photo is an photo capture. 'N' the photo is not a capture
     */
    photoCaptureInd?: string;
    /**
     * The photo disposition code. Valid values: 'V' the photo is  viewable. 'N' the photo is not viewable. 'U' the photo is not stored
     */
    photoDispositionCode?: string;
};

