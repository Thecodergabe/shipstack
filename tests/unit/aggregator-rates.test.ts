import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getRates } from '../../src/aggregator/rates';
import * as configMap from '../../src/config';

vi.mock('../../src/usps/rates/client', () => ({
  createUspsRatesClient: () => ({
    getRates: vi.fn().mockResolvedValue({
      rateOptions: [{
        totalPrice: '12.00',
        rates: [{ mailClass: 'PRIORITY', productName: 'Priority Mail', price: '12.00' }]
      }]
    })
  })
}));

describe('Rates Aggregator', () => {
  beforeEach(() => {
    // Fake the environment entirely
    vi.spyOn(configMap, 'getEnabledCarriers').mockReturnValue(['usps']);
    vi.spyOn(configMap, 'getUspsConfig').mockReturnValue({ apiKey: 'fake' } as any);
  });

  it('should fetch rates without requiring real config keys', async () => {
    const request = {
      carrier: 'usps',
      originZip: '90210',
      destZip: '10001',
      weightOz: 16,
      lengthInches: 10,
      widthInches: 5,
      heightInches: 5
    };
    
    const rates = await getRates(request as any);
    expect(Array.isArray(rates)).toBe(true);
    expect(rates[0]).toEqual(expect.objectContaining({ cost: expect.any(Object) }));
  });
});