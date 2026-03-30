/**
 * Detects whether the current hostname is the voice subdomain.
 * Works in dev (localhost) via ?subdomain=voice query param fallback.
 */
export function isVoiceSubdomain(): boolean {
  const hostname = window.location.hostname;

  // Production: voice.parnellsystems.com
  if (hostname.startsWith("voice.")) return true;

  // Dev: allow ?subdomain=voice for local testing
  const params = new URLSearchParams(window.location.search);
  if (params.get("subdomain") === "voice") return true;

  return false;
}
