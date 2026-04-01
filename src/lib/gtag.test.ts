import { describe, it, expect, beforeEach, vi } from "vitest";
import { GA_MEASUREMENT_ID, pageview, event } from "./gtag";

describe("gtag utilities", () => {
  beforeEach(() => {
    // Mock window.gtag
    window.gtag = vi.fn();
  });

  it("exports the GA4 measurement ID", () => {
    expect(GA_MEASUREMENT_ID).toBe("G-W5KLWM7QB0");
  });

  it("sends a pageview event with the correct URL", () => {
    pageview("/pricing");
    expect(window.gtag).toHaveBeenCalledWith("config", GA_MEASUREMENT_ID, {
      page_path: "/pricing",
    });
  });

  it("sends a custom event with action, category, label, and value", () => {
    event({
      action: "click_cta",
      category: "engagement",
      label: "hero_book_demo",
      value: 1,
    });
    expect(window.gtag).toHaveBeenCalledWith("event", "click_cta", {
      event_category: "engagement",
      event_label: "hero_book_demo",
      value: 1,
    });
  });

  it("does not throw when window.gtag is undefined", () => {
    // @ts-expect-error — testing missing gtag
    delete window.gtag;
    expect(() => pageview("/test")).not.toThrow();
    expect(() =>
      event({ action: "test", category: "test", label: "test" })
    ).not.toThrow();
  });
});
