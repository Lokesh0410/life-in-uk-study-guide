import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';

// Patron saints, days and flag descriptions for the four UK nations, sourced
// directly from the handbook's "Patron saints day" section and the "Union
// Flag" section under British History. Handbook-attributed symbols (flower,
// plant, animal) are quiz-answer-key only with no narrative paragraph behind
// them, so they are deliberately excluded here per project convention.
const NATION_STYLES = {
    England: { emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: 'bg-red-600', light: 'bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300' },
    Scotland: { emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', color: 'bg-blue-600', light: 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300' },
    Wales: { emoji: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', color: 'bg-emerald-600', light: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' },
    'Northern Ireland': { emoji: '☘️', color: 'bg-amber-600', light: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300' },
};

const nations = [
    {
        nation: 'England',
        saint: 'St George',
        day: '23 April',
        holiday: false,
        flag: 'The cross of St George is a red cross on a white ground.',
        detail: 'St George’s Day is not a public holiday in England, but it is still celebrated with parades and small festivals held across the country.',
    },
    {
        nation: 'Scotland',
        saint: 'St Andrew',
        day: '30 November',
        holiday: true,
        flag: 'The cross of St Andrew is a diagonal white cross on a blue ground.',
        detail: 'St Andrew’s Day is an official holiday in Scotland, though not all businesses and offices close for it. Events are held across Scotland, especially where there are a lot of people of Scottish heritage.',
    },
    {
        nation: 'Wales',
        saint: 'St David',
        day: '1 March',
        holiday: false,
        flag: 'There is an official Welsh flag showing a Welsh dragon. The dragon does not appear on the Union Flag because Wales was already united with England when the first Union Flag was created in 1606.',
        detail: 'St David’s Day is not a public holiday in Wales, but it is still celebrated with parades and small festivals held across the country.',
    },
    {
        nation: 'Northern Ireland',
        saint: 'St Patrick',
        day: '17 March',
        holiday: true,
        flag: 'The cross of St Patrick is a diagonal red cross on a white ground.',
        detail: 'St Patrick’s Day is an official holiday in Northern Ireland. Events are held across Northern Ireland and the rest of the country, especially where there are a lot of people of Northern Irish and Irish heritage. St Patrick is also remembered as one of the missionaries who spread Christianity in Ireland and became the patron saint of Ireland.',
    },
];

function NationCard({ entry, isOpen, onToggle }) {
    const style = NATION_STYLES[entry.nation];
    return (
        <button
            onClick={onToggle}
            className={`flex flex-col items-start text-left w-full rounded-2xl border p-5 shadow-sm transition ${isOpen ? 'border-transparent ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-950' : 'border-slate-100 dark:border-slate-800'} bg-white dark:bg-slate-900`}
        >
            <div className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-full mb-3 whitespace-nowrap ${style.light}`}>
                <span>{style.emoji}</span>{entry.nation}
            </div>
            <div className="text-lg font-extrabold text-slate-900 dark:text-slate-50">{entry.saint}</div>
            <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">{entry.day}</div>
            <div className={`inline-block mt-2 text-[11px] font-bold px-2 py-0.5 rounded-full ${entry.holiday ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
                {entry.holiday ? 'Official public holiday' : 'Not a public holiday'}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">{entry.flag}</p>
            {isOpen && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">{entry.detail}</p>
            )}
            {!isOpen && (
                <p className="text-[11px] text-indigo-500 dark:text-indigo-400 mt-3 font-medium">Tap for more →</p>
            )}
        </button>
    );
}

const SITE_URL = 'https://lifeinukcoach.co.uk';

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Study Guide', item: `${SITE_URL}/study-guide` },
        { '@type': 'ListItem', position: 3, name: 'Culture and Traditions', item: `${SITE_URL}/study-guide/culture-and-traditions` },
        { '@type': 'ListItem', position: 4, name: 'Patron Saints & Symbols', item: `${SITE_URL}/study-guide/patron-saints` },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: nations.map((entry) => ({
        '@type': 'Question',
        name: `Who is the patron saint of ${entry.nation}, and when is their saint's day?`,
        acceptedAnswer: {
            '@type': 'Answer',
            text: `${entry.nation}'s patron saint is ${entry.saint}, celebrated on ${entry.day}. ${entry.holiday ? 'This is an official public holiday.' : 'This is not an official public holiday.'} ${entry.flag}`,
        },
    })),
};

export default function PatronSaintsAndSymbols() {
    useDocumentMeta({
        title: 'Patron Saints & Symbols: Life in the UK Test 2026',
        description: 'The patron saint, saint’s day and flag of England, Scotland, Wales and Northern Ireland, colour-coded and sourced from the official Life in the UK handbook.',
        path: '/study-guide/patron-saints',
        jsonLd: [breadcrumbSchema, faqSchema],
    });

    const [openKeys, setOpenKeys] = useState(() => new Set());
    const toggleKey = (key) => {
        setOpenKeys(prev => {
            const next = new Set(prev);
            next.has(key) ? next.delete(key) : next.add(key);
            return next;
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/study-guide/culture-and-traditions" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-sm mb-6 inline-block">
                    ← Back to Culture & Traditions Guide
                </Link>

                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-2">
                    🏴󠁧󠁢󠁥󠁮󠁧󠁿 Patron Saints & Symbols
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Each of the four UK nations has its own patron saint, saint’s day, and flag. Only Scotland and Northern Ireland treat the day as an official public holiday. Tap a card for more detail.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                    {nations.map((entry) => (
                        <NationCard
                            key={entry.nation}
                            entry={entry}
                            isOpen={openKeys.has(entry.nation)}
                            onToggle={() => toggleKey(entry.nation)}
                        />
                    ))}
                </div>

                <div className="mt-8 bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 rounded-xl p-6">
                    <h3 className="font-bold text-indigo-950 dark:text-indigo-200 mb-2">The Union Flag</h3>
                    <p className="text-sm text-indigo-900 dark:text-indigo-300 leading-relaxed">
                        The Union Flag (often called the Union Jack) combines the crosses of St George, St Andrew and St Patrick. It was first created in 1606 from the flags of Scotland and England, and is still used today as the official flag of the UK.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-2">Explore more from Culture & Traditions</h2>
                    <div className="inline-flex flex-wrap gap-2">
                        <Link to="/study-guide/festivals-and-celebrations" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            🎆 Festivals & Celebrations
                        </Link>
                        <Link to="/study-guide/sports-and-traditions" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            🏆 Sports & Traditions
                        </Link>
                    </div>
                </div>

                <div className="mt-6 bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 rounded-2xl p-6 text-center">
                    <p className="text-slate-700 dark:text-slate-200 font-medium mb-3">Test yourself with a mock exam</p>
                    <Link to="/mock-exams" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2.5 rounded-xl transition shadow-sm">
                        Start a Mock Exam →
                    </Link>
                </div>
            </div>
        </div>
    );
}
