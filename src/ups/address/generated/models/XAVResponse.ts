/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { XAVResponse_AddressClassification } from './XAVResponse_AddressClassification';
import type { XAVResponse_Candidate } from './XAVResponse_Candidate';
import type { XAVResponse_Response } from './XAVResponse_Response';
/**
 * XAV Response Container.
 */
export type XAVResponse = {
    Response: XAVResponse_Response;
    /**
     * Indicates query found a valid match.
     */
    ValidAddressIndicator?: string;
    /**
     * Indicates query could not find exact match. Candidate list follows.
     */
    AmbiguousAddressIndicator?: string;
    /**
     * No Candidate found.
     */
    NoCandidatesIndicator?: string;
    AddressClassification?: XAVResponse_AddressClassification;
    /**
     * Candidate Container.
     *
     * **NOTE:** For versions >= v2, this element will always be returned as an array. For requests using version = v1, this element will be returned as an array if there is more than one object and a single object if there is only 1.
     *
     */
    Candidate?: Array<XAVResponse_Candidate>;
};

