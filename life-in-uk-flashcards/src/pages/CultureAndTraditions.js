import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';

const TOOLS = [
    {
        to: '/study-guide/patron-saints',
        emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
        title: 'Patron Saints & Symbols',
        desc: 'The patron saint, saint’s day and flag of England, Scotland, Wales and Northern Ireland, colour-coded by nation.',
        available: true,
    },
    {
        to: '/study-guide/festivals-and-celebrations',
        emoji: '🎆',
        title: 'Festivals & Celebrations',
        desc: 'Christmas, Easter, Diwali, Hannukah, Eid, Hogmanay, Bonfire Night and more: the calendar of UK festivals.',
        available: true,
    },
    {
        to: '/study-guide/sports-and-traditions',
        emoji: '🏆',
        title: 'Sports & Traditions',
        desc: 'Olympic history, cricket, football, rugby, golf and tennis: the sporting facts the exam tests.',
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
        { "@type": "ListItem", position: 3, name: "Culture and Traditions", item: `${SITE_URL}/study-guide/culture-and-traditions` },
    ],
};

export default function CultureAndTraditions() {
    useDocumentMeta({
        title: "Culture and Traditions Study Guide: Life in the UK Test 2026",
        description: "Master the Customs, Traditions and Religion chapter of the official Life in the UK Test handbook, covering patron saints, festivals and sport.",
        path: "/study-guide/culture-and-traditions",
        jsonLd: breadcrumbSchema,
    });

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-8 md:p-12">
                <Link to="/study-guide" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-sm mb-6 inline-block">
                    ← Back to Study Guide
                </Link>
                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">
                    Culture and Traditions Study Guide: Life in the UK Test 2026
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Master the Religion, Customs and Traditions chapters of the official Life in the UK Test handbook.
                    This guide covers the patron saints of the four nations, the UK's major festivals and celebrations, and the sports and traditions that shape everyday British life.
                </p>

                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-8 mb-3">Key Culture Topics Covered</h2>
                <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-2 mb-6">
                    <li><strong>Patron Saints:</strong> St George, St Andrew, St David and St Patrick: their days, and which are official public holidays.</li>
                    <li><strong>Christian Festivals:</strong> Christmas, Boxing Day, and Easter, including Lent and Shrove Tuesday.</li>
                    <li><strong>Other Religious Festivals:</strong> Diwali, Hannukah, Eid al-Fitr, Eid ul Adha and Vaisakhi.</li>
                    <li><strong>National Traditions:</strong> Hogmanay, Halloween, Bonfire Night and Remembrance Day.</li>
                    <li><strong>Sport:</strong> The UK's Olympic history, and the origins of cricket, football, rugby, golf and tennis.</li>
                </ul>

                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-8 mb-3">Visual Study Tools</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {TOOLS.map(tool => <ToolCard key={tool.title} tool={tool} />)}
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 rounded-xl p-6 mb-8">
                    <h3 className="font-bold text-indigo-950 dark:text-indigo-200 mb-2">Did you know?</h3>
                    <p className="text-sm text-indigo-900 dark:text-indigo-300">
                        Only Scotland and Northern Ireland treat their patron saint's day as an official public holiday. St George's Day and St David's Day are still celebrated in England and Wales, but are not bank holidays.
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
