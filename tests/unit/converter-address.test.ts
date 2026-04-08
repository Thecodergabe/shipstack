import { describe, it, expect } from 'vitest';
import { normalizeUspsAddressResponse } from '../../src/converters/address/usps';
import { normalizeFedexAddressResponse } from '../../src/converters/address/fedex';
import { normalizeUpsAddressResponse } from '../../src/converters/address/ups';

describe('Address Converters', () => {
  it('normalizes USPS address response', () => {
    const raw = { address: '123 Main St', postalCode: '90001' };
    const result = normalizeUspsAddressResponse(raw);
    expect(result).toHaveProperty('postalCode');
  });
  it('normalizes FedEx address response', () => {
    const raw = { address: '123 Main St', postalCode: '90001' };
    const result = normalizeFedexAddressResponse(raw);
    expect(result).toHaveProperty('postalCode');
  });
  it('normalizes FedEx address response with streetLinesToken and POBox casing', () => {
    const raw = {
      output: {
        resolvedAddresses: [
          {
            streetLinesToken: ['1600 AMPHITHEATRE PKWY'],
            city: 'Mountain View',
            stateOrProvinceCode: 'Región Metropolitana de Santiago',
            postalCode: '94043',
            countryCode: 'CL',
            classification: 'UNKNOWN',
            attributes: {
              POBox: false,
            },
          },
        ],
      },
    };

    const result = normalizeFedexAddressResponse(raw);

    expect(result.street1).toBe('1600 AMPHITHEATRE PKWY');
    expect(result.city).toBe('Mountain View');
    expect(result.state).toBe('Región Metropolitana de Santiago');
    expect(result.postalCode).toBe('94043');
    expect(result.country).toBe('CL');
    expect(result.isPoBox).toBe(false);
    expect(result.isValid).toBe(true);
  });
  it('normalizes UPS address response', () => {
    const raw = { address: '123 Main St', postalCode: '90001' };
    const result = normalizeUpsAddressResponse(raw);
    expect(result).toHaveProperty('postalCode');
  });
});
