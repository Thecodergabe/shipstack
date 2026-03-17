/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * AddressClassification Container.
 */
export type Candidate_AddressClassification = {
    /**
     * Contains the classification code of the address:
     * 0 - UnClassified
     * 1 - Commercial
     * 2 - Residential
     */
    Code: string;
    /**
     * Contains the text description of the address classification code (see Code above).
     */
    Description: string;
};

