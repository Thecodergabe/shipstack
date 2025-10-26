/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Version = {
    /**
     * This version is incremented when significant changes are made to the API functionality. These could be breaking changes and might require code-adjustments from clients. Accepts only numbers
     */
    major?: number;
    /**
     * This represents a backward-compatible bug fix or minor adjustment to an existing API functionality. This is the second number in API versioning scheme. Accepts only numbers
     */
    minor?: number;
    /**
     * This represents a backward-compatible bug fix or minor adjustment to an existing API functionality. This is the third number in API versioning scheme. Accepts only numbers
     */
    patch?: number;
};

