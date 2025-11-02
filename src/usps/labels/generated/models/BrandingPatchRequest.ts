/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Request to update branding information for labels using JSON Patch. Refer to the IETF JSON PATCH specification at https://datatracker.ietf.org/doc/html/rfc6902 for detailed guidelines.
 */
export type BrandingPatchRequest = Array<{
    /**
     * The operation to perform on the resource.
     */
    op: 'replace';
    /**
     * The object or array location to perform the update to the resource. Must be a JSON pointer value.
     */
    path: '/imageName';
    value?: string;
}>;
