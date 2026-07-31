import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';

// Test-relevant monarchs and royal houses referenced across the Life in the UK
// handbook chapters (Norman Conquest through the present). Dates are widely
// documented historical fact, not exam-specific claims.
const HOUSE_STYLES = {
    'Norman': { emoji: '⚔️', color: 'bg-slate-600', light: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300' },
    'Plantagenet': { emoji: '🛡️', color: 'bg-emerald-600', light: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' },
    'Lancaster / York': { emoji: '🌹', color: 'bg-rose-500', light: 'bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300' },
    'Tudor': { emoji: '👑', color: 'bg-red-600', light: 'bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300' },
    'Stuart': { emoji: '📜', color: 'bg-blue-600', light: 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300' },
    'Commonwealth': { emoji: '⚖️', color: 'bg-stone-600', light: 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300' },
    'Hanover': { emoji: '🎼', color: 'bg-amber-600', light: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300' },
    'Windsor': { emoji: '🇬🇧', color: 'bg-indigo-600', light: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300' },
};

const timeline = [
    { year: '1066', house: 'Norman', name: 'William I (the Conqueror)', note: 'Defeated Harold at the Battle of Hastings. Commissioned the Domesday Book (1086).' },
    { year: '1154', house: 'Plantagenet', name: 'Henry II', note: 'Expanded royal power; conflict with Thomas Becket.' },
    { year: '1199', house: 'Plantagenet', name: 'John', note: 'Forced to sign the Magna Carta in 1215, limiting royal power.' },
    { year: '1327', house: 'Plantagenet', name: 'Edward III', note: 'Reign saw the start of the Hundred Years\' War with France.' },
    { year: '1455', house: 'Lancaster / York', name: 'Wars of the Roses', note: 'Civil war between House of Lancaster (red rose) and House of York (white rose), ending at Bosworth Field in 1485.' },
    { year: '1485', house: 'Tudor', name: 'Henry VII', note: 'First Tudor king, defeated Richard III at Bosworth Field.' },
    { year: '1509', house: 'Tudor', name: 'Henry VIII', note: 'Six wives; broke from the Catholic Church, founding the Church of England.' },
    { year: '1558', house: 'Tudor', name: 'Elizabeth I', note: 'Defeat of the Spanish Armada (1588); Shakespeare\'s era.' },
    { year: '1603', house: 'Stuart', name: 'James I', note: 'First king of both England and Scotland (Union of the Crowns).' },
    { year: '1649', house: 'Commonwealth', name: 'Oliver Cromwell (Lord Protector)', note: 'Britain without a monarch, following the execution of Charles I.' },
    { year: '1660', house: 'Stuart', name: 'Charles II', note: 'Restoration of the monarchy. Great Plague (1665) and Great Fire of London (1666) during his reign.' },
    { year: '1685', house: 'Stuart', name: 'James II', note: 'Roman Catholic king; favoured Catholics for army posts, leading to conflict with Parliament.' },
    { year: '1689', house: 'Stuart', name: 'William III & Mary II', note: 'Invited to invade in 1688 (the "Glorious Revolution"). Bill of Rights (1689) limited the monarch\'s power and established parliamentary authority.' },
    { year: '1714', house: 'Hanover', name: 'George I', note: 'First Hanoverian king; first Prime Minister, Sir Robert Walpole, served 1721–1742.' },
    { year: '1727', house: 'Hanover', name: 'George II', note: 'Defeated the Jacobite rising of Bonnie Prince Charlie at the Battle of Culloden (1746).' },
    { year: '1837', house: 'Hanover', name: 'Victoria', note: 'Reigned almost 64 years, the second-longest reign of any British monarch, after Elizabeth II. The British Empire grew to its largest extent during her reign.' },
    { year: '1936', house: 'Windsor', name: 'George VI', note: 'Reigned through the Second World War, following Edward VIII\'s abdication.' },
    { year: '1952', house: 'Windsor', name: 'Elizabeth II', note: 'Reigned 70 years, the longest of any British monarch.' },
    { year: '2022', house: 'Windsor', name: 'Charles III', note: 'Head of state since 8 September 2022. The UK is a constitutional monarchy: the King does not rule the country, but invites the leader of the largest party in Parliament to become Prime Minister.' },
];

const houses = [...new Set(timeline.map(t => t.house))];

function MonarchCard({ entry, isOpen, onToggle }) {
    const style = HOUSE_STYLES[entry.house];
    return (
        <button
            onClick={onToggle}
            className={`flex flex-col items-start text-left w-full sm:w-56 flex-shrink-0 snap-start rounded-2xl border p-4 shadow-sm transition ${isOpen ? 'border-transparent ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-950' : 'border-slate-100 dark:border-slate-800'} bg-white dark:bg-slate-900`}
        >
            <div className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-full mb-3 ${style.light}`}>
                <span>{style.emoji}</span>{entry.house}
            </div>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-slate-50">{entry.year}</div>
            <div className="text-sm font-bold text-slate-700 dark:text-slate-200 mt-1 leading-snug">{entry.name}</div>
            {isOpen && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">{entry.note}</p>
            )}
            {!isOpen && (
                <p className="text-[11px] text-indigo-500 dark:text-indigo-400 mt-3 font-medium">Tap for details →</p>
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
        { "@type": "ListItem", position: 3, name: "British History", item: `${SITE_URL}/study-guide/british-history` },
        { "@type": "ListItem", position: 4, name: "Monarchs Timeline", item: `${SITE_URL}/study-guide/monarchs-timeline` },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "UK Monarchs Timeline",
    description: "A visual, color-coded timeline of British monarchs and royal houses covered in the Life in the UK Test, from William the Conqueror to King Charles III.",
    about: "British monarchs and royal houses, 1066 to present",
    mentions: timeline.map(t => ({
        "@type": "Person",
        name: t.name,
        description: `${t.year}: ${t.house}`,
    })),
};

export default function MonarchsTimeline() {
    useDocumentMeta({
        title: 'UK Monarchs Timeline: Life in the UK Test 2026',
        description: 'A visual, color-coded timeline of British monarchs and royal houses covered in the Life in the UK Test, from William the Conqueror to King Charles III.',
        path: '/study-guide/monarchs-timeline',
        jsonLd: [breadcrumbSchema, articleSchema],
    });

    const [openKeys, setOpenKeys] = useState(() => new Set());
    const [activeHouse, setActiveHouse] = useState(null);
    const toggleKey = (key) => {
        setOpenKeys(prev => {
            const next = new Set(prev);
            next.has(key) ? next.delete(key) : next.add(key);
            return next;
        });
    };

    const visible = activeHouse ? timeline.filter(t => t.house === activeHouse) : timeline;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <Link to="/study-guide/british-history" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-sm mb-6 inline-block">
                    ← Back to British History Guide
                </Link>

                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-2">
                    👑 UK Monarchs Timeline
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Tap a card to reveal the key fact. Filter by royal house to focus your memorising.
                </p>

                {/* House filter chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <button
                        onClick={() => setActiveHouse(null)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-full border transition ${!activeHouse ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 border-transparent' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}
                    >
                        All Houses
                    </button>
                    {houses.map(house => {
                        const style = HOUSE_STYLES[house];
                        const active = activeHouse === house;
                        return (
                            <button
                                key={house}
                                onClick={() => setActiveHouse(active ? null : house)}
                                className={`whitespace-nowrap text-xs font-bold px-3 py-1.5 rounded-full border transition ${active ? `${style.color} text-white border-transparent` : `${style.light} border-transparent`}`}
                            >
                                {style.emoji} {house}
                            </button>
                        );
                    })}
                </div>

                {/* Timeline track: horizontal scroll-snap on larger screens, stacked on mobile */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 sm:overflow-x-auto sm:pb-4 sm:snap-x sm:snap-mandatory">
                    {visible.map((entry) => {
                        const key = `${entry.year}-${entry.name}`;
                        return (
                            <MonarchCard
                                key={key}
                                entry={entry}
                                isOpen={openKeys.has(key)}
                                onToggle={() => toggleKey(key)}
                            />
                        );
                    })}
                </div>

                <div className="mt-12">
                    <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-2">Explore more from British History</h2>
                    <div className="inline-flex flex-wrap gap-2">
                        <Link to="/study-guide/key-dates" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            📅 Key Dates Timeline
                        </Link>
                        <Link to="/study-guide/inventions-timeline" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            💡 Inventions & Discoveries
                        </Link>
                        <Link to="/study-guide/people-matrix" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            🧑‍🎓 Who's Who of British History
                        </Link>
                    </div>
                </div>

                <div className="mt-6 bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 rounded-2xl p-6 text-center">
                    <p className="text-slate-700 dark:text-slate-200 font-medium mb-3">Test yourself on British History with a mock exam</p>
                    <Link to="/mock-exams" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2.5 rounded-xl transition shadow-sm">
                        Start a Mock Exam →
                    </Link>
                </div>
            </div>
        </div>
    );
}
