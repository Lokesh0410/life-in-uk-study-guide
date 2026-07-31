import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';

// All facts sourced directly from the official Life in the UK Handbook,
// "IV. The role of the courts" section (Criminal courts / Civil courts).
const CRIMINAL_TIERS = [
    {
        key: 'magistrates',
        emoji: '⚖️',
        title: "Magistrates' Court",
        variant: "Justice of the Peace Court in Scotland",
        color: 'bg-emerald-600',
        light: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300',
        desc: "In England, Wales and Northern Ireland, most minor criminal cases are dealt with in a Magistrates' Court. In Scotland, minor criminal offences go to a Justice of the Peace Court.",
        detail: "Magistrates and Justices of the Peace (JPs) are members of the local community. In England, Wales and Scotland they usually work unpaid and do not need legal qualifications: they receive training and are supported by a legal adviser. Magistrates decide the verdict and, if guilty, the sentence. In Northern Ireland, cases are heard by a District Judge or Deputy District Judge, who is legally qualified and paid.",
        hasScottishVariant: true,
    },
    {
        key: 'youth',
        emoji: '🧑',
        title: 'Youth Court',
        variant: "Children's Hearings System (Scotland) / Youth conferencing (NI)",
        color: 'bg-amber-600',
        light: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300',
        desc: "In England, Wales and Northern Ireland, if an accused person is aged 10 to 17, the case is normally heard in a Youth Court in front of up to three specially trained magistrates or a District Judge.",
        detail: "The most serious cases still go to the Crown Court. Parents or carers are expected to attend, the public is not allowed in, and the young person's name or photo cannot be published. Scotland instead uses the Children's Hearings System; Northern Ireland uses a system of youth conferencing.",
        hasScottishVariant: true,
    },
    {
        key: 'crown',
        emoji: '👨‍⚖️',
        title: 'Crown Court',
        variant: 'Sheriff Court / High Court in Scotland',
        color: 'bg-indigo-600',
        light: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300',
        desc: 'In England, Wales and Northern Ireland, serious offences are tried in front of a judge and a jury in a Crown Court.',
        detail: "In Scotland, serious cases are heard in a Sheriff Court with either a sheriff alone or a sheriff with a jury. The most serious Scottish cases, such as murder, are heard at a High Court with a judge and jury. A jury has 12 members in England, Wales and Northern Ireland, and 15 members in Scotland. In Scotland, a third verdict of 'not proven' is also possible alongside 'guilty' / 'not guilty'. If the jury finds a defendant guilty, the judge decides the penalty.",
        hasScottishVariant: true,
    },
];

const CIVIL_TIERS = [
    {
        key: 'county',
        emoji: '📋',
        title: 'County Court',
        variant: 'Sheriff Court in Scotland',
        color: 'bg-sky-600',
        light: 'bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300',
        desc: 'County Courts deal with a wide range of civil disputes: getting back money that is owed, personal injury, family matters, breach of contract, and divorce.',
        detail: 'In Scotland, most of these matters are dealt with in the Sheriff Court instead.',
        hasScottishVariant: true,
    },
    {
        key: 'small-claims',
        emoji: '🧾',
        title: 'Small Claims Procedure',
        variant: 'Informal, no lawyer needed',
        color: 'bg-teal-600',
        light: 'bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300',
        desc: 'An informal way of settling minor disputes without spending a lot of time and money on a lawyer. The hearing is held in front of a judge in an ordinary room.',
        detail: 'Used for claims of less than £5,000 in England and Wales, and less than £3,000 in Scotland and Northern Ireland. Small claims can also be issued online through Money Claims Online.',
        hasScottishVariant: false,
    },
    {
        key: 'high',
        emoji: '🏛️',
        title: 'High Court',
        variant: 'Court of Session in Scotland',
        color: 'bg-violet-600',
        light: 'bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300',
        desc: 'More serious civil cases (for example, when a large amount of compensation is being claimed) are dealt with in the High Court in England, Wales and Northern Ireland.',
        detail: 'In Scotland, these cases are dealt with in the Court of Session in Edinburgh instead.',
        hasScottishVariant: true,
    },
];

