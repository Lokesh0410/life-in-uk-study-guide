import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';

// Human rights, equal opportunities and citizenship-responsibility facts,
// sourced directly from the "Fundamental Principals of Life in the UK" and
// "Your Role in the UK Community" chapters of the handbook.
const CATEGORY_STYLES = {
    'Human Rights': { emoji: '⚖️', color: 'bg-indigo-600', light: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300' },
    'Equal Opportunities': { emoji: '🤝', color: 'bg-emerald-600', light: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' },
    'Citizen Responsibilities': { emoji: '🏘️', color: 'bg-amber-600', light: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300' },
};

const facts = [
    // --- Human Rights ---
    {
        title: 'European Convention on Human Rights',
        category: 'Human Rights',
        fact: 'British diplomats and lawyers helped draft the European Convention on Human Rights and Fundamental Freedoms. The UK was one of the first countries to sign it, in 1950.',
        detail: 'These rights have their roots in Magna Carta, the Habeas Corpus Act and the Bill of Rights of 1689, and developed over time. Principles in the Convention include: the right to life, prohibition of torture, prohibition of slavery and forced labour, the right to liberty and security, the right to a fair trial, freedom of thought, conscience and religion, and freedom of expression (speech).',
    },
    {
        title: 'Human Rights Act 1998',
        category: 'Human Rights',
        fact: 'The Human Rights Act 1998 incorporated the European Convention on Human Rights into UK law.',
        detail: 'The government, public bodies and the courts must all follow the principles of the Convention.',
    },
    // --- Equal Opportunities ---
    {
        title: 'Anti-discrimination law',
        category: 'Equal Opportunities',
        fact: 'UK laws ensure people are not treated unfairly in any area of life or work because of age, disability, sex, pregnancy and maternity, race, religion or belief, sexuality or marital status.',
        detail: 'If you face problems with discrimination, you can get information from the Citizens Advice Bureau, or from the Equality and Human Rights Commission (England, Wales and Scotland), the Scottish Human Rights Commission, the Equality Commission for Northern Ireland, or the Northern Ireland Human Rights Commission.',
    },
    {
        title: 'Equality between men and women',
        category: 'Equal Opportunities',
        fact: 'It is a legal requirement that men and women should not be discriminated against because of their gender or because they are, or are not, married. They have equal rights to work, own property, marry and divorce, and married parents are equally responsible for their children.',
        detail: 'Women make up about half of the UK workforce. On average, girls leave school with better qualifications than boys, and more women than men study at university. Employment opportunities for women are much greater than in the past, with more women in high-level positions than ever before.',
    },
    // --- Citizen Responsibilities ---
    {
        title: 'Shared values and responsibilities',
        category: 'Citizen Responsibilities',
        fact: 'Becoming a British citizen or settling in the UK brings responsibilities as well as opportunities. Shared values include obeying and respecting the law, respecting the rights of others, treating others with fairness, behaving responsibly, and helping and protecting your family.',
        detail: 'They also include respecting and preserving the environment, treating everyone equally regardless of sex, race, religion, age, disability, class or sexual orientation, working to provide for yourself and your family, helping others, and voting in local and national government elections.',
    },
    {
        title: 'Jury service',
        category: 'Citizen Responsibilities',
        fact: 'People on the electoral register can be randomly selected for jury service. Anyone on the electoral register aged 18 to 70 can be asked to do this.',
        detail: '',
    },
    {
        title: 'Being a good neighbour',
        category: 'Citizen Responsibilities',
        fact: 'Getting to know your neighbours helps you become part of the community. You can help prevent problems by respecting their privacy, limiting noise, keeping your garden tidy, and only putting out refuse on collection days.',
        detail: '',
    },
    {
        title: 'Volunteering and local activities',
        category: 'Citizen Responsibilities',
        fact: 'Volunteering and helping your community is an important part of being a good citizen, helping you integrate, get to know other people, and fulfil your duties such as behaving responsibly and helping others.',
        detail: 'Ways to get involved include helping in schools (supporting activities or listening to children read), joining a parent-teacher association (PTA), or becoming a school governor or school board member (aged 18 or over, with no upper age limit).',
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
        { '@type': 'ListItem', position: 4, name: 'Human Rights & Citizenship', item: `${SITE_URL}/study-guide/human-rights` },
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

export default function HumanRightsAndCitizenship() {
    useDocumentMeta({
        title: 'Human Rights & Citizenship: Life in the UK Test 2026',
        description: 'A filterable fact-card guide to human rights, equal opportunities and citizenship responsibilities, sourced from the official Life in the UK Test handbook.',
        path: '/study-guide/human-rights',
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
                    ⚖️ Human Rights & Citizenship
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Human rights, equal opportunities and the responsibilities that come with being a citizen. Filter by category and tap a card for more detail.
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
                        <Link to="/study-guide/taxation-and-driving" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            🚗 Taxation & Driving
                        </Link>
                        <Link to="/study-guide/britain-in-the-world" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            🌍 Britain in the World
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
