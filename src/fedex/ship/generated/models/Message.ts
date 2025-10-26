/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageParameter } from './MessageParameter';
/**
 * Specifies the advisory details.
 */
export type Message = {
    /**
     * Specifies the message code for the tag created.<br>Example: code
     */
    code?: string;
    /**
     * Specifies the text message for the tag created.<br>Example: Text
     */
    text?: string;
    /**
     * Specifies the message parameters list.
     */
    parameters?: Array<MessageParameter>;
    /**
     * Specifies the message ID and value.<br>Example: localizedText
     */
    localizedText?: string;
};

