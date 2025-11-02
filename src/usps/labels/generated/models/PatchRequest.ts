/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnyValue } from './AnyValue';
/**
 * IETF JSON PATCH, https://datatracker.ietf.org/doc/html/rfc6902
 */
export type PatchRequest = Array<{
    /**
     * The operation to perform on the resource.
     */
    op: 'replace';
    /**
     * The object or array location to perform the update to the resource. Must be a JSON pointer value.
     */
    path: '/packageDescription/weight' | '/packageDescription/length' | '/packageDescription/height' | '/packageDescription/width' | '/packageDescription/processingCategory' | '/packageDescription/girth' | '/packageDescription/rateIndicator' | '/packageDescription/containers';
    value?: AnyValue;
}>;
