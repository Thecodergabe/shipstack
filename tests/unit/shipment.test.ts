
import { describe, it, expect } from 'vitest';
import { buildShipment } from '../../src/aggregator/shipment';
import { mockShipmentRequest } from '../mocks/shipstackMocks';

describe('Staged Shipments', () => {
  it('should build a staged shipment payload for USPS', async () => {
    const staged = await buildShipment(mockShipmentRequest);
    expect(staged).toHaveProperty('carrier', 'usps');
    expect(staged).toHaveProperty('payload');
  });
});
