/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransitTimeRequestedPackageLineItem_packageSpecialServices_alcoholDetail } from './TransitTimeRequestedPackageLineItem_packageSpecialServices_alcoholDetail';
import type { TransitTimeRequestedPackageLineItem_packageSpecialServices_batteryDetails } from './TransitTimeRequestedPackageLineItem_packageSpecialServices_batteryDetails';
import type { TransitTimeRequestedPackageLineItem_packageSpecialServices_codDetail } from './TransitTimeRequestedPackageLineItem_packageSpecialServices_codDetail';
import type { TransitTimeRequestedPackageLineItem_packageSpecialServices_dangerousGoodsDetail } from './TransitTimeRequestedPackageLineItem_packageSpecialServices_dangerousGoodsDetail';
import type { TransitTimeRequestedPackageLineItem_packageSpecialServices_dryIceWeight } from './TransitTimeRequestedPackageLineItem_packageSpecialServices_dryIceWeight';
/**
 * Optional.<br>These special services are available at the package level for some or all service types.  Indicated if rate data is being requested for the special services.
 */
export type TransitTimeRequestedPackageLineItem_packageSpecialServices = {
    /**
     * Optional.<br>Specify special services requested for the package.<br>Example: ["DANGEROUS_GOODS"]<br>a onclick='loadDocReference("packagelevelspecialservicetypes")'>Click here to see Package Special Service Types</a>
     */
    specialServiceTypes?: Array<string>;
    codDetail?: TransitTimeRequestedPackageLineItem_packageSpecialServices_codDetail;
    dryIceWeight?: TransitTimeRequestedPackageLineItem_packageSpecialServices_dryIceWeight;
    dangerousGoodsDetail?: TransitTimeRequestedPackageLineItem_packageSpecialServices_dangerousGoodsDetail;
    alcoholDetail?: TransitTimeRequestedPackageLineItem_packageSpecialServices_alcoholDetail;
    /**
     * Indicates the box count used for piece count verification.
     */
    pieceCountVerificationBoxCount?: number;
    batteryDetails?: TransitTimeRequestedPackageLineItem_packageSpecialServices_batteryDetails;
};

