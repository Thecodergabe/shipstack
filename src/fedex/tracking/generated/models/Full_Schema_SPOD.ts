/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrackDocumentDetail } from './TrackDocumentDetail';
import type { TrackDocumentSpecification } from './TrackDocumentSpecification';
export type Full_Schema_SPOD = {
    /**
     * This object specifies the tracking document details such as types of documents, for example, SIGNATURE_PROOF_OF_DELIVERY and also the format of tracking document. Supported values are PDF and PNG. Default is PDF.
     */
    trackDocumentDetail: TrackDocumentDetail;
    /**
     * This is the placeholder for document specification details required to identify the shipment being tracked. This includes tracking information such as tracking qualifier, carrier code, and tracking number.<br>At least one trackDocumentSpecification is required. Maximum limit is 30.
     */
    trackDocumentSpecification: Array<TrackDocumentSpecification>;
};

