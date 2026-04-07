import { describe, it, expect } from 'vitest';
import { normalizeFedexTrackingResponse } from '../../src/converters/tracking/fedex';
import { normalizeUpsTrackingResponse } from '../../src/converters/tracking/ups';

describe('Tracking Converters', () => {
  it('normalizes FedEx tracking response', () => {
    const rawFedex = {
      output: {
        completeTrackResults: [{
          trackResults: [{
            trackingNumber: '1234',
            latestStatusDetail: { statusByLocale: 'Delivered' },
            scanEvents: [{ eventDescription: 'Delivered', date: '2024-04-07', arrivalLocation: { city: 'Austin', countryCode: 'US' } }]
          }]
        }]
      }
    };
    const result = normalizeFedexTrackingResponse(rawFedex);
    expect(result.trackingNumber).toBe('1234');
    expect(result.status).toBe('Delivered');
  });

  it('normalizes UPS tracking response', () => {
    const rawUps = {
      trackResponse: {
        shipment: [{
          inquiryNumber: '1Z999',
          package: [{
            activity: [{
              status: { description: 'Delivered' },
              date: '20240407',
              time: '120000',
              location: { address: { city: 'Austin', stateProvince: 'TX', countryCode: 'US', postalCode: '78701' } }
            }]
          }]
        }]
      }
    };
    const result = normalizeUpsTrackingResponse(rawUps as any);
    expect(result.trackingNumber).toBe('1Z999');
    expect(result.status).toBe('Delivered');
  });
});