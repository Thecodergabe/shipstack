/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Uses for:
 *
 * The address of the business sending the package. Can differ from the `fromAddress` in the case the business is using a third-party logistics provider or mailing from off-site locations.
 *
 * Notes:
 * - The First and Last Name or Firm Name are always required.
 * - `senderAddress` is required when the `shipperVisibilityMethod` field is set to `SENDER_INFORMATION`.
 * - If the generated label has a customs form, the address and contact details from the `senderAddress` will be printed in the Sender Section of the customs form instead of the `fromAddress` or `returnAddress`.
 */
export type DomesticLabelSenderAddress = Record<string, any>;
