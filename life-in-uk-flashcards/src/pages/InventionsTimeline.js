import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';

// British scientific and industrial inventions/discoveries referenced across the
// Life in the UK handbook chapters (Royal Society through the World Wide Web).
// Facts, names and years are drawn directly from the handbook text.
const CATEGORY_STYLES = {
    'Science': { emoji: '🔬', color: 'bg-blue-600', light: 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300' },
    'Industrial Revolution': { emoji: '⚙️', color: 'bg-amber-600', light: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300' },
    'Medicine & Science': { emoji: '🧬', color: 'bg-emerald-600', light: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' },
    'Modern Technology': { emoji: '💡', color: 'bg-indigo-600', light: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300' },
};

const timeline = [
    { year: '1660s', category: 'Science', name: 'Sir Isaac Newton', note: 'Early member of the Royal Society (founded during the reign of Charles II to promote "natural knowledge", the oldest surviving scientific society in the world). His 1687 book Philosophiae Naturalis Principia Mathematica laid the foundations of classical mechanics and showed how gravity applied to the whole universe. He also discovered that white light is made up of the colours of the rainbow.' },
    { year: '18th century', category: 'Industrial Revolution', name: 'Richard Arkwright: carding machine & spinning mills', note: 'Improved the original carding machine (preparing fibres for spinning into yarn and fabric) and developed horse-driven spinning mills using only one machine, later powered by the steam engine, increasing production efficiency during the Industrial Revolution.' },
    { year: '18th century', category: 'Industrial Revolution', name: 'James Watt: steam power', note: 'James Watt\'s work on steam power was a key scientific discovery that helped the progress of the Industrial Revolution, the rapid development of industry in Britain in the 18th and 19th centuries.' },
    { year: '19th century', category: 'Industrial Revolution', name: 'Bessemer process', note: 'The development of the Bessemer process for the mass production of steel led to the growth of the shipbuilding industry and the railways.' },
    { year: '19th century', category: 'Industrial Revolution', name: 'George & Robert Stephenson: railway engine', note: 'The father-and-son team pioneered the railway engine just before Victoria came to the throne, driving a major expansion of the railways in the Victorian period.' },
    { year: '1838–59', category: 'Industrial Revolution', name: 'Isambard Kingdom Brunel', note: 'Engineer who built tunnels, bridges, railway lines and ships, including the Great Western Railway. Designed three ships that revolutionised naval engineering: SS Great Western (1838), SS Great Britain (1843) and SS Great Eastern (1859).' },
    { year: '1920s', category: 'Modern Technology', name: 'John Logie Baird: television', note: 'Scotsman John Logie Baird developed the television in the 1920s. In 1932 he made the first television broadcast between London and Glasgow.' },
    { year: '1928', category: 'Medicine & Science', name: 'Alexander Fleming: penicillin', note: 'Fleming, researching influenza in 1928, discovered penicillin. It was further developed into a usable drug by Howard Florey and Ernst Chain and was in mass production by the 1940s. Fleming won the Nobel Prize in Medicine in 1945; penicillin is still used to treat bacterial infections today.' },
    { year: '1930s', category: 'Modern Technology', name: 'Alan Turing: the Turing machine', note: 'A theoretical mathematical device invented by British mathematician Alan Turing (1912–54) in the 1930s. The theory was influential in the development of computer science and the modern-day computer.' },
    { year: '1930s', category: 'Modern Technology', name: 'Sir Frank Whittle: jet engine', note: 'The jet engine was developed in Britain in the 1930s by Sir Frank Whittle (1907–96), a British Royal Air Force engineer officer.' },
    { year: '1935', category: 'Modern Technology', name: 'Sir Robert Watson-Watt: radar', note: 'Scotsman Sir Robert Watson-Watt (1892–1973) proposed that enemy aircraft could be detected by radio waves. The first successful radar test took place in 1935. Working with radar later led Sir Bernard Lovell (1913–2012) to build the radio telescope at Jodrell Bank in Cheshire, for many years the biggest in the world.' },
    { year: '1940s', category: 'Medicine & Science', name: 'John MacLeod: insulin', note: 'Scottish physician and researcher John MacLeod (1876–1935) was the co-discoverer of insulin, used to treat diabetes.' },
    { year: '1950s', category: 'Modern Technology', name: 'Sir Christopher Cockerell: hovercraft', note: 'British inventor Sir Christopher Cockerell (1910–99) invented the hovercraft in the 1950s.' },
    { year: '1953', category: 'Medicine & Science', name: 'Structure of DNA', note: 'The structure of the DNA molecule was discovered in 1953 through work at British universities in London and Cambridge. Francis Crick (1916–2004), one of those awarded the Nobel Prize for this discovery, was British. It contributed to many scientific advances, particularly in medicine and fighting crime.' },
    { year: '1960s', category: 'Modern Technology', name: 'James Goodfellow: cash-dispensing ATM', note: 'James Goodfellow (1937–) invented the cash-dispensing ATM ("cashpoint") in the 1960s. The first was put into use by Barclays Bank in Enfield, north London, in 1967.' },
    { year: 'Late 20th c.', category: 'Medicine & Science', name: 'Sir Peter Mansfield: MRI scanner', note: 'British scientist Sir Peter Mansfield (1933–) is the co-inventor of the MRI (magnetic resonance imaging) scanner, enabling exact, non-invasive images of internal organs and revolutionising diagnostic medicine.' },
    { year: '1990', category: 'Modern Technology', name: 'Sir Tim Berners-Lee: World Wide Web', note: 'Sir Tim Berners-Lee (1955–), British inventor of the World Wide Web. Information was successfully transferred via the web for the first time on 25 December 1990.' },
];

const categories = [...new Set(timeline.map(t => t.category))];

function InventionCard({ entry, isOpen, onToggle }) {
    const style = CATEGORY_STYLES[entry.category];
    return (
        <button
            onClick={onToggle}
            className={`flex flex-col items-start text-left w-full sm:w-64 flex-shrink-0 snap-start rounded-2xl border p-4 shadow-sm transition ${isOpen ? 'border-transparent ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-950' : 'border-slate-100 dark:border-slate-800'} bg-white dark:bg-slate-900`}
        >
            <div className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-full mb-3 ${style.light}`}>
                <span>{style.emoji}</span>{entry.category}
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
        { "@type": "ListItem", position: 4, name: "Inventions & Discoveries Timeline", item: `${SITE_URL}/study-guide/inventions-timeline` },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "British Inventions & Discoveries Timeline",
    description: "A visual, color-coded timeline of British scientific and industrial inventions and discoveries covered in the Life in the UK Test, from Isaac Newton to the World Wide Web.",
    about: "British scientific and industrial inventions and discoveries",
    mentions: timeline.map(t => ({
        "@type": "Thing",
        name: t.name,
        description: `${t.year}: ${t.category}`,
    })),
};

export default function InventionsTimeline() {
    useDocumentMeta({
        title: 'British Inventions & Discoveries Timeline: Life in the UK Test 2026',
        description: 'A visual, color-coded timeline of British scientific and industrial inventions and discoveries covered in the Life in the UK Test, from Isaac Newton to the World Wide Web.',
        path: '/study-guide/inventions-timeline',
        jsonLd: [breadcrumbSchema, articleSchema],
    });

    const [openKeys, setOpenKeys] = useState(() => new Set());
    const [activeCategory, setActiveCategory] = useState(null);
    const toggleKey = (key) => {
        setOpenKeys(prev => {
            const next = new Set(prev);
            next.has(key) ? next.delete(key) : next.add(key);
            return next;
        });
    };

    const visible = activeCategory ? timeline.filter(t => t.category === activeCategory) : timeline;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <Link to="/study-guide/british-history" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-sm mb-6 inline-block">
                    ← Back to British History Guide
                </Link>

                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-2">
                    💡 Inventions &amp; Discoveries Timeline
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Tap a card to reveal the key fact. Filter by category to focus your memorising.
                </p>

                {/* Category filter chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`whitespace-nowrap text-xs font-bold px-3 py-1.5 rounded-full border transition ${!activeCategory ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 border-transparent' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}
                    >
                        All Categories
                    </button>
                    {categories.map(category => {
                        const style = CATEGORY_STYLES[category];
                        const active = activeCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(active ? null : category)}
                                className={`whitespace-nowrap text-xs font-bold px-3 py-1.5 rounded-full border transition ${active ? `${style.color} text-white border-transparent` : `${style.light} border-transparent`}`}
                            >
                                {style.emoji} {category}
                            </button>
                        );
                    })}
                </div>

                {/* Timeline track: horizontal scroll-snap on larger screens, stacked on mobile */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 sm:overflow-x-auto sm:pb-4 sm:snap-x sm:snap-mandatory">
                    {visible.map((entry) => {
                        const key = `${entry.year}-${entry.name}`;
                        return (
                            <InventionCard
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
                        <Link to="/study-guide/key-dates" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            📅 Key Dates Timeline
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
