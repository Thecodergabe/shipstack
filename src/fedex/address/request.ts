/**
 * Wraps a single address into the FedEx Address Resolution 'body' format.
 * * @param streetLines - Array of address lines.
 * @param city - City name.
 * @param state - 2-letter state code.
 * @param zip - Postal code.
 * @param country - ISO country code (default 'US').
 * @returns {any} A formatted FedEx address validation payload.
 */
export function buildFedexAddressRequest(
  streetLines: string[], 
  city: string, 
  state: string, 
  zip: string, 
  country: string = "US"
): any {
  return {
    addressesToValidate: [
      {
        address: {
          streetLines,
          city,
          stateOrProvinceCode: state,
          postalCode: zip,
          countryCode: country,
        },
      },
    ],
  };
}