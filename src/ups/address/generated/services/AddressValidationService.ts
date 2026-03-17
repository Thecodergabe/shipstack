/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { XAVRequestWrapper } from '../models/XAVRequestWrapper';
import type { XAVResponseWrapper } from '../models/XAVResponseWrapper';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AddressValidationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Address Validation
     * The Address Validation Street Level API can be used to check addresses
     * against the United States Postal Service database of valid addresses in the
     * U.S. and Puerto Rico.
     *
     * <i>NOTE:</i> In the Customer Integration Environment, Street Level Address Validation will only produce results for addresses in New York (NY) and California (CA).
     *
     * @param requestoption Identifies the optional processing to be performed. If not present or invalid value then an error will be sent back.
     *
     * Valid values:
     * - 1 - Address Validation
     * - 2 - Address Classification
     * - 3 - Address Validation and Address Classification.
     *
     * For a list of valid values, refer to Address Validation API Supported Countries or Territories in the Appendix.
     *
     * @param requestBody Generate sample code for popular API requests by selecting an example below. To view a full sample request and response, first click "Authorize" and enter your application credentials, then populate the required parameters above and click "Try it out".
     * @param regionalrequestindicator Valid values: True or False.  If True, either the region element or any  combination of Political Division 1,  Political Division 2, PostcodePrimaryLow and the PostcodeExtendedLow fields will  be recognized for validation in addition to  the urbanization element. If False or no  indicator, street level address validation  is provided
     * @param maximumcandidatelistsize Valid values: 0 – 50 The maximum number of Candidates to  return for this request. If not provided,  the default size of 15 is returned.
     * @param version Identifies the version of the API.
     *
     * Valid  values:
     * - v2
     *
     * @returns XAVResponseWrapper Successful Operation
     * @throws ApiError
     */
    public addressValidation(
        requestoption: number,
        requestBody: XAVRequestWrapper,
        regionalrequestindicator?: string,
        maximumcandidatelistsize?: number,
        version: string = 'v2',
    ): CancelablePromise<XAVResponseWrapper> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/addressvalidation/{version}/{requestoption}',
            path: {
                'requestoption': requestoption,
                'version': version,
            },
            query: {
                'regionalrequestindicator': regionalrequestindicator,
                'maximumcandidatelistsize': maximumcandidatelistsize,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid Request`,
                401: `Unauthorized Request`,
                403: `Blocked Merchant`,
                429: `Rate Limit Exceeded`,
            },
        });
    }
    /**
     * @deprecated
     * Address Validation
     * The Address Validation Street Level API can be used to check addresses against the United States Postal Service database of valid addresses in the U.S. and Puerto Rico.
     * @param requestoption Identifies the optional processing to be performed. If not present or invalid value then an error will be sent back.
     *
     * Valid values:
     *
     * - 1 - Address Validation
     * - 2 - Address Classification
     * - 3 - Address Validation and Address Classification.
     *
     * For a list of valid values, refer to Address Validation API Supported Countries or Territories in the Appendix.
     *
     * @param requestBody Generate sample code for popular API requests by selecting an example below. To view a full sample request and response, first click "Authorize" and enter your application credentials, then populate the required parameters above and click "Try it out".
     * @param regionalrequestindicator Valid values: True or False.  If True, either the region element or any  combination of Political Division 1,  Political Division 2, PostcodePrimaryLow and the PostcodeExtendedLow fields will  be recognized for validation in addition to  the urbanization element. If False or no  indicator, street level address validation  is provided
     * @param maximumcandidatelistsize Valid values: 0 – 50 The maximum number of Candidates to  return for this request. If not provided,  the default size of 15 is returned.
     * @param deprecatedVersion Identifies the version of the API.
     *
     * Valid  values:
     * - v1
     *
     * @returns XAVResponseWrapper Successful Operation
     * @throws ApiError
     */
    public deprecatedAddressValidation(
        requestoption: number,
        requestBody: XAVRequestWrapper,
        regionalrequestindicator?: string,
        maximumcandidatelistsize?: number,
        deprecatedVersion: string = 'v1',
    ): CancelablePromise<XAVResponseWrapper> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/addressvalidation/{deprecatedVersion}/{requestoption}',
            path: {
                'requestoption': requestoption,
                'deprecatedVersion': deprecatedVersion,
            },
            query: {
                'regionalrequestindicator': regionalrequestindicator,
                'maximumcandidatelistsize': maximumcandidatelistsize,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid Request`,
                401: `Unauthorized Request`,
                403: `Blocked Merchant`,
                429: `Rate Limit Exceeded`,
            },
        });
    }
}
