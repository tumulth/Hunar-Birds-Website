import { useEffect } from "react";
import { buildAbsoluteUrl, siteConfig } from "@/data/site";

interface SeoOptions {
  title: string;
  description: string;
  image?: string;
  pathname?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

export function useSeo({
  title,
  description,
  image = siteConfig.defaultOgImage,
  pathname,
  schema,
}: SeoOptions) {
  useEffect(() => {
    const url = buildAbsoluteUrl(pathname ?? window.location.pathname);
    const imageUrl = buildAbsoluteUrl(image);

    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertCanonical(url);

    const scriptId = "route-structured-data";
    const existingScript = document.getElementById(scriptId);

    if (schema) {
      const script = existingScript ?? document.createElement("script");
      script.id = scriptId;
      script.setAttribute("type", "application/ld+json");
      script.textContent = JSON.stringify(schema);

      if (!existingScript) {
        document.head.appendChild(script);
      }
    } else if (existingScript) {
      existingScript.remove();
    }
  }, [description, image, pathname, schema, title]);
}
