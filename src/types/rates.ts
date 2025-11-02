export type RateRequest = {
  carrier: "usps" | "fedex" | "ups";
  originZip: string;
  destZip: string;
  weightOz: number;
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