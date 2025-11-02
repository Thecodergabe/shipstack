/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Response schema for getting a single label branding image.
 */
export type LabelBrandingGetImageResponse = {
    /**
     * UUID of the image. Used in Domestic Labels and Return Labels requests to apply an image to a label.
     */
    imageUUID?: string;
    /**
     * The descriptor text that was optionally associated with the image when the image was created.
     */
    imageName?: string;
    /**
     * The base64 image data associated with your image.
     */
    imageData?: string;
    /**
     * The time that the image was created.
     */
    createdDateTime?: string;
};

