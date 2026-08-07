import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';

// Key dates and Acts of Parliament referenced across the Life in the UK
// handbook chapters. Facts and wording are sourced directly from the
// handbook text, not from general knowledge.
const ERA_STYLES = {
    'Medieval / Constitutional': { emoji: '📜', color: 'bg-stone-600', light: 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300' },
    'Union & Empire': { emoji: '⚓', color: 'bg-amber-600', light: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300' },
    'Reform & Rights': { emoji: '🗳️', color: 'bg-emerald-600', light: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' },
    '20th Century & Modern': { emoji: '🇬🇧', color: 'bg-indigo-600', light: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300' },
};

const keyDates = [
    { year: '1215', era: 'Medieval / Constitutional', title: 'Magna Carta', note: 'King John was forced by his noblemen to agree to a charter of rights. It established that even the king was subject to the law, and restricted his power to collect taxes or make laws without his noblemen.' },
    { year: '1679', era: 'Medieval / Constitutional', title: 'Habeas Corpus Act', note: 'Guaranteed that no one could be held prisoner unlawfully: every prisoner has a right to a court hearing. "Habeas corpus" is Latin for "you must present the person in court".' },
    { year: '1689', era: 'Medieval / Constitutional', title: 'Bill of Rights', note: 'Confirmed the rights of Parliament and limited the king\'s power. The monarch could no longer raise taxes or administer justice without Parliament\'s agreement, and had to be Protestant. A new Parliament had to be elected at least every three years.' },
    { year: '1706 / 1707', era: 'Union & Empire', title: 'Acts of Union (England & Scotland)', note: 'The Union with Scotland Act 1706 (Parliament of England) and the Union with England Act 1707 (Parliament of Scotland) put into effect the Treaty of Union agreed on 22 July 1706.' },
    { year: '1801', era: 'Union & Empire', title: 'Act of Union with Ireland', note: 'Ireland became unified with England, Scotland and Wales after the Act of Union of 1800, creating the United Kingdom of Great Britain and Ireland.' },
    { year: '1807', era: 'Union & Empire', title: 'Abolition of the slave trade', note: 'It became illegal to trade slaves in British ships or from British ports, following campaigning by abolitionists including William Wilberforce.' },
    { year: '1832', era: 'Reform & Rights', title: 'Reform Act', note: 'Greatly increased the number of people with the right to vote and abolished the old "pocket" and "rotten" boroughs, shifting parliamentary seats to the towns and cities. Voting was still based on property ownership.' },
    { year: '1833', era: 'Union & Empire', title: 'Emancipation Act', note: 'Abolished slavery throughout the British Empire. The Royal Navy stopped slave ships from other countries, freed the slaves and punished the slave traders.' },
    { year: '1846', era: 'Reform & Rights', title: 'Repeal of the Corn Laws', note: 'The Corn Laws, which had prevented the import of cheap grain, were repealed, promoting free trade and helping British industry by allowing cheaper imported raw materials.' },
    { year: '1867', era: 'Reform & Rights', title: 'Second Reform Act', note: 'Created many more urban parliamentary seats and reduced the property qualification needed to vote, though most men still could not vote and no women could.' },
    { year: '1918', era: 'Reform & Rights', title: 'Representation of the People Act', note: 'The First World War ended on 11 November 1918. By this year most of the campaigners\' reforms had been adopted, and the voting franchise was extended to women over 30.' },
    { year: '1928', era: 'Reform & Rights', title: 'Equal Franchise Act', note: 'The vote was extended to all men and women over 21, giving the UK a fully democratic voting system.' },
    { year: '1948', era: '20th Century & Modern', title: 'National Health Service founded', note: 'Aneurin (Nye) Bevan, Minister for Health in Clement Attlee\'s Labour government, led the establishment of the NHS, guaranteeing a minimum standard of health care for all, free at the point of use.' },
    { year: '1949', era: '20th Century & Modern', title: 'Irish Free State becomes a republic', note: 'Following the 1921 peace treaty and the 1922 split of Ireland, the Irish Free State (the six northern counties remaining in the UK as Northern Ireland) became a republic in 1949.' },
    { year: '1957', era: '20th Century & Modern', title: 'European Economic Community formed', note: 'West Germany, France, Belgium, Italy, Luxembourg and the Netherlands formed the EEC. The UK did not join at first, eventually joining in 1973.' },
    { year: '1969', era: '20th Century & Modern', title: 'Voting age lowered to 18', note: 'The voting age was reduced from 21 to 18 for men and women.' },
    { year: '1973', era: '20th Century & Modern', title: 'UK joins the EEC', note: 'The UK joined the European Economic Community, having initially declined to join in 1957.' },
    { year: '1975', era: '20th Century & Modern', title: 'First EU referendum', note: 'The United Kingdom held its first ever national referendum on whether the UK should remain in the European Communities.' },
    { year: '1998', era: '20th Century & Modern', title: 'Good Friday Agreement & Human Rights Act', note: 'The Good Friday (Belfast) Agreement was signed, building on the Northern Ireland peace process. The Human Rights Act 1998 incorporated the European Convention on Human Rights into UK law.' },
    { year: '1999', era: '20th Century & Modern', title: 'Scottish Parliament & Welsh Assembly established', note: 'Following Tony Blair\'s 1997 election, the Scottish Parliament (Holyrood, Edinburgh) and National Assembly for Wales (Senedd, Cardiff Bay) were formed as part of devolution.' },
    { year: '2016', era: '20th Century & Modern', title: 'EU referendum ("Brexit")', note: 'The UK voted by a margin of 51.9% to 48.1% to leave the European Union in a referendum held on 23 June 2016.' },
    { year: '2020', era: '20th Century & Modern', title: 'UK formally leaves the EU', note: 'The UK formally left the European Union on 31 January 2020.' },
];

const eras = [...new Set(keyDates.map(t => t.era))];

function DateCard({ entry, isOpen, onToggle }) {
    const style = ERA_STYLES[entry.era];
    return (
        <button
            onClick={onToggle}
            className={`flex flex-col items-start text-left w-full sm:w-56 flex-shrink-0 snap-start rounded-2xl border p-4 shadow-sm transition ${isOpen ? 'border-transparent ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-950' : 'border-slate-100 dark:border-slate-800'} bg-white dark:bg-slate-900`}
        >
            <div className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-full mb-3 ${style.light}`}>
                <span>{style.emoji}</span>{entry.era}
            </div>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-slate-50">{entry.year}</div>
            <div className="text-sm font-bold text-slate-700 dark:text-slate-200 mt-1 leading-snug">{entry.title}</div>
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
        { "@type": "ListItem", position: 4, name: "Key Dates Timeline", item: `${SITE_URL}/study-guide/key-dates` },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "UK Key Dates Timeline",
    description: "A visual, colour-coded timeline of the key dates and Acts of Parliament covered in the Life in the UK Test: Magna Carta, Acts of Union, Reform Acts, the NHS, devolution and Brexit.",
    about: "Key dates and Acts of Parliament in UK constitutional and social history",
    mentions: keyDates.map(t => ({
        "@type": "Thing",
        name: t.title,
        description: `${t.year} — ${t.era}`,
    })),
};

export default function KeyDatesTimeline() {
    useDocumentMeta({
        title: 'UK Key Dates Timeline: Life in the UK Test 2026',
        description: 'A visual, colour-coded timeline of the key dates and Acts of Parliament covered in the Life in the UK Test: Magna Carta, Acts of Union, Reform Acts, the NHS, devolution and Brexit.',
        path: '/study-guide/key-dates',
        jsonLd: [breadcrumbSchema, articleSchema],
    });

    const [openKeys, setOpenKeys] = useState(() => new Set());
    const [activeEra, setActiveEra] = useState(null);
    const toggleKey = (key) => {
        setOpenKeys(prev => {
            const next = new Set(prev);
            next.has(key) ? next.delete(key) : next.add(key);
            return next;
        });
    };

    const visible = activeEra ? keyDates.filter(t => t.era === activeEra) : keyDates;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <Link to="/study-guide/british-history" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-sm mb-6 inline-block">
                    ← Back to British History Guide
                </Link>

                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-2">
                    📅 UK Key Dates Timeline
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Tap a card to reveal the key fact. Filter by era to focus your memorising.
                </p>

                {/* Era filter chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <button
                        onClick={() => setActiveEra(null)}
                        className={`whitespace-nowrap text-xs font-bold px-3 py-1.5 rounded-full border transition ${!activeEra ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 border-transparent' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}
                    >
                        All Eras
                    </button>
                    {eras.map(era => {
                        const style = ERA_STYLES[era];
                        const active = activeEra === era;
                        return (
                            <button
                                key={era}
                                onClick={() => setActiveEra(active ? null : era)}
                                className={`whitespace-nowrap text-xs font-bold px-3 py-1.5 rounded-full border transition ${active ? `${style.color} text-white border-transparent` : `${style.light} border-transparent`}`}
                            >
                                {style.emoji} {era}
                            </button>
                        );
                    })}
                </div>

                {/* Timeline track: horizontal scroll-snap on larger screens, stacked on mobile */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 sm:overflow-x-auto sm:pb-4 sm:snap-x sm:snap-mandatory">
                    {visible.map((entry) => {
                        const key = `${entry.year}-${entry.title}`;
                        return (
                            <DateCard
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
                        <Link to="/study-guide/monarchs-timeline" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            👑 Monarchs Timeline
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
