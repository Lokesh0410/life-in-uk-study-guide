import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';

const TOOLS = [
    {
        to: '/study-guide/human-rights',
        emoji: '⚖️',
        title: 'Human Rights & Citizenship',
        desc: 'The Human Rights Act, equal opportunities, and the responsibilities that come with being a citizen: filterable fact cards.',
        available: true,
    },
    {
        to: '/study-guide/taxation-and-driving',
        emoji: '🚗',
        title: 'Taxation & Driving',
        desc: 'Income tax, National Insurance, and the rules for getting and keeping a UK driving licence.',
        available: true,
    },
    {
        to: '/study-guide/britain-in-the-world',
        emoji: '🌍',
        title: 'Britain in the World',
        desc: 'The Commonwealth, the Council of Europe, the United Nations and NATO: the UK’s role on the international stage.',
        available: true,
    },
];

function ToolCard({ tool }) {
    const content = (
        <>
            <div className="text-3xl mb-3">{tool.emoji}</div>
            <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-1">{tool.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{tool.desc}</p>
            {!tool.available && (
                <span className="inline-block mt-3 text-[11px] font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">Coming soon</span>
            )}
        </>
    );

    const baseClass = "block rounded-2xl border p-6 shadow-sm transition bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800";

    if (!tool.available) {
        return <div className={`${baseClass} opacity-60 cursor-not-allowed`}>{content}</div>;
    }

    return (
        <Link to={tool.to} className={`${baseClass} hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-md`}>
            {content}
        </Link>
    );
}

const SITE_URL = "https://lifeinukcoach.co.uk";

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Study Guide", item: `${SITE_URL}/study-guide` },
        { "@type": "ListItem", position: 3, name: "Modern Britain and Society", item: `${SITE_URL}/study-guide/modern-britain` },
    ],
};

export default function ModernBritain() {
    useDocumentMeta({
        title: "Modern Britain and Society Study Guide: Life in the UK Test 2026",
        description: "Master the Fundamental Principles and International Institutions chapters of the official Life in the UK Test handbook, covering rights, responsibilities and the UK's global role.",
        path: "/study-guide/modern-britain",
        jsonLd: breadcrumbSchema,
    });

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-8 md:p-12">
                <Link to="/study-guide" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-sm mb-6 inline-block">
                    ← Back to Study Guide
                </Link>
                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">
                    Modern Britain and Society Study Guide: Life in the UK Test 2026
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Master the Fundamental Principles, Community and International Institutions chapters of the official Life in the UK Test handbook.
                    This guide covers human rights, equal opportunities, the responsibilities of being a citizen, and the UK's role in the wider world.
                </p>

                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-8 mb-3">Key Topics Covered</h2>
                <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-2 mb-6">
                    <li><strong>Human Rights:</strong> The European Convention on Human Rights and the Human Rights Act 1998.</li>
                    <li><strong>Equal Opportunities:</strong> UK anti-discrimination law and equality between men and women.</li>
                    <li><strong>Citizen Responsibilities:</strong> Shared values, jury service, and getting involved in your local community.</li>
                    <li><strong>Taxation & Driving:</strong> Income tax, National Insurance, and UK driving licence rules.</li>
                    <li><strong>Britain in the World:</strong> The Commonwealth, the Council of Europe, the United Nations, and NATO.</li>
                </ul>

                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-8 mb-3">Visual Study Tools</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {TOOLS.map(tool => <ToolCard key={tool.title} tool={tool} />)}
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 rounded-xl p-6 mb-8">
                    <h3 className="font-bold text-indigo-950 dark:text-indigo-200 mb-2">Did you know?</h3>
                    <p className="text-sm text-indigo-900 dark:text-indigo-300">
                        The Human Rights Act 1998 incorporated the European Convention on Human Rights into UK law. The UK was one of the first countries to sign the Convention, back in 1950.
                    </p>
                </div>

                <Link
                    to="/mock-exams"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-md"
                >
                    Start Practice Mock Exams
                </Link>
            </div>
        </div>
    );
}
