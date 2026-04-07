import { describe, it, expect, vi } from 'vitest';
import * as uspsClient from '../../src/usps/address/client';
import { handleUspsValidation, handleFedexValidation } from '../../src/aggregator/address';

const mockAddressInput = {
  streetLines: ['123 Main St'],
  city: 'Testville',
  stateOrProvinceCode: 'CA',
  postalCode: '90001',
  countryCode: 'US',
};

const mockConfig = {
  usps: { apiKey: 'x', apiSecret: 'y' },
  fedex: { apiKey: 'x', secretKey: 'y' }
};

// Mock the internal client creator
vi.spyOn(uspsClient, 'createUspsAddressClient').mockReturnValue({
  init: vi.fn(),
  verifyAddress: vi.fn().mockResolvedValue({
    street1: '123 Main St',
    city: 'Testville',
    state: 'CA',
    postalCode: '90001',
    country: 'US'
  })
} as any);

describe('Address Aggregator', () => {
  it('handles USPS address validation', async () => {
    // Calling the exported function directly as per your source
    const result = await handleUspsValidation(mockAddressInput, mockConfig as any);
    
    // Based on your source, handleUspsValidation returns NormalizedAddress directly
    expect(result.postalCode).toBe('90001');
  });
});