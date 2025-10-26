export type CarrierConfig = {
  USPS_API_KEY?: string;
  FEDEX_CLIENT_ID?: string;
  FEDEX_SECRET?: string;
  UPS_CLIENT_ID?: string;
  UPS_SECRET?: string;
};

let config: CarrierConfig = {};

export function setConfig(newConfig: CarrierConfig) {
  config = { ...config, ...newConfig };
}

export function getConfig(): CarrierConfig {
  return config;
}