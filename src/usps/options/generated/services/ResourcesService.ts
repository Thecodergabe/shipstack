/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OptionsRequest } from '../models/OptionsRequest';
import type { OptionsResponse } from '../models/OptionsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourcesService {
    /**
     * Presents options for shipping a package
     * Based on the inputs below, the API generates a comprehensive list of shipping options that comply with USPS Shipping Standards, all within a single request.
     *
     * For deliveries with international mail classes, there are no commitments.  International delivery may vary based upon origin, destination, and customs delays.  For more details, visit [International Mail & Shipping Services](https://www.usps.com/international/mail-shipping-services.htm).
     *
     * For deliveries with return mail classes, there are no commitments.  Return delivery will vary based upon when the return item is entered into the mailstream.  For more details, visit [Managing Customer Returns](https://www.usps.com/business/return-services.htm).
     *
     * APO, DPO, and FPO locations typically do not offer commitments.  For more details, visit [Military & Diplomatic Mail](https://www.usps.com/ship/apo-fpo-dpo.htm).
     *
     * | Element                          | Description |
     * | -------------------------------- | --------|
     * | **originZIPCode**                | The origin ZIP Code&#8482; is where the package is being mailed from and is used for calculating pricing. |
     * | **destinationZIPCode**           | The destination ZIP Code&#8482; of the recipient is used for calculating pricing. |
     * | **destinationEntryFacilityType** | The Destination Entry Facility Type the package will be mailed from and is used in calculating Shipping Standards. |
     * | **packageDescription**           | Package characteristics used to price the shipment including requested mail class, weight, dimensions, and more. |
     * | **pricingOptions**               | Pricing options such as price type and supporting information needed for pricing the shipping option. |
     * @param requestBody
     * @returns OptionsResponse Successful operation
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static postOptionsSearch(
        requestBody: OptionsRequest,
    ): CancelablePromise<OptionsResponse | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/options/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from client in a short amount of time.`,
                503: `Service is unavailable`,
            },
        });
    }
}
