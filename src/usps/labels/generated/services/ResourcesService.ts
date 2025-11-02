/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BrandingPatchRequest } from '../models/BrandingPatchRequest';
import type { CancelResponse } from '../models/CancelResponse';
import type { IMBCancelResponse } from '../models/IMBCancelResponse';
import type { IndiciaImbRequest } from '../models/IndiciaImbRequest';
import type { IndiciaImbResponse } from '../models/IndiciaImbResponse';
import type { IndiciaRequest } from '../models/IndiciaRequest';
import type { IndiciaResponse } from '../models/IndiciaResponse';
import type { LabelBrandingDeleteResponse } from '../models/LabelBrandingDeleteResponse';
import type { LabelBrandingGetImageResponse } from '../models/LabelBrandingGetImageResponse';
import type { LabelBrandingGetListResponse } from '../models/LabelBrandingGetListResponse';
import type { LabelBrandingPatchResponse } from '../models/LabelBrandingPatchResponse';
import type { LabelBrandingUploadRequest } from '../models/LabelBrandingUploadRequest';
import type { LabelBrandingUploadResponse } from '../models/LabelBrandingUploadResponse';
import type { LabelMetadata } from '../models/LabelMetadata';
import type { LabelMultiPartResponse } from '../models/LabelMultiPartResponse';
import type { LabelReprintMultiPartResponse } from '../models/LabelReprintMultiPartResponse';
import type { LabelReprintRequest } from '../models/LabelReprintRequest';
import type { LabelRequest } from '../models/LabelRequest';
import type { PatchRequest } from '../models/PatchRequest';
import type { ReturnLabelMultiPartResponse } from '../models/ReturnLabelMultiPartResponse';
import type { ReturnLabelRequest } from '../models/ReturnLabelRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourcesService {
    /**
     * Create a domestic shipping label.
     * Generates a shipping label based upon the following:
     *
     * | Element                       | Description |
     * | ----------------------------- | --------|
     * | **toAddress**                 | Destination address of the recipient. The destination ZIP Code&#8482; is used for calculating pricing. |
     * | **fromAddress**               | Address where the package is being mailed from. The origin ZIP Code&#8482; is used for calculating pricing. |
     * | **senderAddress**             | Address of the business . Can differ from the fromAddress in the case the business is using a third-party logistics provider or mailing from off-site locations. |
     * | **returnAddress**             | Address where the package should be returned to if it is deemed undeliverable or returned to sender. This address will be printed in the return address block of the label. |
     * | **packageDescription**        | Package characteristics used to price the shipment including requested mail class, weight, dimensions, and more. |
     * | **imageInfo**                 | Additional details used to determine how to generate the label image. |
     * | **customsForm**               | Additional details required when creating shipments originating from or destinating to MPOs, APOs, FPOs, or DPOs (Military, Army, Fleet, and Diplomatic Post Offices) and some Military and U.S., Possessions, Territories, and Freely Associated States (PTFAS).|
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
     * Ignore the Content-Encoding header in the third part, the receipt image file. The contents of this part are not compressed.
     *
     * Ignore the Content-Transfer-Encoding header in the third part, the receipt image file. The contents of this part are always Base64 encoded.
     *
     * **Instructions**
     *
     * Extract the first part of the multipart response as application/json media type.
     *
     * Extract the second part of the multipart response and Base64 decode it to yield the binary image file.
     *
     * Save the binary image file, given the Content-Type header value and the filename of this part (e.g. application/pdf, label.pdf). It is recommended that you run a virus scan on the resulting downloaded file.
     *
     * Extract the third part of the multipart response and Base64 decode it to yield the binary image file.
     *
     * Save the binary image file, given the Content-Type header value and the filename of this part (e.g. application/pdf, receipt.pdf). It is recommended that you run a virus scan on the resulting downloaded file.
     * @param xPaymentAuthorizationToken Payment Authorization Token from the payments API Call.
     *
     * @param requestBody
     * @returns LabelMultiPartResponse Successful operation.
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static postLabel(
        xPaymentAuthorizationToken: string,
        requestBody: LabelRequest,
    ): CancelablePromise<LabelMultiPartResponse | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/label',
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
     * Create a domestic returns shipping label.
     * Generates a returns shipping label based upon the input dimensions requested.
     *
     * | Element                        | Description |
     * | ------------------------------ | -------- |
     * | **toAddress**                  | Destination address of the return package. The destination ZIP Code&#8482; is used for calculating pricing. |
     * | **fromAddress**                | Address where the package the recipient is returning the package from. The origin ZIP Code&#8482; is used for calculating pricing. |
     * | **senderAddress**              | Address of the business . Can differ from the toAddress in the case the business is using a third-party logistics provider or mailing from off-site locations.   |
     * | **returnAddress**              | Address where the package should be returned to if it is deemed undeliverable or returned to sender. This address will be printed in the return address block of the label. This would represent a secondary return address if it cannot be delivered to the toAddress.  This will avoid an undeliverable as addressed (UAA) going back to the original purchaser.   |
     * | **packageDescription**         | Package characteristics used to price the shipment including requested mail class, weight, dimensions, and more. |
     * | **imageInfo**                  | Additional details used to update label characteristics |
     * | **customsForm**                | Additional details required when creating shipments originating from or destinating to MPOs, APOs, FPOs, or DPOs (Military, Army, Fleet, and Diplomatic Post Offices) and some Military and U.S. Possessions, Territories, and Freely Associated States (PTFAS).|
     *
     *
     * The default media type of the response has multiple parts. Setting the Accept header to either
     * `application/json` or `application/xml` will only affect the metadata part of the multipart response.
     *
     * **How to use this API**
     *
     * The metadata part of the multipart response representation is only in application/json
     * format media type, as default.
     *
     * Ignore the Content-Encoding header in the second part, the label image file. The contents of this part are not compressed.
     *
     *
     * Ignore the Content-Transfer-Encoding header in the second part, the label image file. The contents of this part are always Base64 encoded.
     *
     *
     * Ignore the Content-Encoding header in the third part, the receipt image file. The contents of this part are not compressed.
     *
     *
     * Ignore the Content-Transfer-Encoding header in the third part, the receipt image file. The contents of this part are always Base64 encoded.
     *
     * **Instructions**
     *
     * Extract the first part of the multipart response as application/json media type.
     *
     * Extract the second part of the multipart response and Base64 decode it to yield the binary image file.
     *
     * Save the binary image file, given the Content-Type header value and the filename of this part (e.g. application/pdf, label.pdf). It is recommended that you run a virus scan on the resulting downloaded file.
     *
     * Extract the third part of the multipart response and Base64 decode it to yield the binary image file.
     *
     * Save the binary image file, given the Content-Type header value and the filename of this part (e.g. application/pdf, receipt.pdf). It is recommended that you run a virus scan on the resulting downloaded file.
     *
     * @param xPaymentAuthorizationToken Payment Authorization Token from the payments API Call.
     *
     * @param requestBody
     * @returns ReturnLabelMultiPartResponse Success
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static postReturnLabel(
        xPaymentAuthorizationToken: string,
        requestBody: ReturnLabelRequest,
    ): CancelablePromise<ReturnLabelMultiPartResponse | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/return-label',
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
     * A label can be canceled if a Shipping Services File has not been created. If a Shipping Services File has been created, submit a refund request for an unused label.  A label is eligible for a refund if:
     * - If the label has had a Shipping Services File created for it
     * - The label is not from Click-N-Ship or PC Postage
     * - Is a SCAN Form label that has had its Shipping Services File created
     *
     * Note:
     * - If the label is canceled, a Shipping Services File will not be created.
     * - If a refund request is successfully submitted, a disputeId will be returned that can be used to then track the status of the refund request. The system will only give one unique disputeId per customer reference ID (CRID) per day. Duplicate submissions of the same label, for the same CRID, on the same day, will be rejected.
     *
     * @param trackingNumber The tracking number of the domestic label.
     * @param xPaymentAuthorizationToken Payment Authorization Token from the payments API Call.
     *
     * @returns CancelResponse Successful Operation
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static deleteLabel(
        trackingNumber: string,
        xPaymentAuthorizationToken: string,
    ): CancelablePromise<CancelResponse | any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/label/{trackingNumber}',
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
                429: `Too Many Requests. Too many requests have been received from the client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
    /**
     * Edit label attributes.
     * Allow customers to edit package attributes for previously created labels including weight, dimensions, rate indicator, processing category and containers. These fields eligible for editing will not impact label images, so previous label images can still be used.
     * Changing these rate ingredients may effect the prices of the label.
     * Therefore, the Payment Authorization token is required.
     *
     * Note: Label edits will not be supported for the following scenarios, instead unused label refunds should be requested and new labels should be created.
     * * All label edits are disallowed if the original label was created with a suppressPostage = false
     * * No dimensional updates are supported for Cubic Softpack Labels
     * * Cubic labels can not be edited to non-cubic rate indicators
     * @param trackingNumber The tracking number of the domestic label.
     * @param xPaymentAuthorizationToken Payment Authorization Token from the payments API Call.
     *
     * @param requestBody
     * @returns LabelMetadata Success
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static patchEdit(
        trackingNumber: string,
        xPaymentAuthorizationToken: string,
        requestBody: PatchRequest,
    ): CancelablePromise<LabelMetadata | any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/label/{trackingNumber}',
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
     * Create a First-Class letter, flat, or card indicia.
     * Generates a First-Class indicia for use on letter, flat, or card mailings.
     *
     * Notes:
     * - Only supported for 'PAYER' Roles with an EPS accountType.
     * - Indicia should be placed in the top right corner of letters, flats, and cards in order to avoid delays in processing.
     * - An Indicia created using this endpoint is non-refundable and cannot be refunded using the DELETE /indicia/imb endpoint.
     *
     * @param xPaymentAuthorizationToken Payment Authorization Token from the payments API Call.
     *
     * @param requestBody Indicia request payload containing necessary data for generating a First-Class indicia.
     * @returns any Other unanticipated errors that may occur.
     * @returns IndiciaResponse Success
     * @throws ApiError
     */
    public static postIndicia(
        xPaymentAuthorizationToken: string,
        requestBody: IndiciaRequest,
    ): CancelablePromise<any | IndiciaResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/indicia',
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
     * Create an Intelligent Mail Barcode (IMB) label for First-Class letters, flats, and cards.
     * Generates an Intelligent Mail Barcode (IMB) label for First-Class letters, flats, and cards. [See specification USPS-B-3200](https://postalpro.usps.com/node/2190).
     *
     * Notes:
     * - Only supported for 'PAYER' Roles with an EPS accountType.
     * - When IMB labels are placed on letters, flats, or cards that are larger than the label itself, the label should be placed in the top right corner in order to avoid delays in processing.
     *
     * @param xPaymentAuthorizationToken Payment Authorization Token from the payments API Call.
     *
     * @param requestBody
     * @returns any Other unanticipated errors that may occur.
     * @returns IndiciaImbResponse Success
     * @throws ApiError
     */
    public static postIndiciaImb(
        xPaymentAuthorizationToken: string,
        requestBody: IndiciaImbRequest,
    ): CancelablePromise<any | IndiciaImbResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/indicia/imb',
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
     * Cancel a previously requested Intelligent Mail Barcode (IMB) label for First-Class letters, flats, and cards.
     * Cancel an Intelligent Mail Barcode (IMB) label for First-Class letters, flats, and cards or submit a refund request by providing the IMB.
     *
     * An IMB can be canceled if it has not yet been manifested. If it has been manifested, a refund request will be submitted for the unused IMB.
     *
     * Indicia without an IMB cannot be canceled.
     *
     * Note:
     * - You can only request a refund of an IMB once.
     *
     * @param imb The Intelligent Mail Barcode (IMB) for First-Class letters, flats, and cards.
     * @param xPaymentAuthorizationToken Payment Authorization Token from the payments API Call.
     *
     * @returns IMBCancelResponse Successful Operation
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static deleteIndiciaImb(
        imb: string,
        xPaymentAuthorizationToken: string,
    ): CancelablePromise<IMBCancelResponse | any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/indicia/imb/{imb}',
            path: {
                'imb': imb,
            },
            headers: {
                'X-Payment-Authorization-Token': xPaymentAuthorizationToken,
            },
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
     * Upload an SVG image to be used as a label branding image.
     * The USPS Logo Branding endpoint allows you to upload your custom image or
     * logo to USPS APIs. A UUID is generated for your custom image to
     * leverage for outbound Domestic Labels and Return Labels requests. The
     * user will indicate how their custom image or multiple images will
     * display, and the option to specify the shape of their image when
     * generating labels and return labels.
     *
     * Note:
     * * It may take up to 15 minutes for the label image to propagate to all regions for label usage.
     * * There is a limit of 100 images to be stored per customer reference ID (CRID). The CRID will be taken from the `LABEL_OWNER` role of your Payment Authorization token.
     * * The root svg element requires a `viewbox` attribute
     * * The displayed aspect ratio of images on a label is 1:1 for square images and 33:5 for rectangle images.
     * * Recommendation: Allow the artwork inside the viewbox to occupy 100% of the space. This will allow your logo to be shown at the highest resolution possible.
     * * `<script/>` element tags and `DOCTYPE` definitions are not allowed. The `<use/>` and `<image/>` tags are not allowed to use the attribute `xlink:href`.
     *
     * @param xPaymentAuthorizationToken Payment Authorization Token from the payments API Call.
     *
     * @param requestBody
     * @returns any Other unanticipated errors that may occur.
     * @returns LabelBrandingUploadResponse Success
     * @throws ApiError
     */
    public static postLabelBranding(
        xPaymentAuthorizationToken: string,
        requestBody: LabelBrandingUploadRequest,
    ): CancelablePromise<any | LabelBrandingUploadResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/branding',
            headers: {
                'X-Payment-Authorization-Token': xPaymentAuthorizationToken,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from the client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
    /**
     * Retrieve a paginated list of label branding images associated with your customer reference ID (CRID). You can sort the response using a query parameter.
     * Retrieve a paginated list of label branding images associated with your customer reference ID (CRID). The response may be sorted using the URL query parameters defined below.
     *
     * @param xPaymentAuthorizationToken Payment Authorization Token from the payments API Call.
     *
     * @param limit The number of items to return.
     * @param offset The number of items to skip before returning the results.
     * @param orderBy Sort results in ascending or descending order.
     * @param sortBy Sort by field, e.g., `imageName` or `createdDateTime`.
     * @returns LabelBrandingGetListResponse Success
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static getListLabelBranding(
        xPaymentAuthorizationToken: string,
        limit: number = 10,
        offset?: number,
        orderBy: 'asc' | 'desc' = 'desc',
        sortBy: 'imageName' | 'createdDateTime' = 'createdDateTime',
    ): CancelablePromise<LabelBrandingGetListResponse | any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/branding',
            headers: {
                'X-Payment-Authorization-Token': xPaymentAuthorizationToken,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'orderBy': orderBy,
                'sortBy': sortBy,
            },
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
     * Retrieve a label branding image associated with your customer reference ID (CRID).
     * Retrieve a label branding image associated with your customer reference ID (CRID).
     * The CRID will be taken from the `LABEL_OWNER` role of your Payment Authorization token.
     *
     * @param imageUuid The UUID of a label branding image
     * @param xPaymentAuthorizationToken Payment Authorization Token from the payments API Call.
     *
     * @returns LabelBrandingGetImageResponse Success
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static getSingleLabelBranding(
        imageUuid: string,
        xPaymentAuthorizationToken: string,
    ): CancelablePromise<LabelBrandingGetImageResponse | any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/branding/{imageUUID}',
            path: {
                'imageUUID': imageUuid,
            },
            headers: {
                'X-Payment-Authorization-Token': xPaymentAuthorizationToken,
            },
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
     * Delete a previously uploaded label branding image by imageUUID.
     * Delete a label branding image associated with your customer reference ID (CRID).
     * The CRID will be taken from the `LABEL_OWNER` role of your Payment Authorization token.
     *
     * @param imageUuid The UUID of a label branding image
     * @param xPaymentAuthorizationToken Payment Authorization Token from the payments API Call.
     *
     * @returns LabelBrandingDeleteResponse Success
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static deleteLabelBranding(
        imageUuid: string,
        xPaymentAuthorizationToken: string,
    ): CancelablePromise<LabelBrandingDeleteResponse | any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/branding/{imageUUID}',
            path: {
                'imageUUID': imageUuid,
            },
            headers: {
                'X-Payment-Authorization-Token': xPaymentAuthorizationToken,
            },
            errors: {
                400: `Bad Request. There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from the client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
    /**
     * Rename the previously uploaded Label Branding Image by imageUUID.
     * Rename the previously uploaded Label Branding Image associated with your customer reference ID (CRID).
     * The CRID will be taken from the `LABEL_OWNER` role of your Payment Authorization token.
     *
     * @param imageUuid The UUID of a label branding image
     * @param xPaymentAuthorizationToken Payment Authorization Token from the payments API Call.
     *
     * @param requestBody
     * @returns LabelBrandingPatchResponse Success
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static patchLabelBranding(
        imageUuid: string,
        xPaymentAuthorizationToken: string,
        requestBody: BrandingPatchRequest,
    ): CancelablePromise<LabelBrandingPatchResponse | any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/branding/{imageUUID}',
            path: {
                'imageUUID': imageUuid,
            },
            headers: {
                'X-Payment-Authorization-Token': xPaymentAuthorizationToken,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. There is an error in the received request.`,
                401: `Unauthorized request.`,
                403: `Access is denied.`,
                429: `Too Many Requests. Too many requests have been received from the client in a short amount of time.`,
                503: `Service is unavailable.`,
            },
        });
    }
    /**
     * Reprint a domestic shipping label.
     * Reprint a Domestic Outbound or Domestic Return shipping label. Allows for different `ImageInfo` options to be specified.
     * * Receipts cannot be reprinted.
     * * Labels can only be reprinted up to the mailing date.
     * * Labels can only be reprinted up to 3 times.
     * * Canceled labels are not eligible for reprint.
     *
     * @param trackingNumber The tracking number of the domestic label.
     * @param xPaymentAuthorizationToken Payment Authorization Token from the payments API Call.
     *
     * @param requestBody
     * @returns LabelReprintMultiPartResponse Successful operation.
     * @returns any Other unanticipated errors that may occur.
     * @throws ApiError
     */
    public static postLabelReprint(
        trackingNumber: string,
        xPaymentAuthorizationToken: string,
        requestBody: LabelReprintRequest,
    ): CancelablePromise<LabelReprintMultiPartResponse | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/label-reprint/{trackingNumber}',
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
}
