import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';

// International relations facts, sourced directly from the "The Commonwealth",
// "The Council of Europe", "The United Nations" and "NATO" sections of the handbook.
const CATEGORY_STYLES = {
    'The Commonwealth': { emoji: '🌐', color: 'bg-amber-600', light: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300' },
    'International Organisations': { emoji: '🏢', color: 'bg-indigo-600', light: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300' },
};

const facts = [
    // --- The Commonwealth ---
    {
        title: 'What the Commonwealth is',
        category: 'The Commonwealth',
        fact: 'The Commonwealth is an association of countries that support each other and work together towards shared goals in democracy and development. Most member states were once part of the British Empire, although a few countries which were not have also joined.',
        detail: '',
    },
    {
        title: 'The King and membership',
        category: 'The Commonwealth',
        fact: 'The King is the ceremonial head of the Commonwealth, which currently has 54 member states. Membership is voluntary, and the Commonwealth has no power over its members, although it can suspend membership.',
        detail: 'The Commonwealth is based on the core values of democracy, good government and the rule of law.',
    },
    {
        title: 'Commonwealth members',
        category: 'The Commonwealth',
        fact: 'Commonwealth members include Antigua and Barbuda, Australia, The Bahamas, Bangladesh, Barbados, Belize, Botswana, Brunei Darussalam, Cameroon, Canada, Cyprus, Dominica, Fiji (currently suspended), The Gambia, Ghana, Grenada, Guyana, India, Jamaica and Kenya.',
        detail: 'Also: Kiribati, Lesotho, Malawi, Malaysia, Maldives, Malta, Mauritius, Mozambique, Namibia, Nauru, New Zealand, Nigeria, Pakistan, Papua New Guinea, Rwanda, Samoa, Seychelles, Sierra Leone, Singapore, Solomon Islands, South Africa, Sri Lanka, St Kitts and Nevis, St Lucia, St Vincent and the Grenadines, Swaziland, Tanzania, Tonga, Trinidad and Tobago, Tuvalu, Uganda, the UK, Vanuatu and Zambia.',
    },
    // --- International Organisations ---
    {
        title: 'The Council of Europe',
        category: 'International Organisations',
        fact: 'The Council of Europe is separate from the EU. It has 47 member countries, including the UK, and is responsible for the protection and promotion of human rights in those countries. It has no power to make laws but draws up conventions and charters, the best known being the European Convention on Human Rights.',
        detail: 'Its best known body is the European Court of Human Rights, which enforces the Convention. Its two statutory bodies are the Committee of Ministers (foreign ministers of each member state) and the Parliamentary Assembly (members of national parliaments). The Commissioner for Human Rights is an independent institution mandated to promote awareness of and respect for human rights, and the Secretary General heads the secretariat. The headquarters are in Strasbourg, France, and English and French are its two official languages.',
    },
    {
        title: 'The United Nations',
        category: 'International Organisations',
        fact: 'The UK is part of the United Nations (UN), an international organisation with more than 190 countries as members. The UN was set up after the Second World War and aims to prevent war and promote international peace and security.',
        detail: 'There are 15 members on the UN Security Council, which recommends action when there are international crises and threats to peace. The UK is one of five permanent members of the Security Council. The UN is headquartered on international territory in New York City, with other main offices in Geneva, Nairobi, Vienna and The Hague.',
    },
    {
        title: 'NATO',
        category: 'International Organisations',
        fact: 'The UK is also a member of NATO (the North Atlantic Treaty Organization), a group of European and North American countries that have agreed to help each other if they come under attack. It also aims to maintain peace between all of its members.',
        detail: 'NATO’s Headquarters are located in Evere, Brussels, Belgium, while the headquarters of Allied Command Operations is near Mons, Belgium.',
    },
];

const categories = Object.keys(CATEGORY_STYLES);

function FactCard({ item, isOpen, onToggle }) {
    const style = CATEGORY_STYLES[item.category];
    return (
        <button
            onClick={onToggle}
            className={`flex flex-col items-start text-left w-full rounded-2xl border p-4 shadow-sm transition ${isOpen ? 'border-transparent ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-950' : 'border-slate-100 dark:border-slate-800'} bg-white dark:bg-slate-900`}
        >
            <div className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-full mb-3 whitespace-nowrap ${style.light}`}>
                <span>{style.emoji}</span>{item.category}
            </div>
            <div className="text-lg font-extrabold text-slate-900 dark:text-slate-50 leading-snug">{item.title}</div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{item.fact}</p>
            {isOpen && item.detail && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">{item.detail}</p>
            )}
            {!isOpen && item.detail && (
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
        { '@type': 'ListItem', position: 3, name: 'Modern Britain and Society', item: `${SITE_URL}/study-guide/modern-britain` },
        { '@type': 'ListItem', position: 4, name: 'Britain in the World', item: `${SITE_URL}/study-guide/britain-in-the-world` },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: facts.map((item) => ({
        '@type': 'Question',
        name: `What does the Life in the UK Test cover about ${item.title}?`,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.fact,
        },
    })),
};

export default function BritainInTheWorld() {
    useDocumentMeta({
        title: 'Britain in the World: Life in the UK Test 2026',
        description: 'A filterable fact-card guide to the Commonwealth, the Council of Europe, the United Nations and NATO, sourced from the official Life in the UK Test handbook.',
        path: '/study-guide/britain-in-the-world',
        jsonLd: [breadcrumbSchema, faqSchema],
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

    const visible = activeCategory ? facts.filter(f => f.category === activeCategory) : facts;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <Link to="/study-guide/modern-britain" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-sm mb-6 inline-block">
                    ← Back to Modern Britain & Society Guide
                </Link>

                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-2">
                    🌍 Britain in the World
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    The Commonwealth, the Council of Europe, the United Nations and NATO: the UK's role on the international stage. Filter by category and tap a card for more detail.
                </p>

                {/* Category filter chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`whitespace-nowrap text-xs font-bold px-3 py-1.5 rounded-full border transition ${!activeCategory ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 border-transparent' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}
                    >
                        All Topics
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

                {/* Card grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {visible.map((item) => (
                        <FactCard
                            key={item.title}
                            item={item}
                            isOpen={openKeys.has(item.title)}
                            onToggle={() => toggleKey(item.title)}
                        />
                    ))}
                </div>

                <div className="mt-12">
                    <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-2">Explore more from Modern Britain & Society</h2>
                    <div className="inline-flex flex-wrap gap-2">
                        <Link to="/study-guide/human-rights" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            ⚖️ Human Rights & Citizenship
                        </Link>
                        <Link to="/study-guide/taxation-and-driving" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            🚗 Taxation & Driving
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
