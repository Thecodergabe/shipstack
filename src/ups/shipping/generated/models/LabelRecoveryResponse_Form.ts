/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LabelRecovery_Form_Image } from './LabelRecovery_Form_Image';
/**
 * Container tag for the International Forms. Currently, represents Commercial Invoice for Electronic Returns Label and Electronic Import Control Label.  Applicable for Electronic Return Label and Electronic Import Control Label shipments only. Returned for request with SubVersion greater than or equal to 1707.
 */
export type LabelRecoveryResponse_Form = {
    Image: LabelRecovery_Form_Image;
};

