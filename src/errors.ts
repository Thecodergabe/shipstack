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
export function isShipstackError(error: unknown): error is ShipstackError {
  return error instanceof ShipstackError;
}