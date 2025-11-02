export type RateRequest = {
  carrier: "fedex" | "usps";

  // Common fields
  originZip: string;
  destZip: string;
  weightOz: number;
  lengthInches: number;
  widthInches: number;
  heightInches: number;

  // Optional USPS fields
  nonStandard?: boolean;
  mailingDate?: string;
  mailClass?: string;
  accountType?: "EPS" | "PERMIT" | "METER";
  accountNumber?: string;

  // Optional FedEx fields
  packagingType?: string; // e.g. "YOUR_PACKAGING", "FEDEX_BOX"
  pickupType?: string; // e.g. "DROPOFF_AT_FEDEX_LOCATION"
  dropoffType?: string; // e.g. "REGULAR_PICKUP"
  rateRequestType?: string[]; // e.g. ["LIST", "ACCOUNT"]
  transactionId?: string;
  locale?: string;
};


export type NormalizedRate = {
  carrier: "usps" | "fedex" | "ups";
  serviceCode: string;
  serviceName: string;
  deliveryDays?: number;
  cost: {
    amount: number;
    currency: string;
  };
  raw?: unknown;
};