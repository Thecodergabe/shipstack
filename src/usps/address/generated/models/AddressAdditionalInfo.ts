/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Extra information about the request.
 */
export type AddressAdditionalInfo = {
    /**
     * A specific set of digits between 00 and 99 is assigned to every address that is combined with the ZIP + 4&#174; Code to provide a unique identifier for every delivery address.
     *
     * A street address does not necessarily represent a single delivery point because a street address such as one for an apartment building may have several delivery points.
     */
    deliveryPoint?: string;
    /**
     * This is the carrier route code (values unspecified).
     */
    carrierRoute?: string;
    /**
     * The DPV Confirmation indicator identifies whether the address provided maps to a known USPS address record, whether the USPS delivers to the address or not. If the USPS does not deliver to the address, the USPS may deliver to a PO Box instead. `carrierRoute` values of `R777` and `R779`, for example, may require the shipper to ask the recipient where they receive their USPS mail, which may be different than their physical address.
     *
     * * `Y` - Address was DPV confirmed for both primary and (if present) secondary numbers.  A value of `Y` does not necessarily imply that USPS delivers to that address.
     * * `D` - Address was DPV confirmed for the primary number only, and the secondary number information was missing.
     * * `S` - Address was DPV confirmed for the primary number only, and the secondary number information was present but not confirmed.
     * * `N` - Both primary and (if present) secondary number information failed to DPV confirm.
     *
     */
    DPVConfirmation?: AddressAdditionalInfo.DPVConfirmation;
    /**
     * Indicates if the location is a [Commercial Mail Receiving Agency (CMRA)](https://faq.usps.com/s/article/Commercial-Mail-Receiving-Agency-CMRA).
     * * `Y` - Address was found in the CMRA table.
     * * `N` - Address was not found in the CMRA table.
     */
    DPVCMRA?: AddressAdditionalInfo.DPVCMRA;
    /**
     * Indicates whether this is a business address.
     * * `Y` - The address is a business address.
     * * `N` - The address is not a business address.
     *
     */
    business?: AddressAdditionalInfo.business;
    /**
     * Central Delivery is for all business office buildings and/or industrial/professional parks. This may include call windows, horizontal locked mail receptacles, and cluster box units.
     * * `Y` - The address is a central delivery point.
     * * `N` - The address is not a central delivery point.
     *
     */
    centralDeliveryPoint?: AddressAdditionalInfo.centralDeliveryPoint;
    /**
     * Indicates whether the location designated by the address is occupied.
     * * `Y` - The address is not occupied.
     * * `N` - The address is occupied.
     *
     */
    vacant?: AddressAdditionalInfo.vacant;
};
export namespace AddressAdditionalInfo {
    /**
     * The DPV Confirmation indicator identifies whether the address provided maps to a known USPS address record, whether the USPS delivers to the address or not. If the USPS does not deliver to the address, the USPS may deliver to a PO Box instead. `carrierRoute` values of `R777` and `R779`, for example, may require the shipper to ask the recipient where they receive their USPS mail, which may be different than their physical address.
     *
     * * `Y` - Address was DPV confirmed for both primary and (if present) secondary numbers.  A value of `Y` does not necessarily imply that USPS delivers to that address.
     * * `D` - Address was DPV confirmed for the primary number only, and the secondary number information was missing.
     * * `S` - Address was DPV confirmed for the primary number only, and the secondary number information was present but not confirmed.
     * * `N` - Both primary and (if present) secondary number information failed to DPV confirm.
     *
     */
    export enum DPVConfirmation {
        Y = 'Y',
        D = 'D',
        S = 'S',
        N = 'N',
    }
    /**
     * Indicates if the location is a [Commercial Mail Receiving Agency (CMRA)](https://faq.usps.com/s/article/Commercial-Mail-Receiving-Agency-CMRA).
     * * `Y` - Address was found in the CMRA table.
     * * `N` - Address was not found in the CMRA table.
     */
    export enum DPVCMRA {
        Y = 'Y',
        N = 'N',
    }
    /**
     * Indicates whether this is a business address.
     * * `Y` - The address is a business address.
     * * `N` - The address is not a business address.
     *
     */
    export enum business {
        Y = 'Y',
        N = 'N',
    }
    /**
     * Central Delivery is for all business office buildings and/or industrial/professional parks. This may include call windows, horizontal locked mail receptacles, and cluster box units.
     * * `Y` - The address is a central delivery point.
     * * `N` - The address is not a central delivery point.
     *
     */
    export enum centralDeliveryPoint {
        Y = 'Y',
        N = 'N',
    }
    /**
     * Indicates whether the location designated by the address is occupied.
     * * `Y` - The address is not occupied.
     * * `N` - The address is occupied.
     *
     */
    export enum vacant {
        Y = 'Y',
        N = 'N',
    }
}

