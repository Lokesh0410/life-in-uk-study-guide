import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';

const TOOLS = [
    {
        to: '/study-guide/monarchs-timeline',
        emoji: '👑',
        title: 'Monarchs Timeline',
        desc: 'Every monarch and royal house from William the Conqueror to Charles III, colour-coded and filterable.',
        available: true,
    },
    {
        to: '/study-guide/key-dates',
        emoji: '📅',
        title: 'Key Dates Timeline',
        desc: 'The must-know dates: Magna Carta, Acts of Union, world wars, NHS founding, in one scrollable timeline.',
        available: true,
    },
    {
        to: '/study-guide/inventions-timeline',
        emoji: '💡',
        title: 'Inventions & Discoveries',
        desc: 'British scientific and industrial breakthroughs, from the steam engine to the World Wide Web.',
        available: true,
    },
    {
        to: '/study-guide/people-matrix',
        emoji: '🧑‍🎓',
        title: "Who's Who of British History",
        desc: 'Scientists, political leaders, writers and reformers: the people the exam loves to mix up, grouped and colour-coded.',
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
        { "@type": "ListItem", position: 3, name: "British History", item: `${SITE_URL}/study-guide/british-history` },
    ],
};

export default function HistoryChapter() {
    useDocumentMeta({
        title: "British History Study Guide: Life in the UK Test 2026",
        description: "Master the complete British History chapter of the official Life in the UK Test handbook, from early settlements to the 20th century.",
        path: "/study-guide/british-history",
        jsonLd: breadcrumbSchema,
    });

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-8 md:p-12">
                <Link to="/study-guide" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-sm mb-6 inline-block">
                    ← Back to Study Guide
                </Link>
                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">
                    British History Study Guide: Life in the UK Test 2026
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Master the complete British History chapter of the official Life in the UK Test handbook.
                    This comprehensive study guide covers everything from the early prehistoric settlements to the 20th century.
                </p>

                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-8 mb-3">Key History Eras Covered</h2>
                <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-2 mb-6">
                    <li><strong>Prehistoric & Roman Britain:</strong> Understand the impact of Julius Caesar's invasions and the building of Hadrian's Wall.</li>
                    <li><strong>Middle Ages:</strong> Study the signing of the Magna Carta in 1215 and the Black Death of 1348.</li>
                    <li><strong>Tudors & Stuarts:</strong> Learn about Henry VIII's six wives, the Spanish Armada, and the English Civil War.</li>
                    <li><strong>The Global Empire:</strong> Explore the Industrial Revolution, the Enlightenment, and the abolition of slavery.</li>
                    <li><strong>The 20th Century:</strong> Read up on WWI, WWII, Winston Churchill, and the introduction of the NHS in 1948.</li>
                </ul>

                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-8 mb-3">Visual Study Tools</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {TOOLS.map(tool => <ToolCard key={tool.title} tool={tool} />)}
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 rounded-xl p-6 mb-8">
                    <h3 className="font-bold text-indigo-950 dark:text-indigo-200 mb-2">Did you know?</h3>
                    <p className="text-sm text-indigo-900 dark:text-indigo-300">
                        History questions make up a significant portion of the real exam. Make sure you memorize key dates like 1066 (Battle of Hastings), 1215 (Magna Carta), and 1588 (defeat of the Spanish Armada).
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
