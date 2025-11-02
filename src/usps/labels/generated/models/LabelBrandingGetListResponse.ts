/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Paginated response schema for getting a list of label branding images.
 */
export type LabelBrandingGetListResponse = {
    /**
     * List of all label branding image names associated with the USPS Customer Registration ID (CRID).
     */
    images?: Array<{
        /**
         * UUID of the image. Used in Domestic Labels and Return Labels requests to apply an image to a label.
         */
        imageUUID?: string;
        /**
         * The descriptor text that was optionally associated with the image when the image was created.
         */
        imageName?: string;
        /**
         * The datetime that the image was created.
         */
        createdDateTime?: string;
        /**
         * The base64 image data associated with your image.
         */
        imageData?: string;
    }>;
    /**
     * Current limit on number of included results.
     */
    limit?: number;
    /**
     * Number of items skipped.
     */
    offset?: number;
    /**
     * Total number of items.
     */
    totalCount?: number;
};

