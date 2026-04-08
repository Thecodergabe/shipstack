import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ShippingClient } from '../../src/index';
import type { ShippingConfig } from '../../src/config';

const MOCK_CONFIG: ShippingConfig = {
  usps: {
    enabled: true,
    clientId: 'usps-client-id',
    clientSecret: 'usps-client-secret',
  },
  fedex: {
    enabled: true,
    clientId: 'fedex-client-id',
    clientSecret: 'fedex-client-secret',
    accountNumber: '123456789'
  },
  ups: {
    enabled: true,
    clientId: 'ups-client-id',
    clientSecret: 'ups-client-secret',
    accountNumber: '98765X'
  },
  environment: 'sandbox'
};

const MOCK_ADDRESS_REQUEST = {
  streetLines: ['123 Main St'],
  city: 'Portland',
  stateOrProvinceCode: 'OR',
  postalCode: '97229',
  countryCode: 'US'
};

const MOCK_RATE_REQUEST = {
  originZip: '90210',
  destZip: '97229',
  weightOz: 16,
  lengthInches: 10,
  widthInches: 5,
  heightInches: 5,
  nonStandard: false
};

describe('End-to-End Carrier Payload Integration', () => {
  let fetchMock: any;

  beforeEach(() => {
    // Intercept global fetch
    fetchMock = vi.spyOn(globalThis, 'fetch').mockImplementation(async (url: any, init?: any) => {
      const urlStr = url.toString();
      
      // Auto-mock OAuth Token endpoints for all carriers
      const mockHeaders = new Headers();
      mockHeaders.set('Content-Type', 'application/json');

      // Auto-mock OAuth Token endpoints for all carriers
      if (urlStr.includes('oauth') || urlStr.includes('security/v1/oauth')) {
        return {
          ok: true,
          headers: mockHeaders,
          json: async () => ({
            access_token: 'mock-oauth-token',
            expires_in: 3600
          })
        } as any;
      }

      // Auto-mock Address/Rates endpoints to return minimal valid responses to prevent crash
      return {
        ok: true,
        headers: mockHeaders,
        json: async () => {
          if (urlStr.includes('address')) {
            // FedEx/UPS/USPS dummy address responses
            return {
              output: { resolvedAddresses: [{}] }, // FedEx
              AddressClassification: { Description: "Residential" }, // UPS
              address: { zipCode: '97229' } // USPS
            };
          }
          if (urlStr.includes('rate') || urlStr.includes('price')) {
            return {
              output: { rateReplyDetails: [] }, // FedEx
              RateResponse: { RatedShipment: [] }, // UPS
              rateOptions: [] // USPS
            };
          }
          return {};
        }
      } as any;
    });
  });

  // --- USPS ---
  it('should format USPS Address Validation correctly', async () => {
    const client = new ShippingClient(MOCK_CONFIG);
    await client.validateAddress({ carrier: 'usps', address: MOCK_ADDRESS_REQUEST });

    // Verify OAuth fetch
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('oauth2/v3/token'),
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
    );

    // Verify Address fetch
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/addresses/v3/address'),
      expect.objectContaining({
        method: 'GET'
      })
    );
  });

  it('should format USPS Rates accurately', async () => {
    const client = new ShippingClient(MOCK_CONFIG);
    await client.getRates({ carrier: 'usps', ...MOCK_RATE_REQUEST });

    // Verify Rates fetch endpoint
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/prices/v3/total-rates/search'),
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('originZIPCode')
      })
    );
  });

  // --- FEDEX ---
  it('should format FedEx Address Validation correctly', async () => {
    const client = new ShippingClient(MOCK_CONFIG);
    await client.validateAddress({ carrier: 'fedex', address: MOCK_ADDRESS_REQUEST });

    // Verify Address fetch
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/address/v1/addresses/resolve'),
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('addressesToValidate')
      })
    );
  });

  it('should format FedEx Rates accurately', async () => {
    const client = new ShippingClient(MOCK_CONFIG);
    await client.getRates({ carrier: 'fedex', ...MOCK_RATE_REQUEST });

    // Verify Rates fetch endpoint
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/rate/v1/rates/quotes'),
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('requestedShipment')
      })
    );
  });

  // --- UPS ---
  it('should format UPS Address Validation correctly', async () => {
    const client = new ShippingClient(MOCK_CONFIG);
    await client.validateAddress({ carrier: 'ups', address: MOCK_ADDRESS_REQUEST });

    // Verify Address fetch
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/addressvalidation/v2/3'),
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('XAVRequest')
      })
    );
  });

  it('should format UPS Rates accurately', async () => {
    const client = new ShippingClient(MOCK_CONFIG);
    await client.getRates({ carrier: 'ups', ...MOCK_RATE_REQUEST });

    // Verify Rates fetch endpoint
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/rating/v2409/Shop'),
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('RateRequest')
      })
    );
  });
});
