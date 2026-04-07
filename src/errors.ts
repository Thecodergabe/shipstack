/**
 * Shipstack Error System
 * Standardized error classes for multi-carrier shipping operations.
 */

/**
 * Base error class for all Shipstack-related exceptions.
 * * This class extends the native Error to include carrier context and the 
 * original 'cause' (e.g., a raw Axios or Fetch error), which is essential 
 * for debugging upstream carrier API failures.
 * * @category Errors
 */
export class ShipstackError extends Error {
  /**
   * @param message - Human-readable error description.
   * @param carrier - The carrier associated with the failure ('usps' | 'fedex' | 'ups').
   * @param cause - The underlying error or raw API response responsible for the failure.
   */
  constructor(
    message: string,
    public carrier: "usps" | "fedex" | "ups",
    public cause?: unknown
  ) {
    super(message);
    this.name = "ShipstackError";
    
    /** 
     * Maintains proper stack trace for where the error was thrown (V8 specific)
     */
    // Only available in V8 (Node.js). Use type guard to avoid TS error.
    if (typeof (Error as any).captureStackTrace === 'function') {
      (Error as any).captureStackTrace(this, ShipstackError);
    }
  }
}

/**
 * Specialized error for API Rate Limiting (HTTP 429).
 * * Carriers like FedEx and USPS enforce strict concurrent request limits.
 * This error includes a 'retryAfter' hint per 2026 RFC standards to help 
 * implementers manage automated backoff logic.
 * * @category Errors
 */
export class ThrottlingError extends ShipstackError {
  /**
   * @param message - Description of the rate limit hit.
   * @param carrier - The carrier that throttled the request.
   * @param retryAfter - The number of seconds to wait before retrying (if provided by carrier).
   * @param cause - The original 429 response.
   */
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

/**
 * Type Guard to check if an unknown error is a ShipstackError.
 * @param error - The error to check.
 */
export function isShipstackError(error: unknown): error is ShipstackError {
  return error instanceof ShipstackError;
}

/**
 * Type Guard to check if an error is specifically a ThrottlingError.
 * @param error - The error to check.
 */
export function isThrottlingError(error: unknown): error is ThrottlingError {
  return error instanceof ThrottlingError;
}