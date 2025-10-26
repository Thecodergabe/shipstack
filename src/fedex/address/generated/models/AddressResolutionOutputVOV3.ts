/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
import type { ResolvedAddress } from './ResolvedAddress';
/**
 * Indicates the resolved address parameters.
 */
export type AddressResolutionOutputVOV3 = {
    /**
     * Indicates the list of resolved addresses. The detailed resolved address includes city, state, postal information, and resolution method.
     */
    resolvedAddresses?: Array<ResolvedAddress>;
    /**
     * Indicates API Alerts includes alert type, alert code, and alert message that is received when the address is resolved.
     */
    alerts?: Array<Alert>;
};

