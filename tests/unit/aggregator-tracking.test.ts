import { describe, it, expect, vi } from 'vitest';
import { TrackingAggregator } from '../../src/aggregator/tracking';
import * as configMap from '../../src/config';

// 1. Mock the USPS Client using the actual source path
vi.mock('../../src/usps/tracking/client', () => ({
  UspsTrackingClient: class {
    constructor(_config: any) {}
    async init() {}
    async getBulkStatus() {
      return { trackingDetails: [{ trackingNumber: '9400', status: 'delivered' }] };
    }
  }
}));

describe('Tracking Aggregator', () => {
  it('should track a batch of USPS numbers using fake config', async () => {
    // 2. Mock the config helper so it doesn't throw "Missing Key"
    vi.spyOn(configMap, 'getUspsConfig').mockReturnValue({ apiKey: 'fake', apiSecret: 'fake' } as any);

    const aggregator = new TrackingAggregator();
    const results = await aggregator.trackUspsBatch(['9400']);
    
    expect(results[0]).toHaveProperty('trackingNumber', '9400');
  });
});