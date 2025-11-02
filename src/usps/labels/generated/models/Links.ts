/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Hypermedia links to related resources.
 */
export type Links = Array<{
    /**
     * The short name(s) of the relationship corresponding to the link.
     */
    rel: Array<string>;
    /**
     * A human-readable description of the link relationship.
     */
    title?: string;
    /**
     * The URL to a related resource.
     */
    href: string;
    /**
     * The HTTP method to use to access this link.
     */
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    /**
     * The media type of the resource request.
     */
    submissionMediaType?: string;
    /**
     * The media type of the resource response.
     */
    targetMediaType?: string;
}>;
