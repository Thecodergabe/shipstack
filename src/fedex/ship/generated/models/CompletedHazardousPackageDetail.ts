/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ValidatedHazardousContainer } from './ValidatedHazardousContainer';
/**
 * Complete package-level hazardous commodity information for a single package.
 */
export type CompletedHazardousPackageDetail = {
    /**
     * Specifies the hazardous package regulation type.<br>Example: IATA
     */
    regulation?: string;
    /**
     * Specifies the hazardous package accessibility.<br>Example: ACCESSIBLE
     */
    accessibility?: string;
    /**
     * Specifies the label type of hazardous package.<br>Example: II_YELLOW
     */
    labelType?: string;
    /**
     * Indicates one or more approved containers used to pack dangerous goods commodities. This does not describe any individual inner receptacles that may be within this container.
     */
    containers?: Array<ValidatedHazardousContainer>;
    /**
     * When TRUE-indicates that the package can be transported only on a cargo aircraft.<br>Example: true
     */
    cargoAircraftOnly?: boolean;
    /**
     * A unique reference id that matches the package to a package configuration. This is populated if the client provided a package configuration for several packages that have the exact same dangerous goods content.<br>Example: 123456
     */
    referenceId?: string;
    /**
     * Specifies the maximum radiation level from the package (measured in microSieverts per hour at a distance of one meter from the external surface of the package, divided by 10).<br>Example: 2.45
     */
    radioactiveTransportIndex?: number;
};

