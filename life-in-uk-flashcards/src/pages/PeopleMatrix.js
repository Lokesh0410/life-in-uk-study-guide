import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';

// Historical figures (non-monarchs) covered with real biographical/achievement
// text in the Life in the UK handbook. Monarchs have their own timeline page.
// Facts are pulled directly from the handbook's narrative text — quiz-answer-key
// only mentions (e.g. Robert Peel, Gladstone, Disraeli, Lloyd George) are
// excluded since the handbook gives them no biographical paragraph.
const CATEGORY_STYLES = {
    'Scientists & Inventors': { emoji: '🔬', color: 'bg-emerald-600', light: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' },
    'Political Leaders': { emoji: '🏛️', color: 'bg-indigo-600', light: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300' },
    'Artists & Writers': { emoji: '🎭', color: 'bg-rose-500', light: 'bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300' },
    'Reformers & Trailblazers': { emoji: '✊', color: 'bg-amber-600', light: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300' },
};

const people = [
    // --- Scientists & Inventors ---
    {
        name: 'Sir Isaac Newton',
        category: 'Scientists & Inventors',
        years: '1642–1726/27',
        fact: 'English mathematician, physicist and astronomer; early member of the Royal Society.',
        detail: 'His book Philosophiae Naturalis Principia Mathematica (1687) laid the foundations of classical mechanics and showed how gravity applied to the whole universe. He also discovered that white light is made up of the colours of the rainbow.',
    },
    {
        name: 'Sir Edmund Halley',
        category: 'Scientists & Inventors',
        years: '',
        fact: 'Early Royal Society member who successfully predicted the return of the comet now called Halley’s Comet.',
        detail: '',
    },
    {
        name: 'James Watt',
        category: 'Scientists & Inventors',
        years: '',
        fact: 'His work on steam power helped drive the progress of the Industrial Revolution.',
        detail: '',
    },
    {
        name: 'Isambard Kingdom Brunel',
        category: 'Scientists & Inventors',
        years: '1806–59',
        fact: 'Engineer who built tunnels, bridges, railway lines and ships, including the Great Western Railway.',
        detail: 'He designed and built three ships that revolutionised naval engineering: the SS Great Western (1838), SS Great Britain (1843) and SS Great Eastern (1859). In a 2002 BBC public poll he was placed second in the "100 Greatest Britons".',
    },
    {
        name: 'George & Robert Stephenson',
        category: 'Scientists & Inventors',
        years: '',
        fact: 'Father and son who pioneered the railway engine, driving a major expansion of the railways in the Victorian period.',
        detail: '',
    },
    {
        name: 'Ernest Rutherford',
        category: 'Scientists & Inventors',
        years: '',
        fact: 'Led the scientists at Manchester and then Cambridge University who were the first to "split the atom"; took part in the Manhattan Project.',
        detail: '',
    },
    {
        name: 'Alexander Fleming',
        category: 'Scientists & Inventors',
        years: '1881–1955',
        fact: 'Discovered penicillin in 1928 while researching influenza; won the Nobel Prize in Medicine in 1945.',
        detail: 'Born in Scotland, he moved to London as a teenager and qualified as a doctor. Penicillin was further developed into a usable drug by Howard Florey and Ernst Chain, and was in mass production by the 1940s.',
    },
    {
        name: 'Sir Robert Watson-Watt',
        category: 'Scientists & Inventors',
        years: '1892–1973',
        fact: 'Scottish scientist who developed radar, proposing that enemy aircraft could be detected by radio waves.',
        detail: 'The first successful radar test took place in 1935.',
    },
    {
        name: 'Alan Turing',
        category: 'Scientists & Inventors',
        years: '1912–54',
        fact: 'British mathematician who invented the theoretical Turing machine in the 1930s, influential in the development of computer science.',
        detail: '',
    },
    {
        name: 'Sir Frank Whittle',
        category: 'Scientists & Inventors',
        years: '1907–96',
        fact: 'British Royal Air Force engineer officer who developed the jet engine in Britain in the 1930s.',
        detail: '',
    },
    {
        name: 'Sir Tim Berners-Lee',
        category: 'Scientists & Inventors',
        years: '1955–',
        fact: 'Inventor of the World Wide Web. Information was successfully transferred via the web for the first time on 25 December 1990.',
        detail: '',
    },
    {
        name: 'Adam Smith',
        category: 'Scientists & Inventors',
        years: '',
        fact: 'Enlightenment thinker who developed ideas about economics which are still referred to today.',
        detail: '',
    },
    {
        name: 'David Hume',
        category: 'Scientists & Inventors',
        years: '',
        fact: 'Enlightenment philosopher whose ideas about human nature continue to influence philosophers today.',
        detail: '',
    },

    // --- Political Leaders ---
    {
        name: 'Sir Robert Walpole',
        category: 'Political Leaders',
        years: '1676–1745',
        fact: 'First person to be called Prime Minister, serving from 1721 to 1742, after George I (who spoke poor English) relied heavily on ministers.',
        detail: '',
    },
    {
        name: 'Admiral Nelson',
        category: 'Political Leaders',
        years: '',
        fact: 'Commanded the British fleet at the Battle of Trafalgar (1805), where Britain defeated the combined French and Spanish fleets; he was killed in the battle.',
        detail: 'Nelson’s Column in Trafalgar Square, London, is a monument to him. His ship, HMS Victory, can be visited in Portsmouth.',
    },
    {
        name: 'The Duke of Wellington',
        category: 'Political Leaders',
        years: '',
        fact: 'Known as the Iron Duke; defeated Napoleon at the Battle of Waterloo in 1815 and later became Prime Minister.',
        detail: '',
    },
    {
        name: 'Winston Churchill',
        category: 'Political Leaders',
        years: '1874–1965',
        fact: 'Became Prime Minister in May 1940 at a time of national crisis and refused to surrender to the Nazis.',
        detail: 'Son of a politician, he was a soldier and journalist before becoming a Conservative MP in 1900. He lost the 1945 election but returned as Prime Minister in 1951, remaining an MP until 1964.',
    },
    {
        name: 'Clement Attlee',
        category: 'Political Leaders',
        years: '1883–1967',
        fact: 'Labour Prime Minister from 1945 to 1951; his government nationalised major industries and created the National Health Service.',
        detail: 'Born in London, he studied at Oxford and became a barrister before doing social work in East London and becoming a Labour MP. He was Churchill’s Deputy Prime Minister in the wartime coalition and led the Labour Party for 20 years, the longest-serving Labour leader in British history.',
    },
    {
        name: 'William Beveridge (Lord Beveridge)',
        category: 'Political Leaders',
        years: '',
        fact: 'British economist and social reformer, best known for the 1942 Beveridge Report (Social Insurance and Allied Services), commissioned by the wartime government.',
        detail: 'He served briefly as a Liberal MP and later led the Liberals in the House of Lords. He served under Churchill on the Board of Trade and later as Permanent Secretary of the Ministry of Food.',
    },
    {
        name: 'Richard Austen Butler (Lord Butler)',
        category: 'Political Leaders',
        years: '1902–',
        fact: 'Conservative politician who, as Education Minister (1941–45), oversaw the Education Act 1944.',
        detail: 'He entered Parliament in 1929, helped pass the Government of India Act 1935, and later served as Chancellor of the Exchequer (1951–55), Home Secretary (1957–62), Deputy Prime Minister (1962–63) and Foreign Secretary (1963–64).',
    },
    {
        name: 'Margaret Thatcher',
        category: 'Political Leaders',
        years: '',
        fact: 'First woman Prime Minister of the UK (1979–1990) and the longest-serving Prime Minister of the 20th century.',
        detail: 'Daughter of a grocer from Grantham, Lincolnshire, she trained as a chemist and lawyer. Elected Conservative MP in 1959, she became Education Secretary in 1970 and Conservative leader in 1975. Her government privatised nationalised industries and imposed legal controls on trade unions; in 1982 she sent a naval taskforce that recovered the Falkland Islands after Argentina’s invasion.',
    },
];

// --- Artists & Writers ---
people.push(
    {
        name: 'William Shakespeare',
        category: 'Artists & Writers',
        years: '1564–1616',
        fact: 'Playwright and actor from Stratford-upon-Avon; most famous plays include A Midsummer Night’s Dream, Hamlet, Macbeth and Romeo and Juliet.',
        detail: 'He had a great influence on the English language and invented many words still common today. Many regard him as the greatest playwright of all time; the Globe Theatre in London is a modern copy of the theatres where his plays were first performed.',
    },
    {
        name: 'Geoffrey Chaucer',
        category: 'Artists & Writers',
        years: '',
        fact: 'Wrote The Canterbury Tales, a collection of poems about pilgrims travelling to Canterbury telling each other stories.',
        detail: 'Written in the years leading up to 1400, it was one of the first books printed by William Caxton, the first person in England to print books using a printing press.',
    },
    {
        name: 'Robert Burns',
        category: 'Artists & Writers',
        years: '1759–96',
        fact: 'Scottish poet known as "The Bard"; wrote in Scots and English, best known for the song Auld Lang Syne.',
        detail: 'He also revised many traditional folk songs by changing or adding lyrics. Auld Lang Syne is sung across the UK and beyond when celebrating the New Year (Hogmanay in Scotland).',
    },
    {
        name: 'Sir Christopher Wren',
        category: 'Artists & Writers',
        years: '',
        fact: 'Architect who designed the new St Paul’s Cathedral after the Great Fire of London (1666), helping develop a British version of Europe’s ornate architectural styles.',
        detail: '',
    },
    {
        name: 'Thomas Gainsborough',
        category: 'Artists & Writers',
        years: '1727–88',
        fact: 'Portrait painter who often painted people in country or garden scenery.',
        detail: '',
    },
    {
        name: 'Joseph Turner',
        category: 'Artists & Writers',
        years: '1775–1851',
        fact: 'Influential landscape painter in a modern style, considered the artist who raised the profile of landscape painting.',
        detail: 'The Turner Prize, established in 1984 and celebrating contemporary art, is named after him.',
    },
    {
        name: 'John Constable',
        category: 'Artists & Writers',
        years: '1776–1837',
        fact: 'Landscape painter most famous for his works of Dedham Vale on the Suffolk–Essex border.',
        detail: '',
    },
    {
        name: 'Jane Austen',
        category: 'Artists & Writers',
        years: '1775–1817',
        fact: 'English novelist whose books, including Pride and Prejudice and Sense and Sensibility, concern marriage and family relationships.',
        detail: 'Many of her novels have been made into television programmes or films.',
    },
    {
        name: 'Charles Dickens',
        category: 'Artists & Writers',
        years: '1812–70',
        fact: 'Wrote famous novels including Oliver Twist and Great Expectations.',
        detail: 'Characters from his books, such as Scrooge (a mean person) or Mr Micawber (always hopeful), are still referenced in everyday talk.',
    },
    {
        name: 'Sir Arthur Conan Doyle',
        category: 'Artists & Writers',
        years: '1859–1930',
        fact: 'Scottish doctor and writer best known for his Sherlock Holmes stories, one of the first fictional detectives.',
        detail: '',
    },
    {
        name: 'J K Rowling',
        category: 'Artists & Writers',
        years: '1965–',
        fact: 'Wrote the Harry Potter series of children’s books, which enjoyed huge international success.',
        detail: 'She now also writes fiction for adults.',
    },
    {
        name: 'John Milton',
        category: 'Artists & Writers',
        years: '',
        fact: 'Poet inspired by Protestant religious views; wrote Paradise Lost.',
        detail: '',
    },
    {
        name: 'William Wordsworth',
        category: 'Artists & Writers',
        years: '1770–1850',
        fact: 'Poet inspired by nature.',
        detail: '',
    },
    {
        name: 'Sir Walter Scott',
        category: 'Artists & Writers',
        years: '',
        fact: 'Wrote poems inspired by Scotland and the traditional stories and songs of the Scottish borders; also wrote novels, many set in Scotland.',
        detail: '',
    },
    {
        name: 'Lord Byron',
        category: 'Artists & Writers',
        years: '1788–1824',
        fact: 'A leading poet of the 19th century, author of "She Walks in Beauty".',
        detail: '',
    },
    {
        name: 'Dylan Thomas',
        category: 'Artists & Writers',
        years: '1914–53',
        fact: 'Welsh poet and writer known for the radio play Under Milk Wood and the poem Do Not Go Gentle into That Good Night.',
        detail: 'He often read and performed his work in public, including for the BBC, and died at 39 in New York. There are several memorials to him in his birthplace, Swansea, including a statue and the Dylan Thomas Centre.',
    },
    {
        name: 'Roald Dahl',
        category: 'Artists & Writers',
        years: '1916–90',
        fact: 'Born in Wales to Norwegian parents; served in the Royal Air Force in the Second World War before becoming a celebrated children’s author.',
        detail: 'His short stories are known for unexpected endings, and his children’s books for their unsentimental, macabre, often darkly comic mood featuring villainous adult enemies of the child characters.',
    },
    {
        name: 'George Frederick Handel',
        category: 'Artists & Writers',
        years: '1695–1759',
        fact: 'German-born composer who became a British citizen in 1727; wrote Water Music for George I and Music for the Royal Fireworks for George II.',
        detail: 'He also wrote the oratorio Messiah, regularly sung by choirs, often at Easter time.',
    },
    {
        name: 'Gustav Holst',
        category: 'Artists & Writers',
        years: '1874–1934',
        fact: 'Composer whose work includes The Planets, a suite themed around the planets of the solar system.',
        detail: 'He adapted Jupiter, from The Planets, as the tune for "I vow to thee my country", a popular hymn in British churches.',
    },
    {
        name: 'Sir Edward Elgar',
        category: 'Artists & Writers',
        years: '1857–1934',
        fact: 'Born in Worcester; best known for the Pomp and Circumstance Marches.',
        detail: 'March No 1 (Land of Hope and Glory) is usually played at the Last Night of the Proms at the Royal Albert Hall.',
    },
    {
        name: 'Benjamin Britten',
        category: 'Artists & Writers',
        years: '1913–76',
        fact: 'Best known for operas including Peter Grimes and Billy Budd.',
        detail: 'He also wrote A Young Person’s Guide to the Orchestra, based on a piece by Purcell, and founded the Aldeburgh Festival in Suffolk.',
    },
    {
        name: 'Dame Agatha Christie',
        category: 'Artists & Writers',
        years: '',
        fact: 'Author of The Mousetrap, a murder-mystery play running in London’s West End since 1952: the longest initial run of any show in history.',
        detail: 'Her detective stories are read all over the world.',
    },
);

// --- Reformers & Trailblazers ---
people.push(
    {
        name: 'Boudicca',
        category: 'Reformers & Trailblazers',
        years: '',
        fact: 'Queen of the Iceni who led a tribal revolt against the Romans in eastern England.',
        detail: 'She is still remembered today, and there is a statue of her on Westminster Bridge in London, near the Houses of Parliament.',
    },
    {
        name: 'William Wilberforce',
        category: 'Reformers & Trailblazers',
        years: '',
        fact: 'Evangelical Christian and MP who played an important part in changing the law to end Britain’s involvement in the slave trade.',
        detail: 'Along with other abolitionists, he succeeded in turning public opinion against the slave trade, working alongside the first anti-slavery groups set up by the Quakers in the late 1700s.',
    },
    {
        name: 'Florence Nightingale',
        category: 'Reformers & Trailblazers',
        years: '1820–1910',
        fact: 'Trained as a nurse and, in 1854, worked in military hospitals in Turkey treating soldiers in the Crimean War, reducing the mortality rate.',
        detail: 'In 1860 she established the Nightingale Training School for nurses at St Thomas’ Hospital, London, the first secular nursing school in the world, now part of King’s College London. She is often regarded as the founder of modern nursing; the Nightingale Pledge, the Florence Nightingale Medal and International Nurses Day (on her birthday) are named in her honour.',
    },
    {
        name: 'Emmeline Pankhurst',
        category: 'Reformers & Trailblazers',
        years: '1858–1928',
        fact: 'Founded the Women’s Social and Political Union (WSPU) in 1903, whose members were the first to be called "suffragettes".',
        detail: 'Born in Manchester, she set up the Women’s Franchise League in 1889 to fight for married women’s votes in local elections. The WSPU used civil disobedience as part of its protest to gain the vote for women.',
    },
    {
        name: 'Mary Peters',
        category: 'Reformers & Trailblazers',
        years: '',
        fact: 'Won an Olympic gold medal in the pentathlon at the 1972 Munich Olympics, competing for Great Britain and Northern Ireland, setting a world record score.',
        detail: 'Born in Manchester, she moved to Northern Ireland as a child. Despite death threats after her win, she insisted on remaining in Northern Ireland and later raised money for local athletics and became team manager for the women’s British Olympic team. She won the BBC Sports Personality of the Year award in 1972.',
    },
);

const categories = Object.keys(CATEGORY_STYLES);

function PersonCard({ person, isOpen, onToggle }) {
    const style = CATEGORY_STYLES[person.category];
    return (
        <button
            onClick={onToggle}
            className={`text-left w-full rounded-2xl border p-4 shadow-sm transition ${isOpen ? 'border-transparent ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-950' : 'border-slate-100 dark:border-slate-800'} bg-white dark:bg-slate-900`}
        >
            <div className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-full mb-3 ${style.light}`}>
                <span>{style.emoji}</span>{person.category}
            </div>
            <div className="text-lg font-extrabold text-slate-900 dark:text-slate-50 leading-snug">{person.name}</div>
            {person.years && (
                <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-0.5">{person.years}</div>
            )}
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{person.fact}</p>
            {isOpen && person.detail && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">{person.detail}</p>
            )}
            {!isOpen && person.detail && (
                <p className="text-[11px] text-indigo-500 dark:text-indigo-400 mt-3 font-medium">Tap for more →</p>
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
        { "@type": "ListItem", position: 4, name: "Who's Who of British History", item: `${SITE_URL}/study-guide/people-matrix` },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Who's Who of British History",
    description: "A color-coded, filterable cheat sheet of every scientist, political leader, writer, artist and reformer covered in the Life in the UK Test handbook.",
    about: "Historical British figures: scientists, political leaders, writers, artists and reformers",
    mentions: people.map(p => ({
        "@type": "Person",
        name: p.name,
        description: p.category,
    })),
};

export default function PeopleMatrix() {
    useDocumentMeta({
        title: 'Who’s Who of British History: Life in the UK Test 2026',
        description: 'A color-coded, filterable cheat sheet of every scientist, political leader, writer, artist and reformer covered in the Life in the UK Test handbook.',
        path: '/study-guide/people-matrix',
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

    const visible = activeCategory ? people.filter(p => p.category === activeCategory) : people;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <Link to="/study-guide/british-history" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-sm mb-6 inline-block">
                    ← Back to British History Guide
                </Link>

                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-2">
                    🧑‍🎓 Who's Who of British History
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Scientists, political leaders, writers, artists and reformers: the people the exam loves to mix up. Filter by category and tap a card for more detail.
                </p>

                {/* Category filter chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`whitespace-nowrap text-xs font-bold px-3 py-1.5 rounded-full border transition ${!activeCategory ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 border-transparent' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}
                    >
                        All People
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
                    {visible.map((person) => {
                        const key = person.name;
                        return (
                            <PersonCard
                                key={key}
                                person={person}
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
                        <Link to="/study-guide/inventions-timeline" className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            💡 Inventions & Discoveries
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
