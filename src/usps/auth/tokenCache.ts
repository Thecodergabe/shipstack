let cachedToken: string | null = null;
let tokenExpiresAt: number | null = null;

export function getCachedToken(): string | null {
  if (!cachedToken || !tokenExpiresAt) return null;
  if (Date.now() > tokenExpiresAt) return null;
  return cachedToken;
}

export function setCachedToken(token: string, expiresIn: number) {
  cachedToken = token;
  tokenExpiresAt = Date.now() + expiresIn * 1000;
}