function TierNode({ tier, isOpen, onToggle, index, total, railColor }) {
    return (
        <div className="relative pl-10 sm:pl-12">
            {/* Rail segment behind this node */}
            {index < total - 1 && (
                <div className={`absolute left-[15px] sm:left-[19px] top-9 bottom-[-1.5rem] w-0.5 ${railColor}`} />
            )}
            {/* Node dot on the rail */}
            <div className={`absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full ${tier.color} text-white flex items-center justify-center font-bold text-xs sm:text-sm ring-4 ring-slate-50 dark:ring-slate-950 z-10`}>
                {index + 1}
            </div>

            <button
                onClick={onToggle}
                className="flex flex-col items-start text-left w-full rounded-2xl border p-4 sm:p-5 shadow-sm transition bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800 mb-2"
            >
                <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className={`inline-flex items-start gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${tier.light}`}>
                        <span className="whitespace-nowrap">{tier.emoji}</span>
                        <span>{tier.variant}</span>
                    </span>
                    {tier.hasScottishVariant && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                            🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland differs
                        </span>
                    )}
                </div>
                <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-slate-900 dark:text-slate-50 leading-snug">{tier.title}</h3>
                    <span className="text-indigo-500 dark:text-indigo-400 text-sm flex-shrink-0">{isOpen ? '−' : '+'}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{tier.desc}</p>
                {isOpen && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">{tier.detail}</p>
                )}
            </button>

            {/* Directional chevron between every tier */}
            {index < total - 1 && (
                <div className="flex justify-start pl-[-2px] mb-2 -mt-1">
                    <span className={`inline-flex items-center justify-center w-8 sm:w-10 text-slate-300 dark:text-slate-700 text-xl leading-none`}>
                        ⌄
                    </span>
                </div>
            )}
        </div>
    );
}

function TierGroup({ title, subtitle, tiers, openKeys, toggleKey, groupKey, railColor }) {
    return (
        <div className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">{title}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">{subtitle}</p>
            <div className="flex flex-col">
                {tiers.map((tier, i) => {
                    const key = `${groupKey}-${tier.key}`;
                    return (
                        <TierNode
                            key={key}
                            tier={tier}
                            index={i}
                            total={tiers.length}
                            railColor={railColor}
                            isOpen={openKeys.has(key)}
                            onToggle={() => toggleKey(key)}
                        />
                    );
                })}
            </div>
        </div>
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
        { "@type": "ListItem", position: 4, name: "Court Hierarchy", item: `${SITE_URL}/study-guide/court-hierarchy` },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...CRIMINAL_TIERS, ...CIVIL_TIERS].map(t => ({
        "@type": "Question",
        name: `What is the ${t.title}?`,
        acceptedAnswer: {
            "@type": "Answer",
            text: `${t.desc} ${t.detail}`,
        },
    })),
};

export default function CourtHierarchy() {
    useDocumentMeta({
        title: 'Court Hierarchy: Life in the UK Test 2026',
        description: "Magistrates' Courts, Crown Courts, County Courts and the High Court explained: how criminal and civil cases move through the justice system in England, Wales, Scotland and Northern Ireland, per the Life in the UK Test handbook.",
        path: '/study-guide/court-hierarchy',
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
            <div className="max-w-3xl mx-auto">
                <Link to="/study-guide/government-and-law" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-sm mb-6 inline-block">
                    ← Back to Government and Law Guide
                </Link>

                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-2">
                    ⚖️ Court Hierarchy
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    There are differences between the court systems in England and Wales, Scotland, and Northern Ireland. Tap a tier to see how it works and its Scottish/NI equivalent.
                </p>

                <TierGroup
                    groupKey="criminal"
                    title="Criminal Courts"
                    subtitle="Least serious → most serious"
                    tiers={CRIMINAL_TIERS}
                    railColor="bg-emerald-200 dark:bg-emerald-900"
                    openKeys={openKeys}
                    toggleKey={toggleKey}
                />

                <TierGroup
                    groupKey="civil"
                    title="Civil Courts"
                    subtitle="Everyday disputes → high-value claims"
                    tiers={CIVIL_TIERS}
                    railColor="bg-sky-200 dark:bg-sky-900"
                    openKeys={openKeys}
                    toggleKey={toggleKey}
                />

                <div className="mb-6">
                    <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-2">Explore more from Government & Law</h2>
                    <div className="inline-flex flex-wrap gap-2">
                        <Link to="/study-guide/devolved-nations" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            🏴 Devolved Parliaments & Legal Systems
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
