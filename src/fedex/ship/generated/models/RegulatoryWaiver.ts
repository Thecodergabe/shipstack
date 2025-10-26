/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Message } from './Message';
/**
 * Indicates the regulatory waiver.
 */
export type RegulatoryWaiver = {
    /**
     * Indicates the advisories list.
     */
    advisories?: Array<Message>;
    /**
     * Indicates the regulatory prohibitions description.<br>Example: description
     */
    description?: string;
    /**
     * Indicates the prohibitory ID.<br>Example: id
     */
    id?: string;
};

