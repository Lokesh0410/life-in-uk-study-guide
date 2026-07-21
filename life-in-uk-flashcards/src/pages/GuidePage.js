// src/pages/GuidePage.js
// Reusable component to render any immigration guide from data objects

import { useEffect } from "react";
import { Link } from "react-router-dom";
import allGuides from "./immigrationGuides/index";

export default function GuidePage({ guide }) {
    useEffect(() => {
        if (guide?.seo?.metaTitle) {
            document.title = guide.seo.metaTitle;
        }
        window.scrollTo(0, 0);
    }, [guide]);

    if (!guide) {
        return (
            <div className="text-center py-20">
                <div className="text-6xl mb-4">📄</div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Guide Not Found</h2>
                <p className="text-slate-500 mb-6">The page you're looking for doesn't exist.</p>
                <Link to="/" className="text-indigo-600 hover:text-indigo-800 underline font-medium">
                    ← Back to Home
                </Link>
            </div>
        );
    }

    // Generate FAQ JSON-LD schema
    const faqSchema = guide.faqs && guide.faqs.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": guide.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        }
        : null;

    // Generate Breadcrumb JSON-LD schema
    const breadcrumbSchema = guide.breadcrumbs
        ? {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": guide.breadcrumbs.map((crumb, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": crumb.name,
                "item": `https://lifeinukcoach.co.uk${crumb.url}`
            }))
        }
        : null;

    return (
        <div className="max-w-4xl mx-auto">
            {/* JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />

            {/* Breadcrumbs */}
            {guide.breadcrumbs && (
                <nav className="text-sm text-slate-500 mb-6 flex flex-wrap gap-1">
                    {guide.breadcrumbs.map((crumb, i) => (
                        <span key={i} className="flex items-center gap-1">
                            {i > 0 && <span className="mx-1">›</span>}
                            {i < guide.breadcrumbs.length - 1 ? (
                                <Link to={crumb.url} className="text-indigo-600 hover:text-indigo-800 underline">
                                    {crumb.name}
                                </Link>
                            ) : (
                                <span className="text-slate-700 font-medium">{crumb.name}</span>
                            )}
                        </span>
                    ))}
                </nav>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                {guide.title}
            </h1>

            {/* Introduction */}
            {guide.introduction && (
                <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl p-5 mb-8">
                    <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                        {guide.introduction}
                    </p>
                </div>
            )}

            {/* Sections */}
            <div className="space-y-8 mb-10">
                {guide.sections.map((section, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <span className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                                {i + 1}
                            </span>
                            {section.heading}
                        </h2>
                        <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                            {section.content}
                        </div>
                    </div>
                ))}
            </div>

            {/* Checklist */}
            {guide.checklist && guide.checklist.length > 0 && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-10">
                    <h3 className="text-lg font-bold text-emerald-800 mb-3">✅ Checklist</h3>
                    <ul className="space-y-2">
                        {guide.checklist.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-emerald-700">
                                <span className="mt-0.5 shrink-0">☐</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* FAQs */}
            {guide.faqs && guide.faqs.length > 0 && (
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">❓ Frequently Asked Questions</h3>
                    <div className="space-y-3">
                        {guide.faqs.map((faq, i) => (
                            <details key={i} className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                                <summary className="px-5 py-4 font-semibold text-slate-700 cursor-pointer hover:bg-slate-50 transition list-none flex items-center justify-between">
                                    <span>{faq.question}</span>
                                    <span className="text-indigo-400 text-xl leading-none">▾</span>
                                </summary>
                                <div className="px-5 pb-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            )}

            {/* Related Pages */}
            {guide.relatedPages && guide.relatedPages.length > 0 && (
                <div className="bg-slate-50 rounded-2xl p-6 mb-10 border border-slate-100">
                    <h3 className="text-lg font-bold text-slate-800 mb-3">📖 Related Guides</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {guide.relatedPages.map((page, i) => (
                            <Link
                                key={i}
                                to={page.url}
                                className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-sm transition"
                            >
                                <span className="text-indigo-500">→</span>
                                <span className="text-sm font-medium text-slate-700">{page.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Official Sources */}
            {guide.officialSources && guide.officialSources.length > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
                    <h3 className="text-lg font-bold text-amber-800 mb-3">🔗 Official Sources</h3>
                    <ul className="space-y-2">
                        {guide.officialSources.map((source, i) => (
                            <li key={i}>
                                <a
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-amber-700 hover:text-amber-900 underline text-sm"
                                >
                                    <span>📄</span>
                                    {source.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Metadata footer */}
            {guide.metadata && (
                <div className="text-center text-xs text-slate-400 border-t border-slate-100 pt-6 mt-6">
                    <p>
                        Last updated: {guide.metadata.lastUpdated} • Category: {guide.metadata.category}
                    </p>
                </div>
            )}

            {/* All Immigration Guides - discoverability section */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">📖 All Immigration & Citizenship Guides</h2>
                <p className="text-slate-600 mb-4">Browse our complete library of guides to help you through every step of your UK immigration journey:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allGuides.filter(g => g.slug !== guide.slug).map((g) => (
                        <Link
                            key={g.slug}
                            to={g.slug === "ilr-guide" ? "/ilr-guide" : `/${g.slug}`}
                            className="block bg-slate-50 border border-slate-100 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md hover:bg-white transition"
                        >
                            <h3 className="font-bold text-slate-800 text-sm">{g.title}</h3>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-2">{g.introduction?.substring(0, 100)}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Back to home */}
            <div className="text-center mt-8 mb-12">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}
