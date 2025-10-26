/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TransactionDetailVO = {
    /**
     * Includes data returned which governs data payload language/translations. The TransactionDetail from the request is echoed back to the caller in the corresponding reply.<br>Example: transactionDetails
     */
    transactionDetails?: string;
    /**
     * This element has a unique identifier added in your request, helps you match the request to the reply. Maximum of 40 characters allowed.<br>Example: XXXX_XXX123XXXXX.
     */
    transactionId?: string;
};

