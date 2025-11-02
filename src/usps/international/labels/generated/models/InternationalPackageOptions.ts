/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomesticLabelAddress } from './DomesticLabelAddress';
import type { Email } from './Email';
import type { PackageOptions } from './PackageOptions';
export type InternationalPackageOptions = (PackageOptions & {
    /**
     * Address where the package will be redirected to if undeliverable and  a `nonDeliveryOption` of REDIRECT is provided. This field is required if REDIRECT `nonDeliveryOption` is provided.
     *
     * The First and Last Name or Firm Name are required when `redirectAddress` is populated.
     *
     */
    redirectAddress?: (DomesticLabelAddress & {
        email?: Email;
    });
    originalPackage?: {
        /**
         * The tracking number associated with the package before it was over labeled.
         */
        originalTrackingNumber: string;
        /**
         * A 3-character code to identify the construct of the Original Label Tracking Number.
         */
        originalConstructCode: InternationalPackageOptions.originalConstructCode;
    };
    /**
     * Provides the option for a user to not create a "GX" event for the package. By default, a GX event will be created.
     */
    generateGXEvent?: boolean;
    /**
     * Setting this field to `true` will send electronic data to Postal systems within 15 minutes of label creation.
     * If invoked, this label <u><strong>cannot</strong></u> be cancelled. Instead, one must request an unused label refund – which may be subject to an admin fee.
     * Depending on time of label creation, your packages could be charged same day instead of next day.
     *
     */
    immediateManifest?: boolean;
});
export namespace InternationalPackageOptions {
    /**
     * A 3-character code to identify the construct of the Original Label Tracking Number.
     */
    export enum originalConstructCode {
        G01 = 'G01',
        I01 = 'I01',
    }
}

