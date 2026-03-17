/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlertDetail_ElementLevelInformation } from './AlertDetail_ElementLevelInformation';
export type Response_AlertDetail = {
    /**
     * Warning code returned by the system.
     */
    Code: string;
    /**
     * Warning messages returned by the system.
     */
    Description: string;
    ElementLevelInformation?: AlertDetail_ElementLevelInformation;
};

