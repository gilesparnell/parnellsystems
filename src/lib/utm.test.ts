import { describe, it, expect, beforeEach } from "vitest";
import { captureUTMParams, appendUTMParams } from "./utm";

describe("captureUTMParams", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("captures utm_source, utm_medium, utm_campaign from URL search params", () => {
    const params = new URLSearchParams(
      "?utm_source=google&utm_medium=cpc&utm_campaign=launch"
    );
    const result = captureUTMParams(params);
    expect(result).toEqual({
      utm_source: "google",
      utm_medium: "cpc",
      utm_campaign: "launch",
    });
  });

  it("captures utm_term and utm_content when present", () => {
    const params = new URLSearchParams(
      "?utm_source=fb&utm_term=voice+ai&utm_content=banner"
    );
    const result = captureUTMParams(params);
    expect(result.utm_term).toBe("voice ai");
    expect(result.utm_content).toBe("banner");
  });

  it("returns empty object when no UTM params present", () => {
    const params = new URLSearchParams("?page=1&sort=name");
    const result = captureUTMParams(params);
    expect(result).toEqual({});
  });

  it("ignores non-UTM params", () => {
    const params = new URLSearchParams("?utm_source=google&foo=bar");
    const result = captureUTMParams(params);
    expect(result).toEqual({ utm_source: "google" });
    expect((result as Record<string, string>).foo).toBeUndefined();
  });

  it("stores captured params in sessionStorage", () => {
    const params = new URLSearchParams("?utm_source=google&utm_medium=cpc");
    captureUTMParams(params);
    const stored = JSON.parse(sessionStorage.getItem("utm_params") || "{}");
    expect(stored.utm_source).toBe("google");
  });
});

describe("appendUTMParams", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("appends stored UTM params to a URL", () => {
    sessionStorage.setItem(
      "utm_params",
      JSON.stringify({ utm_source: "google", utm_medium: "cpc" })
    );
    const result = appendUTMParams("https://buy.stripe.com/test_abc123");
    expect(result).toContain("utm_source=google");
    expect(result).toContain("utm_medium=cpc");
  });

  it("returns original URL when no UTM params stored", () => {
    const url = "https://buy.stripe.com/test_abc123";
    const result = appendUTMParams(url);
    expect(result).toBe(url);
  });

  it("preserves existing query params on the URL", () => {
    sessionStorage.setItem(
      "utm_params",
      JSON.stringify({ utm_source: "fb" })
    );
    const result = appendUTMParams(
      "https://buy.stripe.com/test_abc123?prefilled_email=test@example.com"
    );
    expect(result).toContain("prefilled_email=test%40example.com");
    expect(result).toContain("utm_source=fb");
  });

  it("handles URLs with hash fragments", () => {
    sessionStorage.setItem(
      "utm_params",
      JSON.stringify({ utm_source: "google" })
    );
    const result = appendUTMParams("https://example.com/page#section");
    expect(result).toContain("utm_source=google");
    expect(result).toContain("#section");
  });
});
