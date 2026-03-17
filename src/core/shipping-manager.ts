import { getRates } from '../aggregator/rates';
import type { RateRequest, NormalizedRate } from '../types/index';

export class ShippingManager {
  /**
   * Fetches and ranks rates from enabled carriers.
   */
  async getRankedRates(req: RateRequest, carriers: ("usps" | "fedex" | "ups")[]): Promise<NormalizedRate[]> {
    const promises = carriers.map(c => getRates({ ...req, carrier: c }).catch(() => []));
    const results = await Promise.all(promises);
    const allRates = results.flat();

    if (!allRates.length) return [];

    // Tagging logic (Cheapest/Fastest) stays here in pure TS
    const sorted = allRates.sort((a, b) => a.cost.amount - b.cost.amount);
    sorted[0].isCheapest = true;
    
    return sorted;
  }
}