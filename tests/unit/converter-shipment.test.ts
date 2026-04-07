import { describe, it, expect } from 'vitest';
import { convertUspsShipmentResponse } from '../../src/converters/shipment/usps';
import { normalizeFedexShipResponse } from '../../src/converters/shipment/fedex';
import { normalizeUpsShipResponse } from '../../src/converters/shipment/ups';

describe('Shipment Converters', () => {
  it('converts USPS shipment response', () => {
    const raw = { trackingNumber: 'abc', labelImage: 'base64_label', packageDescription: { mailClass: 'Priority Mail' } };
    const result = convertUspsShipmentResponse(raw);
    expect(result.trackingNumber).toBe('abc');
    expect(result.serviceName).toContain('Priority Mail');
  });

  it('normalizes FedEx shipment response', () => {
    const raw = {
      output: {
        transactionShipments: [{
          masterTrackingNumber: 'fedex_123',
          pieceResponses: [{
            packageDocuments: [{ contentType: 'PDF', encodedLabel: 'base64_data' }]
          }]
        }]
      }
    };
    const result = normalizeFedexShipResponse(raw, 'FEDEX_GROUND');
    expect(result.trackingNumber).toBe('fedex_123');
    expect(result.serviceCode).toBe('FEDEX_GROUND');
  });

  it('normalizes UPS shipment response', () => {
    const raw = {
      ShipmentResponse: {
        ShipmentResults: {
          ShipmentIdentificationNumber: 'ups_123',
          PackageResults: [{ ShippingLabel: { GraphicImage: 'label_base64' } }],
          ShipmentCharges: { TotalCharges: { MonetaryValue: '22.00', CurrencyCode: 'USD' } }
        }
      }
    };
    const result = normalizeUpsShipResponse(raw as any);
    expect(result.trackingNumber).toBe('ups_123');
    expect(result.charges).toEqual({ amount: 22, currency: 'USD' });
  });
});