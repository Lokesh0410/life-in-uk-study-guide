import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';
import LeadMagnetModal from '../LeadMagnetModal';

const CHAPTERS = [
    {
        to: '/study-guide/british-history',
        emoji: '🛡️',
        title: 'British History',
        desc: 'Monarchs, key dates, inventions, and the people the exam loves to mix up: from William the Conqueror to the present.',
        available: true,
    },
    {
        to: '/study-guide/government-and-law',
        emoji: '⚖️',
        title: 'Government & Law',
        desc: 'Elections, Parliament, the justice system, and how the UK is governed.',
        available: true,
    },
    {
        to: '/study-guide/culture-and-traditions',
        emoji: '🎉',
        title: 'Culture & Traditions',
        desc: 'Patron saints, national festivals, sports milestones, and everyday British customs.',
        available: true,
    },
    {
        to: '/study-guide/modern-britain',
        emoji: '🌐',
        title: 'Modern Britain & Society',
        desc: 'Human rights, citizenship, taxation, and the UK\'s role in the world today.',
        available: true,
    },
];

function ChapterCard({ chapter }) {
    const content = (
        <>
            <div className="text-3xl mb-3">{chapter.emoji}</div>
            <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-1">{chapter.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{chapter.desc}</p>
            {!chapter.available && (
                <span className="inline-block mt-3 text-[11px] font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">Coming soon</span>
            )}
        </>
    );

    const baseClass = "block rounded-2xl border p-6 shadow-sm transition bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800";

    if (!chapter.available) {
        return <div className={`${baseClass} opacity-60 cursor-not-allowed`}>{content}</div>;
    }

    return (
        <Link to={chapter.to} className={`${baseClass} hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-md`}>
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
    ],
};

export default function StudyGuideIndex() {
    useDocumentMeta({
        title: "Study Guide: Life in the UK Test 2026",
        description: "Free visual study guides for the Life in the UK Test: British history, government & law, culture, and modern society, all sourced from the official handbook.",
        path: "/study-guide",
        jsonLd: breadcrumbSchema,
    });

    const [showLeadMagnet, setShowLeadMagnet] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-8 md:p-12">
                <Link to="/" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-sm mb-6 inline-block">
                    ← Back to Flashcards
                </Link>
                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">
                    Life in the UK Study Guide
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                    Free visual study guides covering every chapter of the official Life in the UK Test handbook. Pick a chapter to explore timelines, cheat sheets, and fact cards.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {CHAPTERS.map(chapter => <ChapterCard key={chapter.title} chapter={chapter} />)}
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 rounded-2xl p-6 mb-8 text-center">
                    <p className="text-slate-700 dark:text-slate-200 font-medium mb-1">📥 Want a printable version?</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Get our free 1-page Key Dates &amp; Patron Saints cheat sheet: handbook-verified, straight to your inbox.</p>
                    <button
                        onClick={() => setShowLeadMagnet(true)}
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2.5 rounded-xl transition shadow-sm"
                    >
                        Download Free Cheat Sheet
                    </button>
                </div>

                <Link
                    to="/mock-exams"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-md"
                >
                    Start Practice Mock Exams
                </Link>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-6">
                    Already have ILR? See what's next on your <Link to="/ilr-guide" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">path to British citizenship</Link>.
                </p>
            </div>

            <LeadMagnetModal isOpen={showLeadMagnet} onClose={() => setShowLeadMagnet(false)} />
        </div>
    );
}
