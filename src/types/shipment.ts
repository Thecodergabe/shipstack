/**
 * Generic request structure for generating a shipping label.
 * * This type serves as the input for all carrier-specific label builders. 
 * It consolidates sender, recipient, and package dimensions into a 
 * single, carrier-agnostic payload.
 */
export type ShipmentRequest = {
  /** The carrier to be used for the shipment (e.g., 'usps', 'fedex'). */
  carrier: "usps" | "fedex" | "ups";
  
  /** * The carrier-specific service identifier.
   * Matches the 'serviceCode' returned by the Rates API.
   */
  serviceCode: string; 

  /** * Origin address details.
   */
  fromAddress: {
    /** Full name of the sender. */
    name: string;
    /** Optional business name. */
    company?: string;
    /** Array of street address lines (e.g., ['123 Main St', 'Suite 400']). */
    streetLines: string[];
    /** City name. */
    city: string;
    /** 2-character state or province code. */
    stateOrProvinceCode: string;
    /** 5 or 9-digit postal code. */
    postalCode: string;
    /** ISO-3166-1 alpha-2 country code. */
    countryCode: string;
  };

  /** * Destination address details.
   */
  toAddress: {
    /** Full name of the recipient. */
    name: string;
    /** Optional business name. */
    company?: string;
    /** Array of street address lines. */
    streetLines: string[];
    /** City name. */
    city: string;
    /** 2-character state or province code. */
    stateOrProvinceCode: string;
    /** 5 or 9-digit postal code. */
    postalCode: string;
    /** ISO-3166-1 alpha-2 country code. */
    countryCode: string;
  };

  /** * Physical characteristics and contents of the package.
   */
  package: {
    /** Weight in Ounces. */
    weightOz: number;
    /** Length in inches. */
    lengthInches: number;
    /** Width in inches. */
    widthInches: number;
    /** Height in inches. */
    heightInches: number;
    /** Optional description of package contents for internal reference or labels. */
    description?: string;
  };
};

/**
 * Normalized response representing a successfully created shipment and label.
 * * This structure extracts the most critical data from complex carrier 
 * responses (like the USPS Labels v3 JSON) to provide a simple object for 
 * frontend rendering or database storage.
 */
export type NormalizedShipment = {
  /** The carrier that generated the shipment. */
  carrier: "usps" | "fedex" | "ups";
  /** The primary tracking number assigned to the package. */
  trackingNumber: string;
  /** The carrier-specific service identifier used. */
  serviceCode: string;
  /** Human-readable service name (e.g., 'USPS Ground Advantage'). */
  serviceName: string;
  
  /** * Label image metadata and data.
   */
  label: {
    /** The file format of the generated label image. */
    format: "PDF" | "PNG" | "ZPL" | "GIF";
    /** The actual label data encoded as a Base64 string. */
    base64: string;
  };

  /** * Financial details associated with the created label.
   */
  charges?: {
    /** The final amount charged/quoted for the label. */
    amount: number;
    /** Three-letter currency code (e.g., 'USD'). */
    currency: string;
  };

  /** * The original raw response from the carrier API.
   * Useful for auditing or retrieving advanced metadata (e.g., routing codes).
   */
  raw?: unknown;
};