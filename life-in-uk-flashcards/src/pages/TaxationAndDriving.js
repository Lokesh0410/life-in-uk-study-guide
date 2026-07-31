import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';

// Taxation and driving facts, sourced directly from the "Taxation", "National
// Insurance" and "Driving" sections of the handbook.
const CATEGORY_STYLES = {
    'Taxation': { emoji: '💷', color: 'bg-emerald-600', light: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' },
    'Driving & Vehicles': { emoji: '🚗', color: 'bg-indigo-600', light: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300' },
};

const facts = [
    // --- Taxation ---
    {
        title: 'Income Tax',
        category: 'Taxation',
        fact: 'People in the UK have to pay tax on their income, which includes wages from paid employment, profits from self-employment, taxable benefits, pensions, income from property, savings and dividends.',
        detail: 'Money raised from income tax pays for government services such as roads, education, police and the armed forces.',
    },
    {
        title: 'PAYE and self-assessment',
        category: 'Taxation',
        fact: 'For most people, the right amount of income tax is automatically taken from their employment income by their employer and paid to HM Revenue & Customs (HMRC): this is called "Pay As You Earn" (PAYE).',
        detail: 'If you are self-employed, you need to pay your own tax through a system called "self-assessment", which includes completing a tax return. If HMRC sends you a tax return, it is important to complete and return it as soon as you have all the necessary information.',
    },
    {
        title: 'National Insurance Contributions',
        category: 'Taxation',
        fact: 'Almost everybody in the UK who is in paid work, including self-employed people, must pay National Insurance Contributions. The money raised is used to pay for state benefits and services such as the state retirement pension and the NHS.',
        detail: 'Employees have their contributions deducted from their pay by their employer. Self-employed people must pay their own. Anyone who does not pay enough National Insurance will not be able to receive certain contributory benefits, such as Jobseeker’s Allowance or a full state retirement pension. Some workers, such as part-time workers, may not qualify for statutory payments like maternity pay if they do not earn enough.',
    },
    {
        title: 'National Insurance number',
        category: 'Taxation',
        fact: 'A National Insurance number is a unique personal account number that makes sure your National Insurance Contributions and tax are properly recorded against your name. All young people in the UK are sent one just before their 16th birthday.',
        detail: 'A non-UK national living in the UK and looking for work, starting work or setting up as self-employed will need a National Insurance number, though you can start work without one. You will need to telephone the Department for Work and Pensions (DWP) to arrange to get one, and may be required to attend an interview with documents proving your identity and permission to work. A National Insurance number does not on its own prove to an employer that you have the right to work in the UK.',
    },
    // --- Driving & Vehicles ---
    {
        title: 'Minimum driving age and licence',
        category: 'Driving & Vehicles',
        fact: 'In the UK, you must be at least 17 years old to drive a car or motor cycle, and you must have a driving licence to drive on public roads. To get a UK driving licence you must pass a driving test, which tests both your knowledge and your practical skills.',
        detail: 'You need to be at least 16 years old to ride a moped, and there are other age requirements and special tests for driving large vehicles.',
    },
    {
        title: 'Licence renewal after 70',
        category: 'Driving & Vehicles',
        fact: 'Drivers can use their driving licence until they are 70 years old. After that, the licence is valid for three years at a time.',
        detail: '',
    },
    {
        title: "'R' plates in Northern Ireland",
        category: 'Driving & Vehicles',
        fact: 'In Northern Ireland, a newly qualified driver must display an ‘R’ plate (for restricted driver) for one year after passing the test.',
        detail: '',
    },
    {
        title: 'Driving on a foreign licence',
        category: 'Driving & Vehicles',
        fact: 'If your driving licence is from a country in the EU, Iceland, Liechtenstein or Norway, you can drive in the UK for as long as your licence is valid. If you have a licence from any other country, you may use it in the UK for up to 12 months.',
        detail: 'To continue driving after that 12-month period, you must get a UK full driving licence.',
    },
    {
        title: 'Vehicle registration and road tax',
        category: 'Driving & Vehicles',
        fact: 'If you are resident in the UK, your car or motor cycle must be registered at the Driver and Vehicle Licensing Agency (DVLA). You must pay an annual road tax and display the tax disc, which shows that the tax has been paid, on the windscreen.',
        detail: 'You can find out more about vehicle tax requirements from www.gov.uk.',
    },
    {
        title: 'Motor insurance',
        category: 'Driving & Vehicles',
        fact: 'You must have valid motor insurance to drive in the UK. It is a serious criminal offence to drive without insurance.',
        detail: '',
    },
    {
        title: 'MOT test',
        category: 'Driving & Vehicles',
        fact: 'If your vehicle is over three years old, you must take it for a Ministry of Transport (MOT) test every year. It is an offence not to have an MOT certificate if your vehicle is more than three years old.',
        detail: 'You can find out more about MOT requirements from www.gov.uk.',
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
        { '@type': 'ListItem', position: 4, name: 'Taxation & Driving', item: `${SITE_URL}/study-guide/taxation-and-driving` },
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

export default function TaxationAndDriving() {
    useDocumentMeta({
        title: 'Taxation & Driving: Life in the UK Test 2026',
        description: 'A filterable fact-card guide to UK income tax, National Insurance and driving licence rules, sourced from the official Life in the UK Test handbook.',
        path: '/study-guide/taxation-and-driving',
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
                    🚗 Taxation & Driving
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Income tax, National Insurance, and the rules for getting and keeping a UK driving licence. Filter by category and tap a card for more detail.
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
