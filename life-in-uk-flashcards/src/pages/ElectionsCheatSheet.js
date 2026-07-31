import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';

// All facts sourced directly from the official Life in the UK Handbook
// (Chapter: The UK Government, Parliament / Right to Vote sections).

// Tricky numbers pulled out as big stat tiles.
const STATS = [
    { big: '18', caption: 'Minimum voting age', sub: 'Lowered from 21 in 1969' },
    { big: '5 years', caption: 'Max between elections', sub: 'Was 3, then 7, now 5' },
    { big: '7am–10pm', caption: 'Polling station hours', sub: 'On election day' },
    { big: '1928', caption: 'Fully democratic voting', sub: 'Franchise extended to all over 21' },
    { big: '1969', caption: 'Voting age lowered', sub: 'From 21 down to 18' },
    { big: '18+', caption: 'Minimum age to stand as MP', sub: 'Same as most other public office' },
];

const CATEGORY_STYLES = {
    'Voting System': { emoji: '🗳️', color: 'bg-indigo-600', light: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300' },
    'Voting Rules': { emoji: '📝', color: 'bg-emerald-600', light: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' },
    'Standing for Election': { emoji: '🎤', color: 'bg-amber-600', light: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300' },
};

const FACTS = [
    {
        category: 'Voting System',
        label: "First past the post elects MPs",
        detail: "In each constituency, the candidate who gets the most votes is elected: there is no requirement for an overall majority of votes in that constituency.",
    },
    {
        category: 'Voting System',
        label: "Government formed by majority party",
        detail: "The party that wins a majority of constituencies (seats) in the House of Commons usually forms the government. If no party wins a majority, two parties may join together to form a coalition.",
    },
    {
        category: 'Voting Rules',
        label: "Who can vote",
        detail: "With a few exceptions, all UK-born and naturalised adult citizens. Adult citizens of the Commonwealth and the Irish Republic resident in the UK can vote in all public elections. Adult citizens of other EU states resident in the UK can vote in all elections except General Elections.",
    },
    {
        category: 'Voting Rules',
        label: "Register on the electoral register",
        detail: "Your name must be on the electoral register to vote. You register by contacting your local council's electoral registration office (in Northern Ireland, via individual registration). The register is updated every year in September or October.",
    },
    {
        category: 'Voting Rules',
        label: "Postal voting is available",
        detail: "If it's difficult to get to a polling station, you can register for a postal ballot. Your ballot paper is sent to your home, and you fill it in and post it back.",
    },
    {
        category: 'Voting Rules',
        label: "By-elections fill vacant seats",
        detail: "If an MP dies or resigns, a by-election is held in their constituency instead of waiting for the next general election.",
    },
    {
        category: 'Standing for Election',
        label: "Who is barred from standing",
        detail: "Members of the armed forces, civil servants, and people found guilty of certain criminal offences are among those excluded.",
    },
    {
        category: 'Standing for Election',
        label: "Lords can't stand for the Commons",
        detail: "Members of the House of Lords may not stand for election to the House of Commons, though they are eligible for all other public offices.",
    },
    {
        category: 'Standing for Election',
        label: "Independents run without a party",
        detail: "MPs without a party affiliation are called 'Independents': they usually represent an issue important to their constituency.",
    },
    {
        category: 'Standing for Election',
        label: "The Speaker chairs the Commons",
        detail: "The Speaker is the chief officer of the House of Commons, chosen by other MPs in a secret ballot. The Speaker is neutral and does not represent a political party, despite being an MP and representing a constituency.",
    },
];

const CATEGORIES = Object.keys(CATEGORY_STYLES);

function StatTile({ stat }) {
    return (
        <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">{stat.big}</div>
            <div className="text-xs font-bold text-slate-700 dark:text-slate-200 mt-1 leading-snug">{stat.caption}</div>
            <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-snug">{stat.sub}</div>
        </div>
    );
}

function FactCard({ fact, isOpen, onToggle }) {
    const style = CATEGORY_STYLES[fact.category];
    return (
        <button
            onClick={onToggle}
            className={`flex flex-col items-start text-left w-full rounded-2xl border p-4 shadow-sm transition ${isOpen ? 'border-transparent ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-950' : 'border-slate-100 dark:border-slate-800'} bg-white dark:bg-slate-900`}
        >
            <div className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-full mb-2 whitespace-nowrap ${style.light}`}>
                <span>{style.emoji}</span>{fact.category}
            </div>
            <div className="flex items-start justify-between gap-3">
                <h3 className="font-bold text-slate-900 dark:text-slate-50 leading-snug">{fact.label}</h3>
                <span className="text-indigo-500 dark:text-indigo-400 text-sm flex-shrink-0">{isOpen ? '−' : '+'}</span>
            </div>
            {isOpen && (
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">{fact.detail}</p>
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
        { "@type": "ListItem", position: 4, name: "Elections & Voting Cheat Sheet", item: `${SITE_URL}/study-guide/elections-cheat-sheet` },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FACTS.map(f => ({
        "@type": "Question",
        name: f.label,
        acceptedAnswer: {
            "@type": "Answer",
            text: f.detail,
        },
    })),
};

export default function ElectionsCheatSheet() {
    useDocumentMeta({
        title: 'Elections & Voting Cheat Sheet: Life in the UK Test 2026',
        description: 'The tricky numbers and process facts on UK elections and Parliament for the Life in the UK Test: first past the post, voting age, standing for election, and House of Commons vs House of Lords.',
        path: '/study-guide/elections-cheat-sheet',
        jsonLd: [breadcrumbSchema, faqSchema],
    });

    const [activeCategory, setActiveCategory] = useState(null);
    const [openKeys, setOpenKeys] = useState(() => new Set());
    const toggleKey = (key) => {
        setOpenKeys(prev => {
            const next = new Set(prev);
            next.has(key) ? next.delete(key) : next.add(key);
            return next;
        });
    };

    const visible = activeCategory ? FACTS.filter(f => f.category === activeCategory) : FACTS;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/study-guide/government-and-law" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-sm mb-6 inline-block">
                    ← Back to Government and Law Guide
                </Link>

                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-2">
                    🗳️ Elections & Voting Cheat Sheet
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    The exact numbers and process facts examiners love to test: first past the post, voting age, standing for election, and Commons vs Lords.
                </p>

                {/* Stat tiles */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                    {STATS.map((stat) => (
                        <StatTile key={stat.caption} stat={stat} />
                    ))}
                </div>

                {/* Commons vs Lords comparison */}
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">House of Commons vs House of Lords</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    <div className="rounded-2xl border border-indigo-100 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 p-5">
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-full mb-3 bg-indigo-600 text-white whitespace-nowrap">
                            🏛️ House of Commons
                        </div>
                        <ul className="text-sm text-slate-700 dark:text-slate-200 space-y-2 leading-relaxed list-disc list-inside">
                            <li>Members (MPs) are democratically elected by voters in a constituency, using first past the post.</li>
                            <li>The more important chamber: the Prime Minister and almost all cabinet members are MPs.</li>
                            <li>Can overrule the House of Lords, though this power is not used often.</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-rose-100 dark:border-rose-900 bg-rose-50 dark:bg-rose-950 p-5">
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-full mb-3 bg-rose-500 text-white whitespace-nowrap">
                            👑 House of Lords
                        </div>
                        <ul className="text-sm text-slate-700 dark:text-slate-200 space-y-2 leading-relaxed list-disc list-inside">
                            <li>Peers are not elected and do not represent a constituency.</li>
                            <li>Since 1958, the PM can nominate 'life peers'; since 1999 hereditary peers lost the automatic right to sit, and they now elect a few to represent them.</li>
                            <li>More independent of government: suggests amendments, proposes new laws, checks Commons legislation, and holds government to account.</li>
                        </ul>
                    </div>
                </div>

                {/* Filterable process facts */}
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Process Facts</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`whitespace-nowrap text-xs font-bold px-3 py-1.5 rounded-full border transition ${!activeCategory ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 border-transparent' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}
                    >
                        All
                    </button>
                    {CATEGORIES.map(cat => {
                        const style = CATEGORY_STYLES[cat];
                        const active = activeCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(active ? null : cat)}
                                className={`whitespace-nowrap text-xs font-bold px-3 py-1.5 rounded-full border transition ${active ? `${style.color} text-white border-transparent` : `${style.light} border-transparent`}`}
                            >
                                {style.emoji} {cat}
                            </button>
                        );
                    })}
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {visible.map((fact) => {
                        const key = `${fact.category}-${fact.label}`;
                        return (
                            <FactCard
                                key={key}
                                fact={fact}
                                isOpen={openKeys.has(key)}
                                onToggle={() => toggleKey(key)}
                            />
                        );
                    })}
                </div>

                <div className="mb-6">
                    <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-2">Explore more from Government & Law</h2>
                    <div className="inline-flex flex-wrap gap-2">
                        <Link to="/study-guide/devolved-nations" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            🏴 Devolved Parliaments & Legal Systems
                        </Link>
                        <Link to="/study-guide/court-hierarchy" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            ⚖️ Court Hierarchy
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
