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

// Updates title, meta description, canonical, and Open Graph/Twitter tags for the current route.
export default function useDocumentMeta({ title, description, path }) {
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
    }, [title, description, path]);
}
