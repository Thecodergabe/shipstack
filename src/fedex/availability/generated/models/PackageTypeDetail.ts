/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KeyDisplayTextVO } from './KeyDisplayTextVO';
import type { Money } from './Money';
import type { SubPackageInfo } from './SubPackageInfo';
import type { Weight } from './Weight';
/**
 * Holds the details of allowed Packaging Types for the origin and destination provided.
 */
export type PackageTypeDetail = {
    /**
     * Service Type represents some services like FEDEX_GROUND,INTERNATIONAL_PRIORITY, etc..,<br>Example: INTERNATIONAL_PRIORITY<br><a onclick='loadDocReference("servicetypes")'>Click here to see Service Types</a>
     */
    serviceType?: KeyDisplayTextVO;
    /**
     * Maximum Weight allowed for the Packaging type to send with One Fixed Rate
     */
    oneRateMaxWeightAllowed?: Weight;
    /**
     * Maximum Weight allowed for the Packaging type
     */
    maxWeightAllowed?: Weight;
    /**
     * A set of possible rate types allowed for each Package type
     */
    rateTypes?: Array<string>;
    /**
     * An array of possible packaging types, a packaging description and applicable dimensions for each Package type.
     */
    packagingInfoList?: Array<SubPackageInfo>;
    packageType?: KeyDisplayTextVO;
    /**
     * Maximum Metric Weight allowed for the Packaging type
     */
    maxMetricWeightAllowed?: Weight;
    /**
     * Maximum Metric Weight allowed for the Packaging type with One Fixed Rate
     */
    oneRateMaxMetricWeightAllowed?: Weight;
    /**
     * This is the maximum declared value.
     */
    maxDeclaredValue?: Money;
};

