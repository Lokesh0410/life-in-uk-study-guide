import { useEffect } from "react";

const SITE_URL = "https://lifeinukcoach.co.uk";

function setMetaByName(name, content) {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
}

function setCanonical(href) {
    let tag = document.querySelector('link[rel="canonical"]');
    if (!tag) {
        tag = document.createElement("link");
        tag.setAttribute("rel", "canonical");
        document.head.appendChild(tag);
    }
    tag.setAttribute("href", href);
}

const JSON_LD_ID = "route-json-ld";

function setJsonLd(jsonLd) {
    const existing = document.getElementById(JSON_LD_ID);
    if (existing) existing.remove();
    if (!jsonLd) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = JSON_LD_ID;
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
}

// Updates title, meta description, canonical, Open Graph/Twitter tags, and
// JSON-LD structured data for the current route. `jsonLd` accepts a single
// schema.org object or an array of them (e.g. an Article plus a BreadcrumbList).
export default function useDocumentMeta({ title, description, path, jsonLd }) {
    useEffect(() => {
        if (!title) return;
        const canonicalUrl = `${SITE_URL}${path || ""}`;

        document.title = title;
        if (description) setMetaByName("description", description);
        setCanonical(canonicalUrl);

        setMetaByProperty("og:title", title);
        if (description) setMetaByProperty("og:description", description);
        setMetaByProperty("og:url", canonicalUrl);

        setMetaByName("twitter:title", title);
        if (description) setMetaByName("twitter:description", description);

        setJsonLd(jsonLd);

        return () => setJsonLd(null);
    }, [title, description, path, jsonLd]);
}
