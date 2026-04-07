import { describe, it, expect } from 'vitest';
import { convertUspsRateResponse } from '../../src/converters/rates/usps';
import { convertFedexRateResponse } from '../../src/converters/rates/fedex';
import { convertUpsRateResponse } from '../../src/converters/rates/ups';

describe('Rate Converters', () => {
  it('converts USPS rate response', () => {
    const raw = { rates: [{ service: 'Priority', amount: 10 }] };
    const result = convertUspsRateResponse(raw);
    expect(Array.isArray(result)).toBe(true);
  });
  it('converts FedEx rate response', () => {
    const raw = { rates: [{ service: 'Express', amount: 20 }] };
    const result = convertFedexRateResponse(raw);
    expect(Array.isArray(result)).toBe(true);
  });
  it('converts UPS rate response', () => {
    const raw = { rates: [{ service: 'Ground', amount: 15 }] };
    const result = convertUpsRateResponse(raw);
    expect(Array.isArray(result)).toBe(true);
  });
});
