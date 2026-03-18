/**
 * Formats a tracking number into the FedEx 'Full_Schema_Tracking_Numbers' structure.
 * * @param trackingNumber - The 12-15 digit FedEx tracking identifier.
 * @returns {any} A formatted FedEx tracking request body.
 */
export function buildFedexTrackRequest(trackingNumber: string): any {
  return {
    includeDetailedScans: true,
    trackingInfo: [
      {
        trackingNumberInfo: {
          trackingNumber: trackingNumber,
        },
      },
    ],
  };
}