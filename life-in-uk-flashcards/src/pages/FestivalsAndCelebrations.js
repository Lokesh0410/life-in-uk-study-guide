import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';

// Festivals and celebrations content sourced directly from the handbook's
// "The main christian festivals", "Other religious festivals" and "Other
// festivals and traditions" sections. Facts and dates are pulled verbatim
// from the handbook's narrative paragraphs — nothing here is invented.
const CATEGORY_STYLES = {
    'Christian Festivals': { emoji: '✝️', color: 'bg-indigo-600', light: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300' },
    'Other Religious Festivals': { emoji: '🕎', color: 'bg-amber-600', light: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300' },
    'National & Seasonal Traditions': { emoji: '🎇', color: 'bg-rose-500', light: 'bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300' },
};

const festivals = [
    // --- Christian Festivals ---
    {
        name: 'Christmas Day',
        category: 'Christian Festivals',
        when: '25 December, public holiday',
        fact: 'Many Christians go to church on Christmas Eve or Christmas Day itself. People usually spend the day at home and eat a special meal, often roast turkey, Christmas pudding and mince pies.',
        detail: 'They give gifts, send cards and decorate their houses. Christmas is a special time for children: very young children believe that Father Christmas (also known as Santa Claus) brings them presents during the night before Christmas Day. Many people decorate a tree in their home.',
    },
    {
        name: 'Boxing Day',
        category: 'Christian Festivals',
        when: '26 December, public holiday',
        fact: 'The day after Christmas Day, and the second day of Christmastide. It originated in the UK and is celebrated in many countries that previously formed part of the British Empire.',
        detail: 'It was a custom for tradesmen to collect "Christmas boxes" of money or presents on the first weekday after Christmas as thanks for good service, mentioned in Samuel Pepys’ diary entry for 19 December 1663. This links to an older tradition where servants of the wealthy visited their families the day after serving their masters on Christmas Day, taking home a box of gifts, bonuses and sometimes leftover food. Until the late 20th century, many in the UK also gave a cash Christmas gift to vendors, though not on Boxing Day itself since many did not work that day.',
    },
    {
        name: 'Easter',
        category: 'Christian Festivals',
        when: 'March or April, Good Friday & Easter Monday are public holidays',
        fact: 'Marks the death of Jesus Christ on Good Friday and his rising from the dead on Easter Sunday.',
        detail: '‘Easter eggs’ (often chocolate) are given as presents at Easter as a symbol of new life, and the festival is also celebrated by people who are not religious.',
    },
    {
        name: 'Lent, Shrove Tuesday & Ash Wednesday',
        category: 'Christian Festivals',
        when: 'The 40 days before Easter',
        fact: 'Lent is a time when Christians reflect and prepare for Easter. Traditionally people fasted; today many give up a favourite food instead.',
        detail: 'The day before Lent starts is Shrove Tuesday, or Pancake Day: people eat pancakes, traditionally made to use up foods like eggs, fat and milk before fasting. Lent begins on Ash Wednesday, when church services mark Christians with an ash cross on their forehead as a symbol of death and sorrow for sin.',
    },

    // --- Other Religious Festivals ---
    {
        name: 'Diwali',
        category: 'Other Religious Festivals',
        when: 'October or November, lasting five days',
        fact: 'Often called the Festival of Lights. Celebrated by Hindus and Sikhs; celebrates the victory of good over evil and the gaining of knowledge.',
        detail: 'There are different stories about how the festival came about. There is a famous celebration of Diwali in Leicester.',
    },
    {
        name: 'Hannukah',
        category: 'Other Religious Festivals',
        when: 'November or December, celebrated for eight days',
        fact: 'Commemorates the Jews’ struggle for religious freedom.',
        detail: 'On each day of the festival a candle is lit on a stand of eight candles (a menorah), remembering the story where oil that should have lasted only a day lasted for eight.',
    },
    {
        name: 'Eid al-Fitr',
        category: 'Other Religious Festivals',
        when: 'Date changes every year',
        fact: 'Celebrates the end of Ramadan, when Muslims have fasted for a month, thanking Allah for the strength to complete the fast.',
        detail: 'Muslims attend special services and meals to mark the occasion.',
    },
    {
        name: 'Eid ul Adha',
        category: 'Other Religious Festivals',
        when: 'Date changes every year',
        fact: 'Remembers that the prophet Ibrahim was willing to sacrifice his son when God ordered him to, reminding Muslims of their own commitment to God.',
        detail: 'Many Muslims sacrifice an animal to eat during this festival; in Britain this has to be done in a slaughterhouse.',
    },
    {
        name: 'Vaisakhi',
        category: 'Other Religious Festivals',
        when: '14 April each year',
        fact: 'A Sikh festival which celebrates the founding of the Sikh community known as the Khalsa.',
        detail: 'Celebrated with parades, dancing and singing.',
    },

    // --- National & Seasonal Traditions ---
    {
        name: 'New Year / Hogmanay',
        category: 'National & Seasonal Traditions',
        when: '1 January, public holiday (2 January also a public holiday in Scotland)',
        fact: 'People usually celebrate on the night of 31 December, called New Year’s Eve. In Scotland, 31 December is called Hogmanay.',
        detail: 'For some Scottish people, Hogmanay is a bigger holiday than Christmas.',
    },
    {
        name: 'Halloween',
        category: 'National & Seasonal Traditions',
        when: '31 October',
        fact: 'An ancient festival with roots in the pagan festival marking the beginning of winter.',
        detail: 'Young people often dress up in frightening costumes to play ‘trick or treat’: people give them treats to stop them playing tricks on them. Many people carve lanterns out of pumpkins and put a candle inside.',
    },
    {
        name: 'Bonfire Night',
        category: 'National & Seasonal Traditions',
        when: '5 November',
        fact: 'People in Great Britain set off fireworks at home or at special displays.',
        detail: 'The origin of this celebration was an event in 1605, when a group of Catholics led by Guy Fawkes failed in their plan to kill the Protestant king with a bomb in the Houses of Parliament.',
    },
    {
        name: 'Remembrance Day',
        category: 'National & Seasonal Traditions',
        when: '11 November',
        fact: 'Commemorates those who died fighting for the UK and its allies. Originally it commemorated the dead of the First World War, which ended on 11 November 1918.',
        detail: 'People wear poppies (the red flower found on the battlefields of the First World War). At 11.00 am there is a two-minute silence and wreaths are laid at the Cenotaph in Whitehall, London.',
    },
];

const CATEGORIES = ['All', 'Christian Festivals', 'Other Religious Festivals', 'National & Seasonal Traditions'];

function FestivalCard({ entry, isOpen, onToggle }) {
    const style = CATEGORY_STYLES[entry.category];
    return (
        <button
            onClick={onToggle}
            className={`flex flex-col items-start text-left w-full rounded-2xl border p-5 shadow-sm transition ${isOpen ? 'border-transparent ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-950' : 'border-slate-100 dark:border-slate-800'} bg-white dark:bg-slate-900`}
        >
            <div className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-full mb-3 whitespace-nowrap ${style.light}`}>
                <span>{style.emoji}</span>{entry.category}
            </div>
            <div className="text-lg font-extrabold text-slate-900 dark:text-slate-50">{entry.name}</div>
            <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">{entry.when}</div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">{entry.fact}</p>
            {isOpen && entry.detail && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">{entry.detail}</p>
            )}
            {!isOpen && entry.detail && (
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
        { '@type': 'ListItem', position: 4, name: 'Festivals & Celebrations', item: `${SITE_URL}/study-guide/festivals-and-celebrations` },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: festivals.map((entry) => ({
        '@type': 'Question',
        name: `What is ${entry.name}, and when is it celebrated?`,
        acceptedAnswer: {
            '@type': 'Answer',
            text: `${entry.when}. ${entry.fact}`,
        },
    })),
};

export default function FestivalsAndCelebrations() {
    useDocumentMeta({
        title: 'Festivals & Celebrations: Life in the UK Test 2026',
        description: 'Christmas, Easter, Diwali, Hannukah, Eid, Vaisakhi, Hogmanay, Halloween, Bonfire Night and Remembrance Day: the UK calendar of festivals, sourced from the official Life in the UK handbook.',
        path: '/study-guide/festivals-and-celebrations',
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

    const [filter, setFilter] = useState('All');
    const visible = filter === 'All' ? festivals : festivals.filter(f => f.category === filter);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/study-guide/culture-and-traditions" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-sm mb-6 inline-block">
                    ← Back to Culture & Traditions Guide
                </Link>

                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-2">
                    🎆 Festivals & Celebrations
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Christian, other religious, and national festivals celebrated across the UK. Tap a card for more detail.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`whitespace-nowrap text-xs font-bold px-3 py-1.5 rounded-full border transition ${filter === cat ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {visible.map((entry) => (
                        <FestivalCard
                            key={entry.name}
                            entry={entry}
                            isOpen={openKeys.has(entry.name)}
                            onToggle={() => toggleKey(entry.name)}
                        />
                    ))}
                </div>

                <div className="mt-8">
                    <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-2">Explore more from Culture & Traditions</h2>
                    <div className="inline-flex flex-wrap gap-2">
                        <Link to="/study-guide/patron-saints" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            🏴󠁧󠁢󠁥󠁮󠁧󠁿 Patron Saints & Symbols
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
