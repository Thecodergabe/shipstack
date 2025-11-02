/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelResponse } from '../models/CancelResponse';
import type { InternationalLabelRequest } from '../models/InternationalLabelRequest';
import type { InternationalLabelResponse } from '../models/InternationalLabelResponse';
import type { LabelReprintInternationalMultipartResponse } from '../models/LabelReprintInternationalMultipartResponse';
import type { LabelReprintRequest } from '../models/LabelReprintRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourcesService {
    /**
     * Create a international shipping label.
     * Generates a international shipping label based upon the input dimensions requested:
     *
     * | Element                       | Description |
     * | ----------------------------- | --------|
     * | **toAddress**                 | International destination address of the recipient. Used in pricing as the country. |
     * | **fromAddress**               | Domestic address where the package is being mailed from. |
     * | **senderAddress**             | Domestic address of the business. Can differ from the fromAddress in the case the business is using a third-party logistics provider or mailing from off-site locations. |
     * | **packageDescription**        | Package characteristics used to price the shipment including requested mail class, weight, dimensions, and more. |
     * | **imageInfo**                 | Additional details used to update label characteristics. |
     * | **customsForm**               | Additional details required for sending international packages.|
     *
     *
     *
     * The default media type of the response has multiple parts. Setting the Accept header to either application/json or application/xml will only affect the metadata part of the multipart response.
     *
     * **How to use this API**
     *
     * The metadata part of the multipart response representation is only in application/json format media type, as default. The application/xml media type is not supported at this time.
     *
     * Ignore the Content-Encoding header in the second part, the label image file. The contents of this part are not compressed.
     *
     * Ignore the Content-Transfer-Encoding header in the second part, the label image file. The contents of this part are always Base64 encoded.
     *
     *
     *
     * **Instructions**
     *
     * Extract the first part of the multipart response as application/json media type.
     *
     * Extract the second part of the multipart response and Base64 decode it to yield the binary image file.
     *
     * Save the binary image file, given the Content-Type header value and the filename of this part (e.g. application/pdf, label.pdf). It is recommended that you run a virus scan on the resulting downloaded file.
     *
     * @param xPaymentAuthorizationToken Payment Authorization Token from the payments API Call.
     * @param requestBody
     * @returns any Other unanticipated errors that may occur.
     * @returns InternationalLabelResponse Success.
     * @throws ApiError
     */
    public static postInternationalLabel(
        xPaymentAuthorizationToken: string,
        requestBody: InternationalLabelRequest,
    ): CancelablePromise<any | InternationalLabelResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/international-label',
            headers: {
                'X-Payment-Authorization-Token': xPaymentAuthorizationToken,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from the client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
    /**
     * Reprint an international shipping label.
     * Reprint an international shipping label. Allows for different `ImageInfo` options to be specified.
     * * Labels can only be reprinted up to the mailing date.
     * * Labels can only be reprinted up to 3 times.
     * * Canceled labels are not eligible for reprint.
     *
     * @param trackingNumber The unique tracking number of the label.
     * @param xPaymentAuthorizationToken Payment Authorization Token from the payments API Call.
     * @param requestBody
     * @returns LabelReprintInternationalMultipartResponse Successful operation.
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static postLabelReprint(
        trackingNumber: string,
        xPaymentAuthorizationToken: string,
        requestBody: LabelReprintRequest,
    ): CancelablePromise<LabelReprintInternationalMultipartResponse | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/international-label-reprint/{trackingNumber}',
            path: {
                'trackingNumber': trackingNumber,
            },
            headers: {
                'X-Payment-Authorization-Token': xPaymentAuthorizationToken,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.  There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from the client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
    /**
     * Cancel a previously requested label or request a refund on label
     * Cancel a label or submit a refund request by providing the label's tracking number.
     *
     * A label can be canceled if a Shipping Services File has not been created. If a Shipping Services File has been created, submit a refund request for an unused label. A label is eligible for a refund if:
     * - If the label has had a Shipping Services File created for it
     * - The label is not from Click-N-Ship or PC Postage
     * - Is a SCAN Form label that has had its Shipping Services File created
     *
     * Note:
     * - If the label is canceled, a Shipping Services File will not be created.
     * - If a refund request is successfully submitted, a disputeId will be returned that can be used to then track the status of the refund request. The system will only give one unique disputeId per customer reference ID (CRID) per day. Duplicate submissions of the same label, for the same CRID, on the same day, will be rejected.
     *
     * @param trackingNumber The unique tracking number of the label.
     * @param xPaymentAuthorizationToken Payment Authorization Token from the payments API Call.
     * @returns CancelResponse Successful Operation
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static deleteInternationalLabel(
        trackingNumber: string,
        xPaymentAuthorizationToken: string,
    ): CancelablePromise<CancelResponse | any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/international-label/{trackingNumber}',
            path: {
                'trackingNumber': trackingNumber,
            },
            headers: {
                'X-Payment-Authorization-Token': xPaymentAuthorizationToken,
            },
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
