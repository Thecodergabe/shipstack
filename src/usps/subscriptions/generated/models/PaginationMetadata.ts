/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Links } from './Links';
export type PaginationMetadata = {
    /**
     * Total number of resources return in the API request.
     */
    totalCount?: number;
    /**
     * The current page number.
     */
    page?: number;
    /**
     * Total number of pages, based on the user provided limit and [totalCount]
     */
    totalPages?: number;
    /**
     * The number of resources returned per call, based on the user provided limit
     */
    limit: number;
    /**
     * The current offset, based on the user provided offset
     */
    offset: number;
    links?: Links;
};

