const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const STORAGE_KEY = "utm_params";

export type UTMParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

/** Extract UTM params from URLSearchParams and store in sessionStorage. */
export function captureUTMParams(search: URLSearchParams): UTMParams {
  const params: UTMParams = {};
  for (const key of UTM_KEYS) {
    const value = search.get(key);
    if (value) params[key] = value;
  }
  if (Object.keys(params).length > 0) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
  }
  return params;
}

/** Append stored UTM params to a URL string. */
export function appendUTMParams(url: string): string {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return url;

  const params: UTMParams = JSON.parse(raw);
  if (Object.keys(params).length === 0) return url;

  const urlObj = new URL(url);
  for (const [key, value] of Object.entries(params)) {
    if (value) urlObj.searchParams.set(key, value);
  }
  return urlObj.toString();
}
