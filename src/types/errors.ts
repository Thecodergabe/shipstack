export class ShipstackError extends Error {
  constructor(
    message: string,
    public carrier: "usps" | "fedex" | "ups",
    public cause?: unknown
  ) {
    super(message);
    this.name = "ShipstackError";
  }
}

/**
 * Specifically for 429 Too Many Requests.
 * Includes an optional retryAfter (in seconds) per 2026 carrier standards.
 */
export class ThrottlingError extends ShipstackError {
  constructor(
    message: string,
    carrier: "usps" | "fedex" | "ups",
    public retryAfter?: number,
    cause?: unknown
  ) {
    super(message, carrier, cause);
    this.name = "ThrottlingError";
  }
}

export function isShipstackError(error: unknown): error is ShipstackError {
  return error instanceof ShipstackError;
}

export function isThrottlingError(error: unknown): error is ThrottlingError {
  return error instanceof ThrottlingError;
}