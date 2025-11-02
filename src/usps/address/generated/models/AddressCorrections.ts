/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Codes that indicate how to improve the address input to get a better match.
 *
 * Code `32` will indicate "Default address: The address you entered was found but more information is needed (such as an apartment, suite, or box number." The recommended change would be to add additional information, such as an apartment, suite, or box number, to match to a specific address.
 *
 * Code `22` will indicate "Multiple addresses were found for the information you entered, and no default exists." The address could not be resolved as entered and more information would be needed to identify the address.
 *
 */
export type AddressCorrections = Array<{
    /**
     * The code corresponding to the address correction.
     */
    code?: string;
    /**
     * This is the description of the address correction.
     */
    text?: string;
}>;
