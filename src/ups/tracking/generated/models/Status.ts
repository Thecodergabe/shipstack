/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The container which has the current package status
 */
export type Status = {
    /**
     * The current status code.
     */
    code?: string;
    /**
     * The current status description. Note that this field will be translated based on the locale provided in the request.
     */
    description?: string;
    /**
     * The current status in simplified text. This is a supplementary description providing additional information on the status of the package. Note that this field will be translated based on the locale provided in the request.
     */
    simplifiedTextDescription?: string;
    /**
     * The activity package detail status code see API Codes for possible values.
     */
    statusCode?: string;
    /**
     * The activity status type.
     */
    type?: string;
};

