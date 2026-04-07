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
  it('normalizes UPS address response', () => {
    const raw = { address: '123 Main St', postalCode: '90001' };
    const result = normalizeUpsAddressResponse(raw);
    expect(result).toHaveProperty('postalCode');
  });
});
