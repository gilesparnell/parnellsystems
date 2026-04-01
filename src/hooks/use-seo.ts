import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  suffix?: string;
}

export function useSEO({ title, description, suffix }: SEOProps) {
  useEffect(() => {
    document.title = suffix ? `${title} — ${suffix}` : title;

    if (description) {
      let meta = document.querySelector(
        'meta[name="description"]'
      ) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [title, description, suffix]);
}
