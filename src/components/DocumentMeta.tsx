import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProject } from "../content/projects";
import { site } from "../content/site";

const origin = site.url.replace(/\/$/, "");

function setMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(data: unknown) {
  let el = document.getElementById("jsonld-seo") as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = "jsonld-seo";
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function personNode() {
  return {
    "@type": "Person",
    "@id": `${origin}/#person`,
    name: "Sara",
    jobTitle: "Product Designer · Product Engineer",
    email: `mailto:${site.links.emailAddress}`,
    url: origin,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madrid",
      addressCountry: "ES",
    },
  };
}

/** Actualiza title, canonical, Open Graph, Twitter y JSON-LD en cada ruta */
export default function DocumentMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const slugMatch = pathname.match(/^\/projects\/([^/]+)\/?$/);
    const slug = slugMatch?.[1];
    const project = slug ? getProject(slug) : undefined;
    const isHome = pathname === "/";
    const image = `${origin}${site.ogImage}`;

    let title: string = site.title;
    let description: string = site.description;
    let canonical = origin + "/";
    let jsonLd: unknown = {
      "@context": "https://schema.org",
      "@graph": [
        personNode(),
        {
          "@type": "WebSite",
          name: "Sara — Portfolio",
          url: origin,
          description: site.description,
          inLanguage: "es",
          publisher: { "@id": origin + "/#person" },
        },
      ],
    };

    if (slug && project) {
      title = `${project.title} — Sara`;
      description = project.description;
      canonical = `${origin}/projects/${project.slug}`;
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: canonical,
        inLanguage: "es",
        author: personNode(),
      };
    } else if (slug && !project) {
      title = "Proyecto no encontrado — Sara";
      description = site.description;
      canonical = `${origin}${pathname}`;
    }

    document.title = title;
    setMeta("name", "description", description);
    setLink("canonical", canonical);
    setMeta("property", "og:type", isHome ? "website" : "article");
    setMeta("property", "og:locale", "es_ES");
    setMeta("property", "og:site_name", "Sara — Portfolio");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setJsonLd(jsonLd);
  }, [pathname]);

  return null;
}
