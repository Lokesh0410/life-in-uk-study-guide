import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';

// All facts sourced directly from the official Life in the UK Handbook,
// "VII. Devolved administrations" section (The Welsh government / The
// Scottish parliament / The Northern Ireland assembly).
const NATIONS = [
    {
        key: 'reserved',
        emoji: '🇬🇧',
        title: 'Reserved to Westminster',
        subtitle: 'Central UK government control (all nations)',
        color: 'bg-slate-700',
        light: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
        formed: null,
        members: null,
        powers: [
            'Defence',
            'Foreign affairs',
            'Immigration',
            'Taxation',
            'Social security',
        ],
        note: "Policy and laws governing these areas all remain under central UK government control. However, many other public services, such as education, are controlled by the devolved administrations. The devolved administrations each have their own civil service.",
    },
    {
        key: 'scotland',
        emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        title: 'Scottish Parliament',
        subtitle: 'Holyrood, Edinburgh',
        color: 'bg-blue-600',
        light: 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300',
        formed: 'Formed in 1999',
        members: '129 MSPs (Members of the Scottish Parliament), elected by a form of proportional representation',
        powers: [
            'Civil and criminal law',
            'Health',
            'Education',
            'Planning',
            'Additional tax-raising powers',
        ],
        note: "The Scottish Parliament can pass laws for Scotland on all matters which are not specifically reserved to the UK Parliament.",
    },
    {
        key: 'wales',
        emoji: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
        title: 'Welsh Government / National Assembly for Wales',
        subtitle: 'Cardiff',
        color: 'bg-red-600',
        light: 'bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300',
        formed: 'Assembly established 1999',
        members: '60 Assembly members (AMs), elected every four years using a form of proportional representation. Members can speak in either Welsh or English, and all Assembly publications are in both languages.',
        powers: [
            'Education and training',
            'Health and social services',
            'Economic development',
            'Housing',
        ],
        note: "The Assembly has the power to make laws for Wales in 20 areas, including the ones listed above. Since 2011, the National Assembly for Wales has been able to pass laws on these topics without the agreement of the UK Parliament.",
    },
    {
        key: 'ni',
        emoji: '🇬🇧',
        title: 'Northern Ireland Assembly',
        subtitle: 'Stormont, Belfast',
        color: 'bg-emerald-600',
        light: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300',
        formed: 'Established 1998, after the Belfast (Good Friday) Agreement',
        members: '108 elected members, known as MLAs (Members of the Legislative Assembly), elected with a form of proportional representation. A power-sharing agreement distributes ministerial offices amongst the main parties.',
        powers: [
            'Education',
            'Agriculture',
            'The environment',
            'Health',
            'Social services',
        ],
        note: "The UK government has the power to suspend all devolved assemblies, and has used this power several times in Northern Ireland when local political leaders found it difficult to work together. The Assembly has been running successfully since 2007.",
    },
];

const CATEGORIES = ['All', ...NATIONS.map(n => n.title)];

function NationCard({ nation, isOpen, onToggle }) {
    return (
        <button
            onClick={onToggle}
            className="flex flex-col items-start text-left w-full rounded-2xl border p-5 shadow-sm transition bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800"
        >
            <div className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-full mb-3 ${nation.light}`}>
                <span>{nation.emoji}</span>{nation.subtitle}
            </div>
            <div className="flex items-start justify-between gap-3">
                <h3 className="font-bold text-slate-900 dark:text-slate-50 leading-snug">{nation.title}</h3>
                <span className="text-indigo-500 dark:text-indigo-400 text-sm flex-shrink-0">{isOpen ? '−' : '+'}</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
                {nation.powers.map(p => (
                    <span key={p} className="whitespace-nowrap text-xs font-medium px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {p}
                    </span>
                ))}
            </div>

            {isOpen && (
                <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                    {nation.formed && <p><span className="font-semibold text-slate-700 dark:text-slate-300">{nation.formed}.</span></p>}
                    {nation.members && <p>{nation.members}</p>}
                    <p>{nation.note}</p>
                </div>
            )}
        </button>
    );
}

const SITE_URL = 'https://lifeinukcoach.co.uk';

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Study Guide", item: `${SITE_URL}/study-guide` },
        { "@type": "ListItem", position: 3, name: "Government and Law", item: `${SITE_URL}/study-guide/government-and-law` },
        { "@type": "ListItem", position: 4, name: "Devolved Nations Explained", item: `${SITE_URL}/study-guide/devolved-nations` },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: NATIONS.map(n => ({
        "@type": "Question",
        name: `What powers does ${n.title} have?`,
        acceptedAnswer: {
            "@type": "Answer",
            text: `${n.powers.join(', ')}. ${n.note}`,
        },
    })),
};

export default function DevolvedNations() {
    useDocumentMeta({
        title: 'Devolved Nations Explained: Life in the UK Test 2026',
        description: 'What Westminster keeps versus what Scotland, Wales and Northern Ireland control: the Scottish Parliament, Welsh Government, and Northern Ireland Assembly compared, straight from the Life in the UK Test handbook.',
        path: '/study-guide/devolved-nations',
        jsonLd: [breadcrumbSchema, faqSchema],
    });

    const [activeCategory, setActiveCategory] = useState('All');
    const [openKeys, setOpenKeys] = useState(() => new Set());
    const toggleKey = (key) => {
        setOpenKeys(prev => {
            const next = new Set(prev);
            next.has(key) ? next.delete(key) : next.add(key);
            return next;
        });
    };

    const visible = activeCategory === 'All' ? NATIONS : NATIONS.filter(n => n.title === activeCategory);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <Link to="/study-guide/government-and-law" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-sm mb-6 inline-block">
                    ← Back to Government and Law Guide
                </Link>

                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-2">
                    🏴 Devolved Nations Explained
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Since 1997, some powers have been devolved from the central government to give people in Wales, Scotland and Northern Ireland more control over matters that directly affect them. Tap a card to see the details.
                </p>

                {/* Category filter chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {CATEGORIES.map(cat => {
                        const active = activeCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`whitespace-nowrap text-xs font-bold px-3 py-1.5 rounded-full border transition ${active ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 border-transparent' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>

                <div className="grid gap-3 mb-8">
                    {visible.map((nation) => (
                        <NationCard
                            key={nation.key}
                            nation={nation}
                            isOpen={openKeys.has(nation.key)}
                            onToggle={() => toggleKey(nation.key)}
                        />
                    ))}
                </div>

                <div className="mb-6">
                    <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-2">Explore more from Government & Law</h2>
                    <div className="inline-flex flex-wrap gap-2">
                        <Link to="/study-guide/court-hierarchy" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            ⚖️ Court Hierarchy
                        </Link>
                        <Link to="/study-guide/elections-cheat-sheet" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            🗳️ Elections & Voting Cheat Sheet
                        </Link>
                    </div>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 rounded-2xl p-6 text-center">
                    <p className="text-slate-700 dark:text-slate-200 font-medium mb-3">Test yourself on Government & Law with a mock exam</p>
                    <Link to="/mock-exams" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2.5 rounded-xl transition shadow-sm">
                        Start a Mock Exam →
                    </Link>
                </div>
            </div>
        </div>
    );
}
