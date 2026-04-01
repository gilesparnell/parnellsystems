import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useSEO } from "./use-seo";

describe("useSEO", () => {
  const originalTitle = document.title;

  beforeEach(() => {
    document.title = "Original Title";
    // Remove any existing meta description
    document.querySelector('meta[name="description"]')?.remove();
  });

  afterEach(() => {
    document.title = originalTitle;
  });

  it("sets document.title when title is provided", () => {
    renderHook(() => useSEO({ title: "Pricing — Parnell Systems" }));
    expect(document.title).toBe("Pricing — Parnell Systems");
  });

  it("sets meta description when description is provided", () => {
    renderHook(() =>
      useSEO({
        title: "Test",
        description: "AI voice agents for Australian businesses",
      })
    );
    const meta = document.querySelector('meta[name="description"]');
    expect(meta).not.toBeNull();
    expect(meta?.getAttribute("content")).toBe(
      "AI voice agents for Australian businesses"
    );
  });

  it("updates existing meta description instead of creating duplicate", () => {
    const existing = document.createElement("meta");
    existing.name = "description";
    existing.content = "old";
    document.head.appendChild(existing);

    renderHook(() => useSEO({ title: "T", description: "new description" }));

    const metas = document.querySelectorAll('meta[name="description"]');
    expect(metas.length).toBe(1);
    expect(metas[0].getAttribute("content")).toBe("new description");
  });

  it("does not crash when description is omitted", () => {
    expect(() => {
      renderHook(() => useSEO({ title: "Just a title" }));
    }).not.toThrow();
  });

  it("appends site name suffix when provided", () => {
    renderHook(() =>
      useSEO({ title: "Pricing", suffix: "Parnell Systems" })
    );
    expect(document.title).toBe("Pricing — Parnell Systems");
  });
});
