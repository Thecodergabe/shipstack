/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LabelBrandingUploadRequest = {
    /**
     * An optional descriptor for the image.
     *
     * Additional requirements:
     * * No special characters or spaces
     * * No more than 50 characters in length
     *
     */
    imageName?: string;
    /**
     * The plaintext contents of an .svg file base64 encoded. The image must be less than 10kb in size.
     */
    imageData: string;
};

