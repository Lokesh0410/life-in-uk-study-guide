import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';

// Sports content sourced directly from the handbook's "Sport" section
// (Olympic games, Cricket, Football, Rugby, Horse-racing, Golf, Tennis,
// Water sports, Motor sports, Skiing). Facts are pulled from the handbook's
// narrative paragraphs — nothing here is invented.
const CATEGORY_STYLES = {
    'Olympics & Milestones': { emoji: '🥇', color: 'bg-amber-600', light: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300' },
    'National Sports': { emoji: '⚽', color: 'bg-emerald-600', light: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' },
    'Famous Venues & Events': { emoji: '🏟️', color: 'bg-indigo-600', light: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300' },
};

const sports = [
    // --- Olympics & Milestones ---
    {
        name: 'Olympic Games hosted by the UK',
        category: 'Olympics & Milestones',
        tag: '1908 · 1948 · 2012',
        fact: 'The UK has hosted the Olympic Games on three occasions: 1908, 1948 and 2012.',
        detail: 'The main Olympic site for the 2012 Games was in Stratford, East London. The British team was very successful across a wide range of Olympic sports, finishing third in the medal table.',
    },
    {
        name: 'Team GB',
        category: 'Olympics & Milestones',
        tag: 'Since 1896',
        fact: 'Athletes from the UK, its overseas territories and Crown dependencies compete as Great Britain, or Team GB.',
        detail: 'It has sent athletes to every Summer and Winter Games, along with France and Switzerland, since the start of the modern Olympics in 1896, including the 1980 and 1984 Games which were boycotted by other nations. From 1896 to 2018, Great Britain won 851 medals at the Summer Olympics and another 32 at the Winter Olympics.',
    },
    {
        name: 'Bobby Moore',
        category: 'Olympics & Milestones',
        tag: '1941–93',
        fact: 'Captained the English football team that won the World Cup in 1966.',
        detail: '',
    },
    {
        name: 'Sir Ian Botham',
        category: 'Olympics & Milestones',
        tag: 'Born 1955',
        fact: 'Captained the English cricket team and holds a number of English Test cricket records, both for batting and for bowling.',
        detail: '',
    },
    {
        name: 'Sir Steve Redgrave',
        category: 'Olympics & Milestones',
        tag: 'Born 1962',
        fact: 'Won gold medals in rowing in five consecutive Olympic Games and is one of Britain’s greatest Olympians.',
        detail: '',
    },
    {
        name: 'Sir Chris Hoy',
        category: 'Olympics & Milestones',
        tag: 'Born 1976',
        fact: 'Scottish cyclist who has won six gold and one silver Olympic medals, plus 11 world championship titles.',
        detail: '',
    },
    {
        name: 'Bradley Wiggins',
        category: 'Olympics & Milestones',
        tag: 'Born 1980',
        fact: 'Cyclist who in 2012 became the first Briton to win the Tour de France. He has won seven Olympic medals, including gold in 2004, 2008 and 2012.',
        detail: '',
    },
    {
        name: 'Mo Farah',
        category: 'Olympics & Milestones',
        tag: 'Born 1983',
        fact: 'British distance runner, born in Somalia, who won gold medals in the 2012 Olympics for the 5,000m and 10,000m: the first Briton to win Olympic gold in the 10,000m.',
        detail: '',
    },
    {
        name: 'Jessica Ennis',
        category: 'Olympics & Milestones',
        tag: 'Born 1986',
        fact: 'Won the 2012 Olympic gold medal in the heptathlon, which includes seven different track and field events, and holds a number of British athletics records.',
        detail: '',
    },
    {
        name: 'Andy Murray',
        category: 'Olympics & Milestones',
        tag: 'Born 1987',
        fact: 'Scottish tennis player who in 2012 won the men’s singles in the US Open: the first British man to win a singles Grand Slam title since 1936.',
        detail: 'In the same year he won Olympic gold and silver medals and was runner-up in the men’s singles at Wimbledon.',
    },

    // --- National Sports ---
    {
        name: 'Cricket',
        category: 'National Sports',
        tag: 'Originated in England',
        fact: 'Cricket originated in England and is now played in many countries. Games can last up to five days and can still end in a draw.',
        detail: 'Expressions such as ‘rain stopped play’, ‘batting on a sticky wicket’, ‘playing a straight bat’, ‘bowled a googly’ or ‘it’s just not cricket’ have passed into everyday usage. The most famous competition is the Ashes, a series of Test matches played between England and Australia.',
    },
    {
        name: 'Football',
        category: 'National Sports',
        tag: 'UK’s most popular sport',
        fact: 'Football has a long history in the UK; the first professional clubs were formed in the late 19th century. England, Scotland, Wales and Northern Ireland each have separate leagues.',
        detail: 'The English Premier League attracts a huge international audience. UK teams also compete in competitions such as the UEFA Champions League. Each country has its own national team competing in tournaments such as the FIFA World Cup and UEFA European Championships. England’s only international tournament victory was the 1966 World Cup, hosted in the UK.',
    },
    {
        name: 'Rugby',
        category: 'National Sports',
        tag: 'Originated in England, early 19th century',
        fact: 'Very popular in the UK today, with two types: union and league, each with separate leagues and national teams in England, Wales, Scotland and Northern Ireland (who play with the Irish Republic).',
        detail: 'The most famous rugby union competition is the Six Nations Championship between England, Ireland, Scotland, Wales, France and Italy. The Super League is the most well-known rugby league (club) competition.',
    },
    {
        name: 'Golf',
        category: 'National Sports',
        tag: 'Traced to 15th-century Scotland',
        fact: 'One of the more popular sports in the UK. England has the highest number of registered golf courses in Europe (1,872 as of 2017), followed by Germany (731); Scotland has 560, Ireland 405 and Wales 145.',
        detail: 'St Andrews in Scotland is known as the home of golf. The Open Championship is the only ‘Major’ tournament held outside the United States, hosted by a different golf course each year.',
    },
    {
        name: 'Tennis',
        category: 'National Sports',
        tag: 'Evolved in England, late 19th century',
        fact: 'The first tennis club was founded in Leamington Spa in 1872.',
        detail: 'The Wimbledon Championships, held at the All England Lawn Tennis and Croquet Club, is the oldest tennis tournament in the world and the only Grand Slam event played on grass. Since the Australian Open shifted to hardcourt in 1988, Wimbledon is the only major still played on grass.',
    },
    {
        name: 'Horse-racing',
        category: 'National Sports',
        tag: 'Evidence dating to Roman times',
        fact: 'A very long history in Britain, with a long association with royalty.',
        detail: 'Famous events include Royal Ascot (a five-day meeting in Berkshire attended by the Royal Family), the Grand National at Aintree near Liverpool, and the Scottish Grand National at Ayr. There is a National Horseracing Museum in Newmarket, Suffolk.',
    },
    {
        name: 'Water sports',
        category: 'National Sports',
        tag: 'Sailing & rowing',
        fact: 'Sailing continues to be popular in the UK, reflecting its maritime heritage. Sir Francis Chichester was the first person to sail single-handed around the world (1966/67); two years later Sir Robin Knox-Johnston became the first to do so without stopping.',
        detail: 'The most famous sailing events are held at Cowes on the Isle of Wight. Rowing is also popular, including the yearly Boat Race on the Thames between Oxford and Cambridge Universities.',
    },
    {
        name: 'Motor sports',
        category: 'National Sports',
        tag: 'Racing since 1902',
        fact: 'A long history of motor sport in the UK, for both cars and motorcycles. Motor-car racing in the UK started in 1902, and the UK continues to be a world leader in motor-sport technology.',
        detail: 'The British Grand Prix is held at the Silverstone Circuit in Northamptonshire. Recent British Formula 1 World Champions include Damon Hill, Lewis Hamilton and Jenson Button.',
    },
    {
        name: 'Skiing',
        category: 'National Sports',
        tag: 'Growing in popularity',
        fact: 'Increasingly popular in the UK. Many people go abroad to ski and there are also dry ski slopes throughout the UK.',
        detail: 'There are five ski centres in Scotland, as well as Europe’s longest dry ski slope near Edinburgh.',
    },

    // --- Famous Venues & Events ---
    {
        name: 'Wembley Stadium & Millennium Stadium',
        category: 'Famous Venues & Events',
        tag: 'London · Cardiff',
        fact: 'Many sporting events take place at major stadiums such as Wembley Stadium in London and the Millennium Stadium in Cardiff.',
        detail: 'Local governments and private companies also provide sports facilities such as swimming pools, tennis courts, football pitches, dry ski slopes and gymnasiums. Many famous sports, including cricket, football, lawn tennis, golf and rugby, began in Britain.',
    },
    {
        name: 'The Ashes',
        category: 'Famous Venues & Events',
        tag: 'Cricket',
        fact: 'The most famous cricket competition is the Ashes, a series of Test matches played between England and Australia.',
        detail: '',
    },
    {
        name: 'Silverstone Circuit',
        category: 'Famous Venues & Events',
        tag: 'Northamptonshire',
        fact: 'Home of the British Grand Prix, held near the village of Silverstone. A Formula 1 Grand Prix event is held there in the UK each year.',
        detail: 'The 2019 event was the 70th time the race had been run as a World Championship event since the inaugural 1950 season, and the 53rd time a World Championship round had been held at Silverstone.',
    },
];

const CATEGORIES = ['All', 'Olympics & Milestones', 'National Sports', 'Famous Venues & Events'];

function SportCard({ entry, isOpen, onToggle }) {
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
            {entry.tag && (
                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">{entry.tag}</div>
            )}
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
        { '@type': 'ListItem', position: 4, name: 'Sports & Traditions', item: `${SITE_URL}/study-guide/sports-and-traditions` },
    ],
};

// Representative subset (national sports + most-tested Olympic milestones) —
// the full array has 18 entries, more than useful for a FAQPage mainEntity.
const FAQ_NAMES = [
    'Olympic Games hosted by the UK',
    'Team GB',
    'Bobby Moore',
    'Sir Steve Redgrave',
    'Andy Murray',
    'Cricket',
    'Football',
    'Rugby',
    'Golf',
    'Tennis',
    'Horse-racing',
    'The Ashes',
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sports
        .filter((entry) => FAQ_NAMES.includes(entry.name))
        .map((entry) => ({
            '@type': 'Question',
            name: `What is significant about ${entry.name} in the Life in the UK Test?`,
            acceptedAnswer: {
                '@type': 'Answer',
                text: entry.fact,
            },
        })),
};

export default function SportsAndTraditions() {
    useDocumentMeta({
        title: 'Sports & Traditions: Life in the UK Test 2026',
        description: 'Olympic history, cricket, football, rugby, golf, tennis, horse-racing, motor sports and more: the UK sporting facts the exam tests, sourced from the official Life in the UK handbook.',
        path: '/study-guide/sports-and-traditions',
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
    const visible = filter === 'All' ? sports : sports.filter(s => s.category === filter);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/study-guide/culture-and-traditions" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-sm mb-6 inline-block">
                    ← Back to Culture & Traditions Guide
                </Link>

                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-2">
                    🏆 Sports & Traditions
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Olympic history, Team GB legends and the UK's national sports. Tap a card for more detail.
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
                        <SportCard
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
                        <Link to="/study-guide/festivals-and-celebrations" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            🎆 Festivals & Celebrations
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
