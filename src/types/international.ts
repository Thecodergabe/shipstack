/**
 * International Customs Declaration details.
 * These are used during the Label generation (Shipment) phase.
 */
export type CustomsDeclaration = {
  /** Type of contents (e.g., 'GIFT', 'MERCHANDISE') */
  contentsType: string;
  /** Detailed description of the items */
  description: string;
  /** Total declared value */
  value: number;
  /** HS Tariff Code for classification */
  hsTariffCode?: string;
  /** Country of origin (ISO-3166-1 alpha-2) */
  countryOfOrigin: string;
};