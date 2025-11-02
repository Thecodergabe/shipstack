export type CarrierConfig = {
  USPS_API_KEY?: string;
  USPS_BASE_URL?: string;
  USPS_CLIENT_ID?: string;
  USPS_CLIENT_SECRET ?: string;
  FEDEX_API_KEY?: string;
  FEDEX_BASE_URL?: string;

};

let config: CarrierConfig = {};

export function setConfig(newConfig: CarrierConfig) {
  config = { ...config, ...newConfig };
}

export function getConfig(): CarrierConfig {
  return config;
}