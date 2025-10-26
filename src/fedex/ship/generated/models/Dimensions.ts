/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicate the dimensions of the package.<br> Following conditions will apply: <ul><li>Dimensions are optional but when added, then all three dimensions must be indicated.</li><li>Dimensions are required with YOUR_PACKAGING package type.</li></ul>Note: The maximum/minimum dimension values varies based on the services and the packaging types. Refer <a href="https://www.fedex.com/en-us/service-guide.html" target="_blank">FedEx Service Guide</a> for service details related to DIM Weighting for FedEx Express and oversize conditions for FedEx Express and FedEx Ground.
 */
export type Dimensions = {
    /**
     * Indicate the length of the package. No implied decimal places. Maximum value: 999 <br> Example: 20
     */
    length?: number;
    /**
     * Indicate the width of the package. No implied decimal places. Maximum value: 999 <br> Example: 10
     */
    width?: number;
    /**
     * Indicate the height of the package. No implied decimal places. Maximum value: 999 <br> Example: 10
     */
    height?: number;
    /**
     * Indicate the Unit of measure for the provided dimensions.<br>Valid Values are:<li>IN - inches</li><li>CM - centimeters</li>Note: Any value other than CM including blank/null will default to IN.
     */
    units?: Dimensions.units;
};
export namespace Dimensions {
    /**
     * Indicate the Unit of measure for the provided dimensions.<br>Valid Values are:<li>IN - inches</li><li>CM - centimeters</li>Note: Any value other than CM including blank/null will default to IN.
     */
    export enum units {
        CM = 'CM',
        IN = 'IN',
    }
}

